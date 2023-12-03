import { EC2Client, DescribeRegionsCommand } from "@aws-sdk/client-ec2";
import { fromIni } from "@aws-sdk/credential-provider-ini";

export async function getAllRegions(profileName) {
  let credentials;

  if (profileName) {
    credentials = fromIni({ profile: profileName });
  }

  if (!profileName) {
    credentials = fromIni({});
  }

  const ec2Client = new EC2Client({
    // EC2 is available in all regions, so we can use a default region
    region: "us-east-1",
    credentials,
  });

  const command = new DescribeRegionsCommand({});
  const response = await ec2Client.send(command);
  const regionNames = response.Regions.map((region) => region.RegionName);

  return regionNames;
}
