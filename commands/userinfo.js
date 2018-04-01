const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
  
  let definedUser = message.mentions.users.first() || message.author;
  let uicon = definedUser.displayAvatarURL;
  let uEmbed = new Discord.RichEmbed()
  .setDescription("**User Information**")
  .setColor(green)
  .setTimestamp()
  .setThumbnail(uicon)
  .addField("**Userame**", definedUser.tag)
  .addField("**Discriminator**", definedUser.discriminator)
  .addField("**ID**", definedUser.id)
  .addField("**Status**",definedUser.presence.status)
  .setFooter("Twinkie bot", bot.user.displayAvatarURL);
  message.channel.send(uEmbed);
}

module.exports.help = {
  name: "userstats"
}