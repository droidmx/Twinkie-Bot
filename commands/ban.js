const Discord = require('discord.js');
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
  let Staff = message.guild.roles.find('name', 'Staff');
  if (!message.member.roles.has(Staff.id)) return message.reply('You need Staff role to use this command');
  if (args[0] === 'help') {
    message.reply('Usage: %ban <user> <reason>');
    return;
  }
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!bUser) return message.channel.send("Can't find user!");
  let bReason = args.join(' ').slice(22)

  let banEmbed = new Discord.RichEmbed()
    .setDescription('~Ban~')
    .setColor(green)
    .addField('Banned User', `${bUser} with ID ${bUser.id}`)
    .addField('Banned By', `<@${message.author.id}> with ID ${message.author.id}`)
    .addField('Banned In', message.channel)
    .addField('Time', message.createdAt)
    .addField('Reason', bReason);

  let incidentchannel = message.guild.channels.find(`name`, 'incidents');
  if (!incidentchannel) return message.channel.send("Can't find incidents channel.");

  message.guild.member(bUser).ban(bReason);
  incidentchannel.send(banEmbed);
}
module.exports.help = {
  name: 'ban'
}
