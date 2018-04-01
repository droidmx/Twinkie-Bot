const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
  const number = Math.floor(Math.random() * 2) + 1;
        if (number === 1) {
        const hEmbed = new Discord.RichEmbed()
          .setTitle('**Coinflip result:**')
          .setImage('https://i.imgur.com/EzqKNjh.png')
          .setColor(green)
          return message.channel.send({ hEmbed });
        } else {
          const embed = new Discord.RichEmbed()
            .setTitle('**Coinflip result:**')
            .setImage('https://i.imgur.com/G3REour.png')
            .setColor(green)
            return message.channel.send({ embed });
        }
}

module.exports.help = {
  name: "flip"
}