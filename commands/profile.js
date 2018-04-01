const Discord = require('discord.js');
const botconfig = require('../botconfig.json');
const green = botconfig.green;
module.exports.run = async (bot, message, args) => {
  let Embed = new Discord.RichEmbed()
  .setTitle(message.author.username)
  .setColor(green)
  .setDescription("No bio set.")
  .setThumbnail(message.author.displayAvatarURL);
  message.channel.send(Embed);
}
module.exports.help = {
  name: "profile"
}
