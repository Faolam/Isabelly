const Discord = require('discord.js')


module.exports = (bot) => {
    bot.on('message', async (msg) => {
        if (msg.author.bot || msg.channel.type === "dm") {
            return;
        }
        if (!msg.guild.member(msg.author).hasPermission('ADD_REACTIONS')) {
            return;
        }
        if (msg.content == "Roles Reaction") {
            // Aba destinada a colocar emojis
            const Emoji_Verificador = bot.emojis.cache.get("826246354207899698")
            // Fim da aba destinada  a emojis

            // Constando o id do cargo do servidor
            const guild = bot.guilds.cache.get("531856510389714954")
            const member = msg.guild.member(msg.author)
            const Cargo_Verificador = msg.guild.roles.cache.find((role) => role.id === '793149181959208960')
            // Fim dos Id do cargo do servidor

            // Embed de reação
            const EMBED_DISCORD_REACTION = new Discord.MessageEmbed()
                .setAuthor(`Isabelly - * Sistema de Boas Vindas *`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                .setThumbnail(`https://cdn.discordapp.com/icons/${msg.guild.id}/${msg.guild.icon}.png`)
                .setColor("#DCDCDC")
                .setTitle(`Preparação para o Grande ${msg.guild.name}`)
                .setDescription(`Você está entrando em um servidor reservado à desenvolvimento. Por favor confirme que você não é um robô. Torne-se um usuário verificado do ${msg.guild.name}. Clique no Emoji abaixo " ${Emoji_Verificador} " para a verificação.`)
                .setFooter(`Basta apenas clicar no emoji mencionado abaixo.`, "https://i.pinimg.com/originals/eb/d3/04/ebd30421f6384457be27113d60ef964d.jpg")
            msg.channel.send(EMBED_DISCORD_REACTION).then(REACTION => {
                REACTION.react(Emoji_Verificador)
                // Coletando reação
                const Evento_React_Computer = (reaction, user) => reaction.emoji.id === `826246354207899698` && user.id === msg.author.id;
                // Fim da Coleta da reação
                // Tornando essa reação operavel
                const Evento_React_Computer_Operation = REACTION.createReactionCollector(Evento_React_Computer);
                // Fim dessa operação
                Evento_React_Computer_Operation.on('collect', REACTIONN => {
                    REACTION.delete();
                    msg.delete();
                    msg.channel.send('DEU BOM GURIZADA!')
                })
            })
            console.log(guild.name)
            console.log(Cargo_Verificador.name)
            console.log(member.user.username)
        }



    })
}

/*
Bom desenvolvimento
https://www.youtube.com/watch?v=bJwPYCy17G4
*/