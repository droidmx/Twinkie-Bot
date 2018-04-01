const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return undefined;

    let picture = ('https://i.redd.it/158lrvmkux8y.gif');

    const embed = new Discord.RichEmbed()
    .setAuthor("Wumpus shooting nitro look out!")
    .setColor(green) 
    .setImage(picture);
    
    return message.channel.send("<a:wumpy:429345952244170763> <a:wumpy:429345952244170763> <a:wumpy:429345952244170763> <a:wumpy:429345952244170763> <a:dancing:429346001996873733><a:dancing:429346001996873733>", embed);

}; 

module.exports.help = {
name: 'nitro',
};