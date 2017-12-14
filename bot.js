const Discord = require("discord.js");

const TOKEN = "MzgxODgxMDgyODQyMTg1NzQw.DPrONA.pixPZKkbdr_wYXQn7mg_AKXSdn0";
const prefix = ".";

var bot = new Discord.Client();

bot.on('guildMemberAdd', member => {
  if (member.guild.id === '384420942010515466') {
    member.setNickname(`??${member.user.username}`)
    member.addRole('384420942010515466', 'Joined in the 90\'s')
  }
    member.guild.channels.get('353436192353681411').send('**' + member.user.username + '**, Has Joined!')
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.get('353436192353681411').send('**' + member.user.username + '**, ByeBye')

});

bot.on('guildMemberAdd', member => {
  member.guild.channels.get('346023639516315649').send(`**${member.user.username}** has Joined!`)
});

bot.on('guildMemberRemove', member => {
  member.guild.channels.get('346023639516315649').send(`**${member.user.username}** has left... ByeBye`)
});

var fortunes = [ // this is gonna be the random place
   "yes",
   "no",
   "fucc",
   "u gay M8",
   "HOMO",
   "i dont agree bitch",
   "what u gonna do?"
];


bot.on("ready", function() {
  console.log("bobo is in the house");

  bot.user.setStatus('Online');

  bot.user.setGame('Beta', 'https://twitch.tv/SaharGx');
})

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(prefix));

  var args = message.content.substring(prefix.length).split(" ");

  switch (args[0].toLowerCase()) {
    case "ping":
        message.channel.send("Pong!");
        break;
    case "info":
        message.channel.send({embed:{
          title: 'ℹ️info',
          description: 'I am mister BoBo and, im a Twin!',
          color: 0x2980B9 // color yea
        }});
        break;
    case "8ball":
        if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else message.channel.send("cant read that!")
        break;
    case "סני":
        message.channel.send("ילד רע")
        break;
    case "pussy":
        message.channel.send("סני הוא סוג של ניגה שמפחד להיות ניבא")
        break;
    case "mlgsquad":
        message.channel.send("This is my squad Biatch!")
        break;
    case "creator!":
        message.channel.send("so.... my name is sahar im 13 YearsOld and i am love to be dank")
        break;
    case "eli":
        message.channel.send("ran him ha katan");
        break;
    case "faggot":
        message.channel.send("למי קראת פאג אה ביץ")
        break;
    case "hate&seny":
        message.channel.send("give 2 seny a lot of hate/love idk...")
        break;
    case "seny'sinfo":
        message.channel.send("בשרת של סני אתם עומדים להנות בקלל!")
        break;
    case "invite2":
        message.channel.send("הנה קישור לשרת של סני https://discord.gg/JqE9Paq ")
        break;
    case "rules":
        message.reply("``` חוקים: לא לקלל, לא לא להספים, לא להשתמש באימוגים, לא להיות טרולרים, להנות הכי חשוב   ```")
        break;
    case "senycm":
        message.reply("```.rules                                                                                                                                                .סני                                                                                                                                                .seny'sinfo                                                                                                                                                .8ball                                                                                                                                                .senycm ``` ")
        break;
    default:
        message.channel.send('NoNoNoMyFrIeNd');
    }});

bot.login(TOKEN);
