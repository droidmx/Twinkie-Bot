const Discord = require('discord.js');
const botconfig = require('../botconfig.json');
const green = botconfig.green;

const bot = new Discord.Client();


module.exports.run = async (bot, message, args) => {

  let Embed = new Discord.RichEmbed()
    .setTitle('Info: ')
    .setDescription(`This bot is running on ${bot.guilds.size} servers and ${bot.channels.size} channels with ${bot.users.size} users. \nTo report issues, give feedback, and contribute, join the [Twinkie discord server]\n(https://discord.gg/hJZSxr8).`)
    .setColor(green)

return message.channel.send(Embed);

}

module.exports.help = {
  name: "info"
}