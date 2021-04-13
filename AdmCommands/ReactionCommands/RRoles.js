const Discord = require('discord.js')


module.exports = (bot) => {
    bot.on('message', async (msg) => {
        if (msg.content == "verificado") {
            // Esta área foi reprogramada devido a um bug

            // Local destinado a informações e comandos alternativos
            if (msg.author.bot || msg.channel.type === "dm") {
                return;
            }
            if (msg.guild.id === GoodGame || msg.guild.id === ReinoDilmer || msg.guild.id === PredioViverSemCall || msg.guild.id === Estudos|| msg.guild.id === CisneBranco || msg.guild.id === Salopaxz) {
                return;
            }
            if (!msg.guild.member(msg.author).hasPermission('ADD_REACTIONS')) {
                return;
            }
            // Fim da area alternativos

            // Aba destinada a colocar emojis
            const Emoji_Verificador = bot.emojis.cache.get("830132092485500958")
            // Fim da aba destinada  a emojis
            
            // Constando o id do cargo do servidor a guild oferecida e o membro
            const GUILD = bot.guilds.cache.get("531856510389714954")
            const MEMBER = msg.guild.member(msg.author)
            const Cargo_Verificador = msg.guild.roles.cache.find((role) => role.id === '793149181959208960')
            // Fim dos Id do cargo do servidor
        
            // Guilds na qual esse comando não funcionará
            var GoodGame = '728627925813035050'
            var ReinoDilmer = '472494779020738580'
            var PredioViverSemCall = '348256675482042369'
            var Estudos = '798224092787507241'
            var CisneBranco = '719929816702386286'
            var Salopaxz = '792412596883685376'
            // Fim da area de Guilds 

            // Esta area foi atualizada por conta de um bug

            // Embed de reação
            const EMBED_DISCORD_REACTION = new Discord.MessageEmbed()
                .setAuthor(`Isabelly - * Sistema de Boas Vindas *`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                .setThumbnail(`https://cdn.discordapp.com/icons/${msg.guild.id}/${msg.guild.icon}.png`)
                .setColor("#DCDCDC")
                .setTitle(`Preparação para o Grande ${msg.guild.name}`)
                .setDescription(`${msg.author.username}, você está entrando em um servidor reservado à desenvolvimento. Por favor confirme que você não é um robô. Torne-se um usuário verificado do ${msg.guild.name}. Clique no Emoji abaixo " ${Emoji_Verificador} " para a verificação.`)
                .setFooter(`Basta apenas clicar no emoji mencionado abaixo.`, "https://i.pinimg.com/originals/eb/d3/04/ebd30421f6384457be27113d60ef964d.jpg")
            msg.channel.send(EMBED_DISCORD_REACTION).then(REACTION => {
                REACTION.react(Emoji_Verificador)
                msg.delete();
                // Coletando reação
                const Evento_React_Computer = (reaction, user) => reaction.emoji.id === `830132092485500958` && user.id === msg.author.id;
                // Fim da Coleta da reação
                // Tornando essa reação operavel
                const Evento_React_Computer_Operation = REACTION.createReactionCollector(Evento_React_Computer);
                // Fim dessa operação
                Evento_React_Computer_Operation.on('collect', REACTIONN => {
                    REACTION.delete();
                    msg.member.roles.add(Cargo_Verificador);
                    console.log(`+`)
                    console.log(`=====================================================================================================================`)
                    console.log(`NOVO USUARIO : { name: ${msg.author.username}, id: ${msg.author.id} }, REGISTROU-SE NO SERVIDOR: { name: ${msg.guild.name}, id: ${msg.guild.id} }`)
                    console.log(`=====================================================================================================================`)
                })
            })
        }
    })
}

/*
Bom desenvolvimento
https://www.youtube.com/watch?v=bJwPYCy17G4
*/