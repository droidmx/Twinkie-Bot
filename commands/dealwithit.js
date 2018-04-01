const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
    message.react(":thug:429334407384399884");
    message.react(":ditto:393547954168004608");
    if(message.author.bot) return undefined;

    let picture = ("https://media.giphy.com/media/f6pOe5e8ShRhS/giphy.gif");

    const embed = new Discord.RichEmbed()
    .setAuthor(" Deal With It!")
    .setColor(green) 
    .setImage(picture);
    
    return message.channel.send("<a:thug:429334407384399884>", embed).then(message => message.react(":ditto:393547954168004608:thug:429334407384399884"))

}; 

module.exports.help = {
name: 'dealwithit',
};