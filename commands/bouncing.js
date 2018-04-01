const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return undefined;
    message.channel.send("https://www.youtube.com/watch?v=A1vyB-O5i6E");
}; 
module.exports.help = {
name: 'frog',
};