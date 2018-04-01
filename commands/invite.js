const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
  if(message.author.bot) return undefined;
   message.channel.send("https://discordapp.com/oauth2/authorize?client_id=421334458357252096&scope=bot&permissions=8");
}

module.exports.help = {
  name: "invite"
}