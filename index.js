require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Discord bot ready");
});

const bot_token = process.env.DISCORD_BOT_TOKEN;

client.login(bot_token);
