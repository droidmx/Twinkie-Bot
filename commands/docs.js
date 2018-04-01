const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
  let dchannel = message.guild.channels.find(`name`, "discord-bot-help");
  let docsEmbed = new Discord.RichEmbed()
  .setTitle("Discord Twinkie Server Docs")
  .setColor(green)
  .setThumbnail("https://cdn.discordapp.com/attachments/423906508204408892/424929962244440066/download.jpg")
  .setDescription("You can find the latest Twinkie bot server documentation below:arrow_down:")
  .addField("Discord Server", "https://discord.gg/hJZSxr8")
  .addField("Github", "https://github.com/123Titanic321")
  .setFooter(`If U got a problem feel free to ask in #help 👍`);
 message.channel.send(docsEmbed);
}

module.exports.help = {
  name: "docs"
}