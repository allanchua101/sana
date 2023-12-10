/**
 * @function parseCommands
 * @description Function used for parsing the core-commands of the CLI.
 * @param {string} commandStr Comma-separated string used to determine which commands are supported
 * @param {object[]} strategies List of supported command-handling strategies.
 * @param {object} logger Logger used for throwing exception if an unsupported command is found.
 */
export function parseCommands(commandStr, strategies, logger) {
  const commands =
    commandStr && commandStr.indexOf(",") > -1
      ? commandStr.split(",")
      : [commandStr];
  const invalidCmdList = commands.filter(
    (cmd) => !strategies.some((s) => s.key === cmd)
  );

  if (invalidCmdList && invalidCmdList.length > 0) {
    const invalidCmdListStr = invalidCmdList.join("\n");

    logger.error(
      `The following command(s) were not found:\n - ${invalidCmdListStr}`
    );

    process.exit(1);
  }

  return commands;
}
