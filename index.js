const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();


//  Notificatie als de bot geactiveerd is
bot.on("ready", async () => {

    console.log(`${bot.user.username} is online`)

    bot.user.setActivity("twitch.tv/jordidejong_", {type: "STREAMING", url: "https://www.twitch.tv/jordidejong_"});

});

bot.on("message", async message => {

    // Als bot bericht stuurt stuur dan een return
    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var args = messageArray.slice(1);

    if ( command === `hallo`){

        return message.channel.send("**Goeiedag, hoe gaat het?**");
    }

    if ( command === `${prefix}gay`){

        return message.channel.send("**FOEI! Jordi is niet gay..**");
    }

    if ( command === `${prefix}twitch`){

        return message.channel.send("https://www.twitch.tv/jordidejong_");
    }

    if ( command === `${prefix}info`) {

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Jordidejong Discord")
            .setDescription(">>> https://discord.gg/kMrJ9Vt")
            .setColor("#eb4034")
            .addFields(
                {name: "Bot Naam", value:bot.user.username},
                {name: "Je bent de server gejoined op: ", value:message.member.joinedAt},
                {name: "Totaal Members", value:message.guild.memberCount}
            
            )
            .addField("Gemaakt door", "Hylgis")
            .setThumbnail("https://static-cdn.jtvnw.net/jtv_user_pictures/8bdd374c-d58c-4c3d-90de-f52fcde9b3b3-profile_image-70x70.png");

        return message.channel.send(botEmbed);
    }

});


bot.login(process.env.TOKEN);