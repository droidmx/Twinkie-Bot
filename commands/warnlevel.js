const Discord = require('discord.js');
const fs = require('fs');
const ms = require('ms');
const botconfig = require('../botconfig.json');
const green = botconfig.green;
let warns = JSON.parse(fs.readFileSync('./warnings.json', 'utf8'));

module.exports.run = async (bot, message, args) => {
  let Staff = message.guild.roles.find('name', 'Staff');
  if (!message.member.roles.has(Staff.id)) return message.reply('You need Staff role to use this command');
  if (args[0] === 'help') {
    message.reply('Usage: %warnlevel <user>');
    return;
  }
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!wUser) return message.reply('Couldn\'t find them yo');
  let warnlevel = warns[wUser.id].warns

  let warnlevelembed = new Discord.RichEmbed()
    .setDescription('Warn Level')
    .setColor(green)
    .addField(`User:`, `${wUser}`)
    .addField('Number Of Warns', warnlevel);

  message.channel.send(warnlevelembed);
}

module.exports.help = {
  name: 'warnlevel'
}
