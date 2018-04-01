const Discord = require('discord.js');
const superagent = require('superagent');
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
  let {body} = await superagent
    .get(`https://random.dog/woof.json`);

  let dogembed = new Discord.RichEmbed()
    .setColor(green)
    .setTitle('Doggo :dog:')
    .setImage(body.url);

  message.channel.send(dogembed);
}

module.exports.help = {
  name: 'doggo'
}
