const Discord = require('discord.js')

module.exports= (bot) => {
    bot.on('message', (msg) => {
        if (msg.guild.id === "531856510389714954") {
            if (msg.content.toLowerCase() === "info") {
                const EmbedConfig = new Discord.MessageEmbed()
                    .setAuthor(`Comando destinado a INFORMAÇÕES`)
                    .setDescription("Comando de informações sobre o autor da mensagem")
                    .setColor("RANDOM")
                    .setFooter(`Comando INFO`)
                msg.channel.send(EmbedConfig)
                console.log(msg)
            }

        }
        else {
            return;
        }
    })
}