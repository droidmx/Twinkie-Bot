const Discord = require('discord.js');
const superagent = require('superagent');
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
  let {body} = await superagent
    .get(`https:\/\/purr.objects-us-west-1.dream.io\/i\/beerandcat.jpg`);

  let catembed = new Discord.RichEmbed()
    .setColor(green)
    .setTitle('Cat :cat:')
    .setImage(body.file);

  message.channel.send(catembed);
}

module.exports.help = {
  name: 'cat'
}
