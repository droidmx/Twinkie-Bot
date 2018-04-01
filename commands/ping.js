const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const green = botconfig.green;
module.exports.run = async (bot, message, args) => {
        let pEmbed = new Discord.RichEmbed()
        .setColor(green)
        .setTitle(':ping_pong: Pong!')
        .addField('Latency', (new Date().getTime() - message.createdTimestamp) + ' ms', true)
        .addField('Websocket' , `${Math.round(bot.ping)}ms`, false);
         message.channel.send(pEmbed);
}


module.exports.help = {
  name: "ping"
}