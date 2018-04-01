const Discord = require("discord.js")
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return undefined;

    let picture = ('https://media.giphy.com/media/CaiVJuZGvR8HK/giphy.gif');

    const embed = new Discord.RichEmbed()
    .setAuthor("Thinking About Coding")
    .setColor(green) 
    .setImage(picture)
    
    return message.channel.send(embed);

}; 

module.exports.help = {
name: 'thinking',
};