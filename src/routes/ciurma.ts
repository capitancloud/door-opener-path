import { createFileRoute } from "@tanstack/react-router";

const DISCORD_URL = "https://discord.gg/VThxtMSgRf";

export const Route = createFileRoute("/ciurma")({
  server: {
    handlers: {
      GET: () => Response.redirect(DISCORD_URL, 302),
    },
  },
});
