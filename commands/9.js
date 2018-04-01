const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return undefined;

    let picture = ("https://media.giphy.com/media/n7cNUxwoKtWne/giphy.gif");

    const embed = new Discord.RichEmbed()
    .setAuthor("9 8 7 6 5 4 3 2 1 0 Suprise!")
    .setColor(green) 
    .setImage(picture);
    
    return message.channel.send(embed);

}; 

module.exports.help = {
name: '9',
};