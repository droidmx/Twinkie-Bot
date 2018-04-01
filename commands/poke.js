const Discord = require('discord.js');
const botconfig = require('../botconfig.json');
const green = botconfig.green;
module.exports.run = async (bot, message, args) => {
    let defineduser = message.mentions.users.first();
    let user = message.author
    message.delete();
   if(!args[1]){return message.reply("**Please specify a reason to poke.**")}
    if (!args[0]) {return message.reply(`**Please specify a user you want to poke.**`)
                  }else{
                  
        let reason = args.join(" ").slice(22);    

    let Embed = new Discord.RichEmbed()
    .setTitle('Poke 👉')
    .addField('You just got poked.', `By: ${user}`, true)
    .addField('Reason', reason, true)
    .setColor(green)
    defineduser.send(Embed)
                  }
}
module.exports.help = {
    name: "poke"
}