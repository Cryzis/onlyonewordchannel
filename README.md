# one word in a channel bot
A very simple discord bot that only allows one word in a certain channel.

## Installation
You need to install the [discord.js](https://discord.js.org/) package for the bot to work. 
```bash
npm install discord.js
```

## Configuration
For the discord bot to work succesfully, you need to edit the index.js

```
const responses = [
  '@user bozo, you can only say fr.', <-- Your Custom responce to a invalid message.
  'u noob, @user u can only say fr.'
  
    const channelId = 'CHANNEL ID'; 

client.login('YOUR_BOT_TOKEN');
