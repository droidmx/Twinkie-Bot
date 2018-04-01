const Discord = require("discord.js")
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return undefined;

    let picture = ("http://gifimage.net/wp-content/uploads/2017/07/discord-gif-avatar.gif");

    const embed = new Discord.RichEmbed()
    .setAuthor("Devil")
    .setColor(green) 
    .setImage(picture)
    
    return message.channel.send(embed);

}; 

module.exports.help = {
name: 'devil',
};