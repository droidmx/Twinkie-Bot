const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return undefined;
    message.react("a:thug:429334407384399884")

    let picture = ("https://i.imgur.com/VHEcMC3.gif");
    const embed = new Discord.RichEmbed()
    .setAuthor(`SHAKE DA BUTT!`)
    .setColor(green) 
    .setImage(picture);
    
    return message.channel.send(embed).then(message => message.react("a:thug:429334407384399884"));

}; 

module.exports.help = {
name: 'butt',
};