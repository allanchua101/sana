import { fromIni } from "@aws-sdk/credential-provider-ini";
const COFFEE_EMOJI = `\u{2615}`;

export function loadAWSCredentials(command, awsProfileName, logger) {
  let credentials;
  const emoji = COFFEE_EMOJI.length >= 1 ? COFFEE_EMOJI : "";

  // Use the provided profile name to load credentials
  if (awsProfileName) {
    logger.log(
      `Analyzing ${command} using named profile (${awsProfileName}) ${emoji}...`
    );

    credentials = fromIni({ profile: awsProfileName });
  }

  // TODO: Add support for environment variables

  // If no profile name is provided, use the
  // default credentials provider chain
  if (!awsProfileName) {
    logger.log(`Analyzing ${command} using the default profile ${emoji}...`);

    credentials = fromIni({});
  }

  if (!credentials) {
    throw new Error("Couldn't find the AWS profile");
  }

  return credentials;
}
