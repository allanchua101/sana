import { LambdaClient, ListFunctionsCommand } from "@aws-sdk/client-lambda";
import { getAccountRegions } from "./get-account-regions.mjs";
import {
  startProgress,
  incrementProgress,
  stopProgressBar,
} from "./progress-bar/global-progress-bar.mjs";

export async function getAccountLambdaFunctions(params, credentials) {
  const functionList = [];
  const regions = await getAccountRegions(params, credentials);

  startProgress(regions.length);

  for (let i = 0, len = regions.length; i < len; i++) {
    const region = regions[i];
    const lambdaClient = new LambdaClient({
      credentials,
      region,
    });

    let isTruncated = true;
    let marker = undefined;

    while (isTruncated) {
      const command = new ListFunctionsCommand({
        Marker: marker,
      });

      const response = await lambdaClient.send(command);

      if (response.Functions && response.Functions.length > 0) {
        functionList.push(
          ...response.Functions.map((f) => {
            const layerCount =
              f.Layers && f.Layers.length > 0 ? f.Layers.length : 0;
            const hasDLQ = !!f.DeadLetterConfig;

            return {
              ...f,
              sana: {
                region: region,
                layerCount,
                hasDLQ,
                dlqArn: hasDLQ ? f.DeadLetterConfig.TargetArn : null,
              },
            };
          })
        );
      }

      if (response.NextMarker) {
        marker = response.NextMarker;
      }

      if (!response.NextMarker) {
        isTruncated = false;
      }
    }

    incrementProgress();
  }

  stopProgressBar();

  return functionList;
}
