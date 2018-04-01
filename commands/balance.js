const Discord = require('discord.js');
const economy = require('discord-eco');
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
  economy.fetchBalance(message.author.id).then((i) => {
  	let embed = new Discord.RichEmbed()
  	.setTitle(`${message.guild.name} Bank`)
  	.addField('Account Holder 🏧', message.author.username, true)
  	.addField('Account Balance 🏧', i.money, true)
  	.setColor(green)
    message.channel.send(embed);
  });
}
module.exports.help = {
  name: 'balance'
}