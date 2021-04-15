const Discord = require('discord.js')

module.exports= (bot) => {
    bot.on('message', (msg) => {
        if (msg.content.toLowerCase() === "info") {
            if (msg.channel.type === "dm") {
                return;
            }
            if (msg.guild.id === "531856510389714954") {
                const PEDRAO = msg.guild.members.cache.find(Pedrao => Pedrao.id === '476373357756022787')
                const EmbedConfig = new Discord.MessageEmbed()
                    .setAuthor(`Comando destinado a INFORMAÇÕES`)
                    .setDescription("Comando de informações sobre o autor da mensagem")
                    .setColor("RANDOM")
                    .setFooter(`Comando INFO`)
                msg.channel.send(EmbedConfig)
                PEDRAO.send(`**Comando Info Utilizado**`)
            }

        }
        else {
            return;
        }
    })
}