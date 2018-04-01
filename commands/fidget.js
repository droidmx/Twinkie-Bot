const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return undefined;

    let picture = ("https://cdn.discordapp.com/attachments/398189369158139904/411972089352945688/tenor.gif");

    const embed = new Discord.RichEmbed()
    .setAuthor("FIDGET SPINNER")
    .setColor(green) 
    .setImage(picture);
    
    return message.channel.send(embed);

}; 

module.exports.help = {
name: 'fidget',
};