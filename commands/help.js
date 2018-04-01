const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const green = botconfig.green;
module.exports.run = async (bot, message, args) => {

  message.react(":ditto:393547954168004608");
  message.react(":download:316264057659326464");
  message.react(":dblspin:393548363879940108");
  message.react(':tickYes:315009125694177281');
  let icon = bot.user.displayAvatarURL;
  let hEmbed = new Discord.RichEmbed()
  .setAuthor("51 Total Commands", bot.user.displayAvatarURL)
  .setColor(green)
  .setDescription("It\'s prefix is `%` Type `%commands` for more info.")
  .addField("**Core Commands**", "`help`|`invite`|`betatester`|`info`")
  .addField("**Moderation Commands**", "`ban`|`kick`|`warn`|`report`|`tempmute`")
  .addField("**Utility Commands**", "`serverstats`|`stats`|`userstats`|`weather`|`ping`|`say`|`docs`\n`clear`|`purge`|`reload`|`add`|`subtract`|`setgame`|`define`|`icon`|\n`shorten`|`find`|`auto`|`svs`|`google`|`rdefine`")
  .addField("**Developer Commands**", "`eval`|`restart`|`reload`|`npm`")
  .addField("**User Commands**", "`coins`|`level`|`warnlvl`|`pay`|`avatar`|`announce`")
  .addField("**Fun Commands**","`8ball`|`poll`|`roll`|`test`|`doggo`|`cat`|`flip`|`slots`|`joke`|`ascii`|\n`poke`|`get`|\n`devil`|`twinkiefact`|`helpme`|`triggered`|`thonk`|`thinking`|`pokemon`|`xd`|`nitro`|`spin`|`9`|`butt`|`weed`|`dealwithit`|`doge`|`idgaf`|`ìnsult`|`helpme`|`tears`|`AfroCat`|`rip`|`battle`|`frog`", true)
  .addField("**Server:**", "https://discord.gg/hJZSxr8", true)
  .addField("**Github:**", "https://github.com/123Titanic321", true)
  .setThumbnail(icon)
  message.channel.send(":white_check_mark: | **I have sent you a part of my commands! Make sure to check your Direct messages!**");
  message.author.send(hEmbed).then(message => message.react(":ditto:393547954168004608", ":download:316264057659326464", ":dblspin:393548363879940108", ":tickYes:315009125694177281"));
  
       
}

module.exports.help = {
  name: "help"
}