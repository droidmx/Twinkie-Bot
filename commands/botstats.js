const fs = require('fs');
const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = (bot, message) => {

const uptime = moment.duration(bot.uptime).format(' D [days], H [hrs], m [mins], s [secs]');

let ramUsage = (process.memoryUsage().rss / 1024 / 1024).toFixed(2);
  
let platform = process.platform;  

let cpuUsage = process.cpuUsage();
  
let bicon = bot.user.displayAvatarURL;  

let uptimeEmbed = new Discord.RichEmbed()
.setTitle('Uptime')
.setDescription(`Bot is online for ${uptime}!`)
.setColor(green)
.setThumbnail(bicon)
.addField('Users', bot.users.size)
.addField('Servers', bot.guilds.size)
.addField('Channels', bot.channels.size)
.addField('Developer', "123Titanic321#9034")
.addField('RAM usage', `${ramUsage} mb`)
.addField('CPU usage', Math.floor(cpuUsage.user/cpuUsage.system) + '%')
.setTimestamp();
message.channel.send(uptimeEmbed);

}
module.exports.help = {
  name: "botstats"
}