import { Context } from "hono";

export type Bindings = {
	DISCORD_APPLICATION_ID: string;
	DISCORD_PUBLIC_KEY: string;
};

export type Request = Context<{
	Bindings: Bindings;
}>;

export const GUILD_INSTALL = 0;
export const USER_INSTALL = 1;

export interface Command {
	name: string;
	description: string;
	// TODO: type this better
	integration_types: number[];

	// TODO: type this better
	contexts: number[];
}

export interface InteractionReply {
	app_permissions: string;
	application_id: string;
	authorizing_integration_owners: AuthorizingIntegrationOwners;
	channel: Channel;
	channel_id: string;
	context: number;
	data: Data;
	entitlement_sku_ids: any[];
	entitlements: any[];
	guild: Guild;
	guild_id: string;
	guild_locale: string;
	id: string;
	locale: string;
	member: Member;
	message: Message;
	token: string;
	type: number;
	version: number;
}

export interface AuthorizingIntegrationOwners {
	"1": string;
}

export interface Channel {
	flags: number;
	guild_id: string;
	icon_emoji: IconEmoji;
	id: string;
	last_message_id: string;
	last_pin_timestamp: string;
	name: string;
	nsfw: boolean;
	parent_id: string;
	permissions: string;
	position: number;
	rate_limit_per_user: number;
	theme_color: any;
	topic: any;
	type: number;
}

export interface IconEmoji {
	id: any;
	name: string;
}

export interface Data {
	component_type: number;
	custom_id: string;
}

export interface Guild {
	features: string[];
	id: string;
	locale: string;
}

export interface Member {
	avatar: any;
	banner: any;
	communication_disabled_until: any;
	deaf: boolean;
	flags: number;
	joined_at: string;
	mute: boolean;
	nick: any;
	pending: boolean;
	permissions: string;
	premium_since: any;
	roles: string[];
	unusual_dm_activity_until: any;
	user: User;
}

export interface User {
	avatar: string;
	avatar_decoration_data: any;
	clan: any;
	discriminator: string;
	global_name: string;
	id: string;
	public_flags: number;
	username: string;
}

export interface Message {
	application_id: string;
	attachments: any[];
	author: Author;
	channel_id: string;
	components: Component[];
	content: string;
	edited_timestamp: any;
	embeds: any[];
	flags: number;
	id: string;
	interaction_metadata: InteractionMetadata;
	mention_everyone: boolean;
	mention_roles: any[];
	mentions: Mention[];
	message_reference: MessageReference;
	pinned: boolean;
	position: number;
	timestamp: string;
	tts: boolean;
	type: number;
	webhook_id: string;
}

export interface Author {
	avatar: string;
	avatar_decoration_data: any;
	bot: boolean;
	clan: any;
	discriminator: string;
	global_name: any;
	id: string;
	public_flags: number;
	username: string;
}

export interface Component {
	components: Component2[];
	id: number;
	type: number;
}

export interface Component2 {
	custom_id: string;
	id: number;
	label: string;
	style: number;
	type: number;
}

export interface InteractionMetadata {
	authorizing_integration_owners: AuthorizingIntegrationOwners2;
	ephemerality_reason: number;
	id: string;
	interacted_message_id: string;
	type: number;
	user: User2;
}

export interface AuthorizingIntegrationOwners2 {
	"1": string;
}

export interface User2 {
	avatar: string;
	avatar_decoration_data: any;
	clan: any;
	discriminator: string;
	global_name: string;
	id: string;
	public_flags: number;
	username: string;
}

export interface Mention {
	avatar: string;
	avatar_decoration_data: any;
	clan: any;
	discriminator: string;
	global_name: string;
	id: string;
	public_flags: number;
	username: string;
}

export interface MessageReference {
	channel_id: string;
	guild_id: string;
	message_id: string;
	type: number;
}
