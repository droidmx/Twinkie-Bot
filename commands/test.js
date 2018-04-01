const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
  let testembed = new Discord.RichEmbed()
  .setTitle("Testing...")
  .setDescription('Testing the bot!')
  .addField("Testing 1/5", 'rebooting')
  .addField('Testing 2/5', 'Gathering recources')
  .addField('Testing 3/5', 'Eating twinkies')
  .addField('Testing 4/5', 'Powering accu')
  .setColor(green)
  .addField('Testing 5/5 Done!', 'Bot is online :thumbsup:');
  message.channel.send(testembed);
}

module.exports.help = {
  name: "test"
}