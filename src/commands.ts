import { GUILD_INSTALL, USER_INSTALL } from "./types.js";
import { defineCommand } from "./utils.js";

// details here https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command
export const DEBUG = defineCommand({
	name: "debug",
	description: "just a bot doing things to test the boundaries of discord",
	integration_types: [USER_INSTALL, GUILD_INSTALL],
	contexts: [0, 1, 2],
});

export const LINK = defineCommand({
	name: "link",
	description: "drop the link you know",
	integration_types: [USER_INSTALL, GUILD_INSTALL],
	contexts: [0, 1, 2],
});

export const BUTTON = defineCommand({
	name: "button",
	description: "testing a button",
	integration_types: [USER_INSTALL, GUILD_INSTALL],
	contexts: [0, 1, 2],
});
