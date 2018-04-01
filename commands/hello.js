const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.channel.send("Hey There! 😎");
}

module.exports.help = {
  name: "hello"
}