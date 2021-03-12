const Discord = require("discord.js");
const search = require("yt-search");


const execute = (bot, msg, args) => {
    const emoji1 = bot.emojis.cache.get("819728462154694657")
    const emoji2 = bot.emojis.cache.get("819728443544830024")
    const emoji3 = bot.emojis.cache.get("819728424935489539")
    const emoji4 = bot.emojis.cache.get("819728407789174805")
    const emoji5 = bot.emojis.cache.get("803678252945375253")
    const space = args.join(" ");
    try {
        search(space, (err, result) => {
            if(err) {
                msg.channel.send(`${msg.author.username} ERROR!`)
            } else {
                console.log(result.videos[0])
                if (result && result.videos.length > 0) {
                    const video = result.videos[0];
                    // ------------------------------------------ //
                    const DiscordWarn = new Discord.MessageEmbed()
                    .setAuthor(`Isabelly - Sistema de Busca de Vídeos!`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                    .setTitle(`${msg.author.username}, clique aqui para obter o Link!`)
                    .setURL(video.url)
                    .setThumbnail(video.thumbnail)
                    .setColor('RANDOM')
                    .setImage(video.image)
                    .setDescription(video.description)
                    .addField(`${emoji4} *Título* ${emoji4}`, `\`${video.title}\``)
                    .addField(`${emoji5} *Autor* ${emoji5}`, `\`${video.author.name}\``)
                    .addField(`${emoji1} *Visualizações* ${emoji1}`, `\`${video.views}\``)
                    .addField(`${emoji2} *Tempo* ${emoji2}`, `\`00:00 - ${video.timestamp}\``)
                    .addField(`${emoji3} *Publicado* ${emoji3}`, `\`${video.ago}\``)
                    .setFooter(`${msg.author.username}, este ambiente serve para buscar vídeos do Youtube`)
                    msg.channel.send(DiscordWarn)
                }
            }
        })
    } catch(e) {
        console.error(e);
    }
};

module.exports = {
    name: "ysearch",
    help: "Este comando serve como manutenção!",
    execute
}