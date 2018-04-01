const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let Staff = message.guild.roles.find('name', 'Staff');
  if (!message.member.roles.has(Staff.id)) return message.reply('You need Staff role to use this command');
  if (args[0] === 'help') {
    message.reply('Usage: %removerole <user> <role>');
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return message.reply('Couldn\'t find that user.');
  let role = args.join(' ').slice(22);
  if (!role) return message.reply('Specify a role!');
  let gRole = message.guild.roles.find(r => r.name === role);
  if (!gRole) return message.reply('Couldn\'t find that role.');

  if (rMember.roles.has(gRole.id) === false) return message.reply('They don\'t have that role.');
  await (rMember.removeRole(gRole.id));

  try {
    message.channel.send(`RIP, you lost the ${gRole.name} role.`);
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`RIP to <@${rMember.id}>, We removed ${gRole.name} from them. We tried to DM them, but their DMs are locked.`);
  }
}

module.exports.help = {
  name: 'removerole'
}
