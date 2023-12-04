import {
  DynamoDBClient,
  ListTablesCommand,
  DescribeTableCommand,
} from "@aws-sdk/client-dynamodb";
import { getAllRegions } from "./get-account-regions.mjs";
import {
  startProgress,
  incrementProgress,
  stopProgressBar,
} from "./progress-bar/global-progress-bar.mjs";

export async function getAllDynamoDBTablesWithDesc(credentials) {
  const regions = await getAllRegions(credentials);
  const tables = [];

  startProgress(regions.length);

  for (let i = 0, len = regions.length; i < len; i++) {
    const region = regions[i];
    const ddbClient = new DynamoDBClient({
      credentials,
      region,
    });
    const regionTables = [];

    let startTableName = "";
    let hasResults = false;

    do {
      hasResults = false;

      const searchInput = {
        Limit: 100,
      };

      if (startTableName) {
        searchInput.ExclusiveStartTableName = startTableName;
      }

      const command = new ListTablesCommand(searchInput);
      const response = await ddbClient.send(command);

      if (response.TableNames && response.TableNames.length > 0) {
        startTableName = response.TableNames[response.TableNames.length - 1];

        regionTables.push(...response.TableNames);
        hasResults = true;
      }
    } while (hasResults);

    const metadataDesc = regionTables.map((rt) => {
      return new Promise(async (resolve) => {
        const descCmd = new DescribeTableCommand({ TableName: rt });
        const response = await ddbClient.send(descCmd);

        tables.push({
          name: rt,
          sana: {
            region,
            table: response.Table,
          },
        });

        resolve();
      });
    });

    await Promise.all(metadataDesc);

    incrementProgress();
  }

  stopProgressBar();

  return tables;
}
