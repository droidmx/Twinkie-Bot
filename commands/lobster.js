const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return undefined;

    let picture = ("https://cdn.discordapp.com/attachments/417045995684102144/428591307842387989/image.png");

    const embed = new Discord.RichEmbed()
    .setAuthor("Battle Lobsters")
    .setColor(green) 
    .setImage(picture);
    
    return message.channel.send(embed);

}; 

module.exports.help = {
name: 'battle',
};