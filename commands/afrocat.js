const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return undefined;
    message.channel.send("https://www.youtube.com/watch?v=ecHtKvyqxQU");
}; 
module.exports.help = {
name: 'AfroCat',
};