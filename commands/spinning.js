const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return undefined;

    let picture = ('http://i.imgur.com/zaq7XMr.gif');

    const embed = new Discord.RichEmbed()
    .setAuthor("They See me spinning they hatin.")
    .setColor(green) 
    .setImage(picture);
    
    return message.channel.send(embed);

}; 

module.exports.help = {
name: 'spin',
};