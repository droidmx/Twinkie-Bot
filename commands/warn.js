const Discord = require('discord.js');
const fs = require('fs');
const ms = require('ms');
const botconfig = require('../botconfig.json');
const green = botconfig.green;
let warns = JSON.parse(fs.readFileSync('./warnings.json', 'utf8'));

module.exports.run = async (bot, message, args) => {
  let Staff = message.guild.roles.find('name', 'Staff');
  if (!message.member.roles.has(Staff.id)) return message.reply(':lock: You need Staff role to use this command :lock:');
  if (args[0] === 'help') {
    message.reply('Usage: %warn <user> <reason>');
    return
  }
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!wUser) return message.reply('Couldn\'t find them yo');
  let reason = args.join(' ').slice(22);

  if (!warns[wUser.id]) {
    warns[wUser.id] = {
      warns: 0
    }
  }

  warns[wUser.id].warns++

  fs.writeFile('./warnings.json', JSON.stringify(warns), (err) => {
    if (err) console.log(err);
  });

  let warnEmbed = new Discord.RichEmbed()
    .setDescription('Warns')
    .setAuthor(message.author.username)
    .setColor(green)
    .addField('Warned User', `<@${wUser.id}>`)
    .addField('Warned In', message.channel)
    .addField('Numbers of Warnings', warns[wUser.id].warns)
    .addField('Reason', reason);

  let warnchannel = message.guild.channels.find(`name`, 'incidents');
  if (!warnchannel) return message.reply('Couldn\'t find channel');

  warnchannel.send(warnEmbed);

  if (warns[wUser.id].warns === 2) {
    let muterole = message.guild.roles.find(`name`, 'muted');
    if (!muterole) return message.reply('You should create that role dude.');
    let mutetime = '10s'
    try {
      await wUser.send(`You have been muted for ${reason}. The mute will be up in ${mutetime}`);
    } catch (e) {
      message.channel.send(`<@${wUser.id}> has their DMs locked. But they have been muted for ${reason}`);
    }
    await (wUser.addRole(muterole.id));
    message.send(`${wUser.tag} has been temporarily muted`);

    setTimeout(function () {
      wUser.removeRole(muterole.id);
      message.channel.reply(`They have been unmuted.`);
    }, ms(mutetime));
  }
  if (warns[wUser.id].warns === 3) {
    try {
      await wUser.send(`You have been banned for ${reason}. Appeals can be made in DM's.`);
    } catch (e) {
      message.channel.send(`<@${wUser.id}> has their DMs locked. But they have been banned for ${reason}`);
    }

    message.guild.member(wUser).ban(reason);
    message.channel.send(`4${wUser.tag} has been banned.`);
  }
}

module.exports.help = {
  name: 'warn'
}
