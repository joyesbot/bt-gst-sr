
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const express = require('express');
require('dotenv').config();
const colors = require("colors");

const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('CoreX:791590 is online!'));
app.listen(port, () => console.log('\x1b[36m%s\x1b[0m', `|    🔗 Listening to Discord.js : ${port}`));

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    activities: [{ 
      name: 'Created by, CoreX | Bot Production',
      type: ActivityType.Listening
    }],
    status: 'online',
  });
});

client.on('messageCreate', message => {
  if(message.content == "hey") {
    message.channel.send("Hello!");
  } else if (message.content == "chat is dead") {
    message.channel.send("Thank God! At least you are alive");
  }
});

client.login(process.env.token);
