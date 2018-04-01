const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("Moderation")
    .setDescription("There are currently 7 commands in this category.")
    .addField("`%ban`", "Ban a member.")
    .addField("`%clear`", "Clear messages")
    .addField("`%kick`", "Kick a member.")
    .addField("`%msent`", "Check messages sent so far.")
    .addField("`%purge`", "Clears a member's messages.")
    .addField("`%warn`", "Warn a member.")
    .addField("`%warnlvl`", "Check a user's warn level.")

message.channel.send(embed);
}

module.exports.help = {
  name: "mod"
}
