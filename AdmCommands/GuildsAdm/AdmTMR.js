const Discord = require('discord.js')
const moment = require('moment'); 
      moment.locale('pt-BR');

// Id dos servidores que o bot nn responderá
let GoodGame = '728627925813035050'
let ReinoDilmer = '472494779020738580'
let PredioViverSemCall = '348256675482042369'
let Estudos = '798224092787507241'
let CisneBranco = '719929816702386286'
let Salopaxz = '792412596883685376'

module.exports = (bot) => {
    bot.on('message', (msg) => {
        if (msg.content.startsWith('*ADM')) {

            // TRAZENDO QUE O PRIMEIRO USUÁRIO É O MENCIONADO
            const User = msg.mentions.users.first();
            // FIM

            // SE O AUTOR DA MENSAGEM FOR UM ROBO OU A MENSAGEM FOR NA DM
            if (msg.author.bot || msg.channel.type === "dm") {
                return;
            }
            // FIM

            // SE OS ID FOREM ESSES A ISABELLY NÃO RESPONDERÁ
            if (msg.guild.id === GoodGame || msg.guild.id === ReinoDilmer || msg.guild.id === PredioViverSemCall || msg.guild.id === Estudos|| msg.guild.id === CisneBranco || msg.guild.id === Salopaxz) {
                return;
            }
            // FIM

            // SE O AUTOR NN TIVER PERMISSÃO DE BANIR OU EXPULSAR MEMBROS O BOT NN RESPONDERÁ
            if (!msg.guild.member(msg.author).hasPermission('KICK_MEMBERS', 'BAN_MEMBERS')) {
                return;
            }
            // FIM


            if (!User) {
                msg.channel.send(`Não foi mencionado nenhum Usuário. Por favor tente novamente mencionando alguém.`)
            }
            if (User) {
                const Member = msg.guild.member(User)
                if (!Member) {
                    msg.channel.send(`${msg.author.username}, o usuário ${Member.user.username} não pertence a este servidor!`)
                }
                if (Member) {
                    // Emojis
                    const Advance = bot.emojis.cache.get("832048005712445511")
                    // Fim

                    // Roles do Usuário mencionado.
                    const roles = Member._roles
                        .filter(r => r !== msg.guild.id)
                        .map(r => r)
                        .join(` | `) || "não possui";
                    // Fim --> Outra forma de fazer  --> ${Member._roles.map(Roles_Id => `${Roles_Id}`).join(` - `)}

                    function Inicio() {

                        // Inicio da função inicio
                        const Embed_Initial = new Discord.MessageEmbed()
                            .setAuthor(`Isabelly User Adm ©`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                            .setTitle(`Informações encontradas de ${Member.user.username}`)
                            .setDescription(`**${msg.author.username}, Avance Em ${Advance}.**`)
                            .setColor(`#FFFF00`)
                            .setThumbnail(`${Member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024})}`)
                            .addFields(
                                {name: `📂 ID 📂`, value: `${Member.user.id}`},
                                {name: `📂 UserName 📂`, value: `${Member.user.username}`},
                                {name: `📂 NickName 📂`, value: `${Member.nickname !== null ? `${Member.nickname}`: `Não Utiliza`}`},
                                {name: `📂 Value Discriminator 📂`, value: `${Member.user.discriminator}`},
                                {name: `📂 Status 📂`, value: `${User.presence.status}`},
                                {name: `📂 In Game 📂`, value: `${User.presence.game ? User.presence.game.name : `Não está jogando`}`},
                                {name: `📂 Cargos ID 📂`, value: `${roles}`},
                                {name: `📂 Neste Servidor 📂`, value: `${moment(Member.joinedAt).format('LLL')}`},
                                {name: `📂 Conta Criada 📂`, value: `${moment(Member.user.createdAt).format('LLL')}`},
                            )
                            .setFooter(`© Isabelly - Admin TmR`, Member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                        msg.channel.send(Embed_Initial).then(Reaction_1 => {
                            Reaction_1.react(Advance)

                            const Evento_React_Advance = (reaction, user) => reaction.emoji.id === `832048005712445511` && user.id === msg.author.id;

                            const Evento_React_Advance_Operando = Reaction_1.createReactionCollector(Evento_React_Advance);

                            Evento_React_Advance_Operando.on('collect', Reaction_11 => {
                                Reaction_1.delete();
                                Segundo_Ambiente()
                            })
                        })
                        // Fim da função
                    }

                    function Segundo_Ambiente() {
                        // Embed de opções do usuário
                        const Embed_Segundo_Ambiente = new Discord.MessageEmbed()
                            .setAuthor(`Isabelly User Adm ©`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                            .setTitle(`Ação para ${Member.user.username}`)
                            .setColor(`#FF0000`)
                            .setThumbnail(`${Member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024})}`)
                            .addFields(
                                {name: `[🟧] KICK`, value: `Option 1`},
                                {name: `[🟥] BAN`, value: `Option 2`},
                                {name: `[🟩] ADD ROLE`, value: `Option 3`},
                                {name: `[🟦] RETURN`, value: `Option 4`},                                  
                            )
                            .setFooter(`© Isabelly - Admin TmR`, Member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                        msg.channel.send(Embed_Segundo_Ambiente).then(Reaction_2 => {
                            Reaction_2.react('🟧')
                            Reaction_2.react('🟥')
                            Reaction_2.react('🟩')
                            Reaction_2.react('🟦')

                            const Evento_React_Orange = (reaction, user) => reaction.emoji.name === `🟧` && user.id === msg.author.id;
                            const Evento_React_Red = (reaction, user) => reaction.emoji.name === `🟥` && user.id === msg.author.id;
                            const Evento_React_Green = (reaction, user) => reaction.emoji.name === `🟩` && user.id === msg.author.id;
                            const Evento_React_Blue = (reaction, user) => reaction.emoji.name === `🟦` && user.id === msg.author.id;

                            const Evento_React_Orange_Operando = Reaction_2.createReactionCollector(Evento_React_Orange);
                            const Evento_React_Red_Operando = Reaction_2.createReactionCollector(Evento_React_Red);
                            const Evento_React_Green_Operando = Reaction_2.createReactionCollector(Evento_React_Green);
                            const Evento_React_Blue_Operando = Reaction_2.createReactionCollector(Evento_React_Blue);

                            Evento_React_Orange_Operando.on('collect', Reaction_22 => {
                                Member.kick(`Kickado!!`).then(() => {
                                    msg.channel.send(`Sucesso ao expulsar "*${Usuario_Expulso.tag}*" do servidor!`)
                                })
                            })
                            Evento_React_Red_Operando.on('collect', Reaction_222 => {
                                Member.ban(`Um Staff do servidor Testing My Robots Baniu Você!`).then(() => {
                                    msg.channel.send(`Sucesso ao BANIR "*${Usuario_Expulso.tag}*" do servidor!`)
                                })
                            })
                            Evento_React_Green_Operando.on('collect', Reaction_2222 => {
                                Reaction_2.delete();
                                msg.channel.send(`Em manutenção.`)
                            })
                            Evento_React_Blue_Operando.on('collect', Reaction_22222 => {
                                Reaction_2.delete();
                                Inicio()
                            })
                        })
                    }

                    Inicio()
                }
            }
        }
    })
}