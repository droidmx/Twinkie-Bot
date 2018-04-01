const send = require('quick.hook');
const Discord = require('discord.js');
const botconfig = require('../botconfig.json');
const green = botconfig.green;
module.exports.run = async(bot, message, args) => {

let split = '&&';
if(!args[0]){

	const embed = new Discord.RichEmbed()
	.setColor(green)
	.setTitle("Information")
	.setDescription(`**Usage: \`\`\`t.announce embedTitle ${split} embedMsg ${split} msgName ${split} msgIcon ${split} embedColor\`\`\`**`)
	return send(message.channel, embed, {
		name: 'Announce Command',
		icon: 'https://cdn.discordapp.com/attachments/417045991519420416/429388865434943508/Untitled_1.jpeg'

	});
}
args = args.join(' ').split(split);
for (var i = 0; i < args.length; i++) args[i] = args[i].trim();

	if(args[4]) args[4] = parseInt(`0x${args[4]}`);

let options = {
   title: args[0] || 'Announcement',
   message: args[1] || undefined,
   name: args[2] || 'Gaming/Chatting',
   icon: args[3] || 'https://cdn.discordapp.com/attachments/417045991519420416/429388865434943508/Untitled_1.jpeg',
   embedColor: args[4] || green

}
const embed = new Discord.RichEmbed()
.setColor(options.embedColor)
.setTitle(options.title)
if(options.message) embed.setDescription(options.message);
send(message.channel, embed, {
name: options.name,
icon: options.icon
})

}
module.exports.help = {
	name: "announce"
}
