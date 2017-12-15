const Discord = require("discord.js");
const setting = require("./setting.json")
const prefix = setting.prefix;
var bot = new Discord.Client();

bot.on('guildMemberAdd', member => {
  if (member.guild.id === '384420942010515466') {
    member.setNickname(`??${member.user.username}`)
    member.addRole('384420942010515466', 'Joined in the 90\'s')
  }
    member.guild.channels.get('353436192353681411').send(`**${member.user.username}** Has Joined!`)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.get('353436192353681411').send(`**${member.user.username}** has left!`)
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


bot
   .on('guildCreate', console.log)
   .on('guildDelete', console.log);

bot.on("ready", function() {
  console.log(`loging ass  ${bot.user.id} ${bot.guilds.size} servers`);
  bot.user.setActivity(`${setting.prefix}info | ${bot.guilds.size} server`)

  bot.user.setStatus('Online');

  bot.user.setGame('Beta', 'https://twitch.tv/SaharGx');
})

bot.on("guildMemberKick", function() {
   if (!message.guild.member{user}.kickable retrun message.reply('you Can\'t kick him!')
   message.guild.member{user}.kick();
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(setting.prefix));

  var args = message.content.substring(setting.prefix.length).split(" ");

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
        message.channel.send({embed:{
          title: '💣SquaD',
          description: 'BoomBiatch is my squad',
          color: 0xFF0000
        }});
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
    case "infofrezz":
        message.channel.send({embed:{
          title: 'info',
          description: 'simple bot',
          color: 0xFF2D00
        }});
        break;
    }});

bot.login(setting.token);
