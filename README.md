# discord-science-app

A CF worker that's is a REST API for handling a discord app

### Running locally

You will need a to create an `.dev.vars` with the following:

```
DISCORD_APPLICATION_ID=
DISCORD_TOKEN=
DISCORD_PUBLIC_KEY=
```

### Starting a tunnel
You need to use `cloudflared` to allow your locally running server to be accessible by discord.

```
pnpm tunnel
```

If you want a persisted tunnel follow this example.
https://dev.to/hacksore/share-your-localhost-with-cloudflare-tunnels-43c9
