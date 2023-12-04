import { EC2Client, DescribeRegionsCommand } from "@aws-sdk/client-ec2";

export async function getAccountRegions(params, credentials) {
  const ec2Client = new EC2Client({
    // EC2 is available in all regions, so we can use a default region
    region: "us-east-1",
    credentials,
  });

  const command = new DescribeRegionsCommand({});
  const response = await ec2Client.send(command);

  // Support multi-region flag by
  // seeking comma (,) in the region-name flag
  if (params.region && params.region.indexOf(",") > -1) {
    const targetRegions = params.region.split(",");

    return response.Regions.map((r) => r.RegionName).filter(
      (r) => targetRegions.indexOf(r) > -1
    );
  }

  if (params.region) {
    const desiredRegion = response.Regions.find(
      (r) => r.RegionName === params.region
    );

    return desiredRegion ? [desiredRegion.RegionName] : [];
  }

  const regionNames = response.Regions.map((region) => region.RegionName);

  return regionNames;
}
