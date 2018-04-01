const fs = require('fs');
const Discord = require('discord.js');
const moment = require('moment');
const botconfig = require('../botconfig.json');
const green = botconfig.green;
require('moment-duration-format');


module.exports.run = (bot, message, args) => {

const uptime = moment.duration(bot.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
let ramUsage = (process.memoryUsage().rss / 1024 / 1024).toFixed(2);
let platform = process.platform;  
let cpuUsage = process.cpuUsage();
let bicon = bot.user.displayAvatarURL;  
let uptimeEmbed = new Discord.RichEmbed()
.setTitle('Uptime')
.setColor(green)
.setDescription(`Bot is online for ${uptime}!`)
.setThumbnail(bicon)
.addField('Users', bot.users.size, true)
.addField('Servers', bot.guilds.size, true)
.addField('Channels', bot.channels.size, true)
.addField('RAM usage', `${ramUsage} mb`, true)
.addField('CPU usage', Math.floor(cpuUsage.user/cpuUsage.system) + '%', true)
.addField('Developer', "123Titanic321ส็็็#9034", true)
.addField("Discord.js", ` v${Discord.version}`, true)
.addField('Node', `${process.version}`, true)
.setTimestamp();
message.channel.send(uptimeEmbed);

}
module.exports.help = {
  name: "stats"
}