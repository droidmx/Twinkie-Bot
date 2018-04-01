const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return undefined;

    let picture = ("https://media.giphy.com/media/fKO3LF3DYpxpm/giphy.gif");

    const embed = new Discord.RichEmbed()
    .setAuthor("IDGAF")
    .setColor(green) 
    .setImage(picture);
    
    return message.channel.send(embed);

}; 

module.exports.help = {
name: 'idgaf',
};