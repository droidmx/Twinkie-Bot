const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return undefined;
    message.react(":KMute:428571522576285708")

    let picture = ("https://media.giphy.com/media/3ohrypGmT9bFovUzmM/giphy.gif");

    const embed = new Discord.RichEmbed()
    .setAuthor("tears")
    .addField("I'm going to cry", ":sob:")
    .setColor(green) 
    .setImage(picture);
    
    return message.channel.send(embed).then(message => message.react(":KMute:428571522576285708"));

}; 

module.exports.help = {
name: 'tears',
};