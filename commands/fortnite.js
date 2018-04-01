const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const green = botconfig.green;
const Fortnite = require('fortnite');
const client = new Fortnite('33a64070-029b-4950-a294-d66d9434bec0');


module.exports.run = async (bot, message, args) => {
    message.delete();
    //%fortnite Username platform
    let username = args[0];
    let platform = args[1] || "pc";

    client.getInfo(username, platform).then(data => {

        let stats = data.lifetimeStats;
        let kills = stats.find(s => s.stat == 'kills');
        let wins = stats.find(s => s.stat == 'wins');
        let kd = stats.find(s => s.stat == 'kd');
        let mPlayed = stats.find(s => s.stat == 'matchesPlayed');
        let tPlayed = stats.find(s => s.stat == 'timePlayed');
        let asTime = stats.find(s => s.stat == 'avgSurvivalTime');
        let score = stats.find(s => s.stat == 'score');
        let top3 = stats.find(s => s.stat == 'top3');
        let top5s = stats.find(s => s.stat == 'top5s');
        let top3s = stats.find(s => s.stat == 'top3s');
        let top6s = stats.find(s => s.stat == 'top6s');
        let top12s = stats.find(s => s.stat == 'top12s');
        let top25s = stats.find(s => s.stat == 'top25s');
        

        let embed = new Discord.RichEmbed()
        .setTitle("Fortnite Stats")
        .setAuthor(data.username)
        .setColor(green)
        .addField("Kills", kills.value, true)
        .addField("Wins", wins.value, true)
        .addField("KD", kd.value, true)
        .addField("Matches Played", mPlayed.value, true)
        .addField("Time Played", tPlayed.value, true)
        .addField("Average Survival Time", asTime.value, true)
        .addField("Score", score.value, true)
        .addField("Top3", top3.value, true)
        .addField("Top5s", top5s.value, true)
        .addField("Top3s", top3s.value, true)
        .addField("Top6s", top6s.value, true)
        .addField("Top12s", top12s.value, true)
        .addField("Top25s", top25s.value, true);

        message.channel.send(embed);

    }).catch(e => {
        console.log(e);
        message.channel.send("Couldn't find that username in the database");
    });


}

module.exports.help = {
    name: "fortnite"
}
