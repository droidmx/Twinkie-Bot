// created by 123Titanic321
const botconfig = require('./botconfig.json');
const green = botconfig.green;
const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client({disableEveryone: true});
let coins = require("./coins.json");
bot.commands = new Discord.Collection();
let xp = require("./xp.json");
let cooldown = new Set();
let cdseconds = 5;

fs.readdir('./commands/', (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split('.').pop() === 'js');
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`)
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});
bot.on('ready', () => {
  console.log("Loading...");
  setTimeout(function(){
    console.log("Bot has been loaded completely.");
  }, 1000);
  setTimeout(function(){
    console.log(`Logged in as ${bot.user.tag}`);
  }, 2000);
  bot.user.setActivity(`%help | ${bot.guilds.size} servers | ${bot.users.size} users`,{type: "PLAYING"});
});
bot.on('guildMemberAdd', member => {
  const members = member.guild.memberCount;
 const channel = member.guild.channels.find(`name`, 'welcome_leave');
  if (!channel) return;
   let Embed = new Discord.RichEmbed()
   .setTitle(`${member.displayName}, Welcome to ${member.guild.name}`)
   .setColor(green)
   .setDescription(`I'm sure you have a lot of questions. \nPlease take a look at #rules!\nType %commands to see my commands!\nMake sure to create 3 channels welcome_leave incidents and reports This is so we don't get crashes. \nHave a great time here!`)
   .addField('Users: ', `${members}`, true)
 channel.send(Embed);
});
bot.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find(`name`, 'welcome_leave');
  if (!channel) return;
    const members = member.guild.memberCount;
  channel.send(`${member} has left the server! We now have ${members} members.`)
});

bot.on('message', async message => {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;

  let prefixes = JSON.parse(fs.readFileSync('./prefixes.json', 'utf8'));
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    }
  }
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 75) + 5;
  let baseAmt = Math.floor(Math.random() * 75) + 5;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor(green)
  .addField("💸", `${coinAmt} coins added!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  }
  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 50000;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Congrats You Leveled Up!")
    .setColor(green)
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
  let prefix = prefixes[message.guild.id].prefixes
  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply(" :warning: **You have to wait 5 seconds between commands.** :warning: ")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
 }

  let messageArray = message.content.split(' ')
  let cmd = messageArray[0]
  let args = messageArray.slice(1)
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(bot, message, args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
});
bot.on('guildCreate', guild => {

  guild.channels.send(`Thank You for adding me in ${guild}. Type %help to see my commands! `);
  });
  bot.emojis.find("name", "aconga");
  bot.emojis.get('<:ditto:393547954168004608>');
  bot.emojis.get('<:download:316264057659326464>');
  bot.emojis.get("<a:dblspin:393548363879940108>");
  bot.emojis.get("<:tickYes:315009125694177281>");
  bot.emojis.get("<a:thug:429334407384399884>")
bot.login(process.env.BOT_TOKEN);
