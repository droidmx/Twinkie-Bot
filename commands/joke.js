const request = require('superagent');
const Discord = require('discord.js');
const botconfig = require('../botconfig.json');
const green = botconfig.green;
module.exports.run = async (bot, message, args) => {
  const { body } = await request
        .get('http://icanhazdadjoke.com/')
        .set('Accept', 'application/json');
        let jEmbed = new Discord.RichEmbed()
        .setTitle("Joke")
        .setDescription(body.joke)
        .setColor(green);
        message.channel.send(jEmbed);
    }
module.exports.help = {
  name: "joke"
}