const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
	let users = bot.users;

	let searchTerm = args[0];
	if(!searchTerm) return message.channel.send("Please provide a search term.");

	let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
  
          const embed = new Discord.RichEmbed()
            .setTitle("All the users found.")
            .setColor(green)
            .setDescription(matches.map(u => u.tag).join(", "));
        message.channel.send(embed);

}
 
module.exports.help = {
  name: "find"
}