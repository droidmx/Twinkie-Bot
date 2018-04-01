const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Core")
    .setTimestamp()
    .setDesciption("There are currently 4 commands in this category.")
    .addField("`%help`", "Providesa list of available commands.")
    .addField("`%betatester`", "Provide my betatester's name.")
    .addField("`%info`", "Provide the link to upvote the bot.")
    
    message.channel.send(embed)
}
module.exports.help = {
    name: "core"
}
