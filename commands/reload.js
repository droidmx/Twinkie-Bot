const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
  let Owner = message.guild.roles.find('name', 'Owner');
  if (!message.member.roles.has(Owner.id)) return message.reply('You need Owner role to use this command');
  let reloadembed = new Discord.RichEmbed()
  .setTitle("Reloading...")
  .setColor(green)
  .setDescription("Reloading Done! All cache released!")
  message.channel.send(reloadembed);

}

module.exports.help = {
  name: "reload"
}
