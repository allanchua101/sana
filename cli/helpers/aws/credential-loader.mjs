import { fromIni } from "@aws-sdk/credential-provider-ini";

export function loadAWSCredentials(command, awsProfileName, logger) {
  let credentials;

  // Use the provided profile name to load credentials
  if (awsProfileName) {
    logger.log(`Analyzing ${command} using ${awsProfileName}`);

    credentials = fromIni({ profile: awsProfileName });
  }

  // TODO: Add support for environment variables

  // If no profile name is provided, use the
  // default credentials provider chain
  if (!awsProfileName) {
    logger.log(`Analyzing ${command} using the default profile.`);

    credentials = fromIni({});
  }

  if (!credentials) {
    throw new Error("Couldn't find the AWS profile");
  }

  return credentials;
}
