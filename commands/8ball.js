const Discord = require('discord.js');
const botconfig = require('../botconfig.json');
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
  if (!args[2]) return message.reply('Please ask a full question.');
  let replies = ['Yes.', 'No.', 'I don\'t know.', 'Ask again later']

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(' ');

  let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor(green)
    .addField(':8ball: Question :8ball:', question)
    .addField(':8ball: Answer :8ball:', replies[result]);

  message.channel.send(ballembed);
};

module.exports.help = {
  name: '8ball'
};
