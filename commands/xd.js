const Discord = require("discord.js")
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return undefined;

    let picture = ('https://media1.tenor.com/images/503adeb6625cbc1009dbc0a0a86d6b71/tenor.gif?itemid=9364882')

    const embed = new Discord.RichEmbed()
    .setAuthor("XD")
    .setColor(green) 
    .setImage(picture)
    
    return message.channel.send(embed);

}; 

module.exports.help = {
name: 'xd',
};