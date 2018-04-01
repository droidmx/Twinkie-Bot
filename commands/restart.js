const Discord = require('discord.js');
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async(bot, message, args) =>{
  let embed = new Discord.RichEmbed()
  .setTitle("Restart")
  .setDescription("Sorry, the `restart` command can only be executed by the Developer.")
  .setColor(green);
  if(message.author.id !== '350651874333949963') return message.channel.send(embed);
  
message.channel.send(`Restarted in ${Math.floor(bot.ping)}ms`).
 process.exit();

                                           }
module.exports.help = {
name: "restart"
}
   