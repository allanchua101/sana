import { LambdaClient, ListFunctionsCommand } from "@aws-sdk/client-lambda";
import { getAllRegions } from "./get-account-regions.mjs";
import { fromIni } from "@aws-sdk/credential-provider-ini";

export async function getAccountFunctions(profileName) {
  let credentials;

  // Use the provided profile name to load credentials
  if (profileName) {
    credentials = fromIni({ profile: profileName });
  }

  // If no profile name is provided, use the default credentials provider chain
  if (!profileName) {
    credentials = fromIni({});
  }

  const functionList = [];
  let isTruncated = true;
  let marker = undefined;

  const regions = await getAllRegions(profileName);

  for (let i = 0, len = regions.length; i < len; i++) {
    const region = regions[i];
    const lambdaClient = new LambdaClient({
      credentials,
      region,
    });

    console.log(`Reading functions from ${region}`);

    while (isTruncated) {
      const command = new ListFunctionsCommand({
        Marker: marker,
      });

      const response = await lambdaClient.send(command);

      if (response.Functions && response.Functions.length > 0) {
        functionList.push(
          ...response.Functions.map((func) => func.FunctionName)
        );
      }

      if (response.NextMarker) {
        marker = response.NextMarker;
      }

      if (!response.NextMarker) {
        isTruncated = false;
      }
    }
  }

  return functionList;
}
