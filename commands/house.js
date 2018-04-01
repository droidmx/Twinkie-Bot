const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return undefined;

    let picture = ("http://bestanimations.com/Military/Explosions/explosion-animated-gif-46.gif");

    const embed = new Discord.RichEmbed()
    .setAuthor("Rip House")
    .setColor(green) 
    .setImage(picture);
    
    return message.channel.send("<a:dancing:429346001996873733><a:dancing:429346001996873733><a:dancing:429346001996873733><a:dancing:429346001996873733><a:dancing:429346001996873733><a:dancing:429346001996873733><a:dancing:429346001996873733><a:dancing:429346001996873733><a:dancing:429346001996873733><a:dancing:429346001996873733><a:dancing:429346001996873733><a:dancing:429346001996873733><a:dancing:429346001996873733><a:dancing:429346001996873733><a:dancing:429346001996873733><a:dancing:429346001996873733><a:dancing:429346001996873733><a:dancing:429346001996873733><a:dancing:429346001996873733>", embed);

}; 

module.exports.help = {
name: 'rip',
};