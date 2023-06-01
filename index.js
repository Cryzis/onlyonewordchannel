const Discord = require('discord.js');

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]
});

const responses = [
  '@user bozo, you can only say fr.', // your custom messages.
  'u noob, @user u can only say fr.'
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
  // Specify the text channel ID where the bot should enforce the rule
  const channelId = 'CHANNEL_ID'; // Replace 'CHANNEL_ID' with your discord channel id

  if (message.channel.id === channelId && !message.author.bot) {
    const wordRegex = /\bfr\b/i;                              //replace this with your msg
    const messageWords = message.content.split(' ');

    const hasOnlyFr = messageWords.every((word) => wordRegex.test(word));

    if (!hasOnlyFr) {
      message.delete();

      const randomIndex = Math.floor(Math.random() * responses.length);
      const response = responses[randomIndex].replace('@user', `<@${message.author.id}>`);

      message.channel.send(response)
        .then((msg) => {
          // Set a timer to delete the response message after 20 seconds
          msg.delete({ timeout: 20000 });
        })
        .catch(console.error);
    }
  }
});

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
client.login('YOUR_BOT_TOKEN');
