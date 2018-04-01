const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
     //!say Hi!
  //Hi
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
}

module.exports.help = {
name: 'say'
}
