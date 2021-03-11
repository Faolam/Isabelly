const Discord = require("discord.js");
const search = require("yt-search");


const execute = (bot, msg, args) => {
    const space = args.join(" ");
    try {
        search(space, (err, result) => {
            if(err) {
                msg.channel.send(`${msg.author.username} ERROR!`)
            } else {
                console.log(result.videos[0])
                if (result && result.videos.length > 0) {
                    const song = result.videos[0];
                    // ------------------------------------------ //
                    const DiscordWarn = new Discord.MessageEmbed()
                    .setAuthor(`Isabelly - Sistema de Busca de Vídeos!`)
                    .setTitle(song.url)
                    .setDescription(song.description)
                    .setFooter(song.duration.timestamp)
                    msg.channel.send(DiscordWarn)
                }
            }
        })
    } catch(e) {
        console.error(e);
    }
    const DiscordWarn = new Discord.MessageEmbed()
    .setAuthor(`Isabelly - Sistema de Busca de Vídeos!`)
    .setAuthor(result)
};

module.exports = {
    name: "y",
    help: "Este comando serve como manutenção!",
    execute
}