// NOTE: this is from https://github.com/discord/cloudflare-sample-app/tree/main
import { Hono } from "hono";
import { InteractionResponseType, InteractionType } from "discord-interactions";
import { DEBUG } from "./commands.js";
import { Bindings, InteractionReply } from "./types.js";
import { verifyDiscordRequest } from "./utils.js";

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => {
  return new Response(`👋 ${c.env.DISCORD_APPLICATION_ID}`);
});

app.post("/", async (c) => {
  const { isValid, interaction } = await server.verifyDiscordRequest(c);

  if (!isValid || !interaction) {
    return new Response("Bad request signature.", { status: 401 });
  }

  if (interaction.type === InteractionType.PING) {
    return c.json({
      type: InteractionResponseType.PONG,
    });
  }

  if (interaction.type === InteractionType.MESSAGE_COMPONENT) {
    const payload = interaction as InteractionReply;
    if (payload.data.custom_id === "click_one") {
      return c.json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `<@${payload.message.interaction_metadata.user.id}> clicked the button!, do it again 😂`,
          components: [
            {
              type: 1,
              components: [
                {
                  type: 2,
                  label: "Don't Click Me!",
                  style: 4,
                  custom_id: "click_one",
                },
              ],
            },
          ],
        },
      });
    }
  }

  // https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-data-structure
  if (interaction.type === InteractionType.APPLICATION_COMMAND) {
    const command = interaction.data.name.toLowerCase();

    if (command === DEBUG.name.toLowerCase()) {
      return c.json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content:
            "This button is amazing but with great power comes great responsibility! 😂",
          components: [
            {
              type: 1,
              components: [
                {
                  type: 2,
                  label: "Don't Click Me!",
                  style: 1,
                  custom_id: "click_one",
                },
              ],
            },
          ],
        },
      });
    }

    return c.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Sorry, I don't know that command.",
      },
    });
  }

  console.error("Unknown Type");
  return c.json({ error: "Unknown Type" }, { status: 400 });
});

app.all("*", () => new Response("Not Found.", { status: 404 }));

const server = {
  verifyDiscordRequest,
  fetch: app.fetch,
};

export default server;
