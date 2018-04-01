const superagent = require('superagent');
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  
  const cheerio = require('cheerio'),
      snekfetch = require('snekfetch'),
      querystring = require('querystring');

   let searchMessage = await message.channel.send('Searching... Sec.');
   let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(message.content)}`;

   return snekfetch.get(searchUrl).then((result) => {

      let $ = cheerio.load(result.text);

      let googleData = $('.r').first().find('a').first().attr('href');

      googleData = querystring.parse(googleData.replace('/url?', ''));
      searchMessage.edit(`Result found!\n${googleData.q}`);
  }).catch((err) => {
     searchMessage.edit('No results found!');
  });
}


module.exports.help = {
  name: "google"
}
