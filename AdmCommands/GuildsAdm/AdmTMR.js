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
                    // Cargos
                    const TIMEOUT = msg.guild.roles.cache.find((role1) => role1.id === '832306725822267432')
                    const TopModerators = msg.guild.roles.cache.find((role2) => role2.id === '809480256846823434')
                    const SuperDeveloper = msg.guild.roles.cache.find((role3) => role3.id === '803676887401365535')
                    const Contratantes = msg.guild.roles.cache.find((role4) => role4.id === '816767137943257188')
                    const TotalAdministrator = msg.guild.roles.cache.find((role5) => role5.id === '809482705590550528')
                    const PartialAdministrator = msg.guild.roles.cache.find((role6) => role6.id === '809482321401085993')
                    const DeveloperMember = msg.guild.roles.cache.find((role7) => role7.id === '820294724048781343')
                    const Verificado = msg.guild.roles.cache.find((role8) => role8.id === '793149181959208960')
                    const TwitchMember = msg.guild.roles.cache.find((role8) => role8.id === '809481610746921010')
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
                            .setDescription(`**${msg.author.username}, Avance Em 🟨.** \n**${msg.author.username}, Saia Em ⬜.**`)
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
                            Reaction_1.react('🟨')
                            Reaction_1.react('⬜')

                            const Evento_React_Yellow = (reaction, user) => reaction.emoji.name === `🟨` && user.id === msg.author.id;
                            const Evento_React_White = (reaction, user) => reaction.emoji.name === `⬜` && user.id === msg.author.id;

                            const Evento_React_Yellow_Operando = Reaction_1.createReactionCollector(Evento_React_Yellow);
                            const Evento_React_White_Operando = Reaction_1.createReactionCollector(Evento_React_White);

                            Evento_React_Yellow_Operando.on('collect', Reaction_11 => {
                                Reaction_1.delete();
                                Segundo_Ambiente()
                            })
                            Evento_React_White_Operando.on('collect', Reaction_111 => {
                                msg.delete();
                                Reaction_1.delete();
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
                                {name: `[🟥] BAN, EXPULSION OR TIMEOUT`, value: `Option 1`},
                                {name: `[🟩] ADD ROLE`, value: `Option 2`},
                                {name: `[🟦] RETURN`, value: `Option 3`},                                  
                            )
                            .setFooter(`© Isabelly - Admin TmR`, Member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                        msg.channel.send(Embed_Segundo_Ambiente).then(Reaction_2 => {
                            Reaction_2.react('🟥')
                            Reaction_2.react('🟩')
                            Reaction_2.react('🟦')

                            const Evento_React_Red = (reaction, user) => reaction.emoji.name === `🟥` && user.id === msg.author.id;
                            const Evento_React_Green = (reaction, user) => reaction.emoji.name === `🟩` && user.id === msg.author.id;
                            const Evento_React_Blue = (reaction, user) => reaction.emoji.name === `🟦` && user.id === msg.author.id;

                            const Evento_React_Red_Operando = Reaction_2.createReactionCollector(Evento_React_Red);
                            const Evento_React_Green_Operando = Reaction_2.createReactionCollector(Evento_React_Green);
                            const Evento_React_Blue_Operando = Reaction_2.createReactionCollector(Evento_React_Blue);

                            Evento_React_Red_Operando.on('collect', Reaction_22 => {
                                Terceiro_Ambiente();
                                Reaction_2.delete();
                            })
                            Evento_React_Green_Operando.on('collect', Reaction_222 => {
                                Reaction_2.delete();
                                Quinto_Ambiente();
                            })
                            Evento_React_Blue_Operando.on('collect', Reaction_2222 => {
                                Reaction_2.delete();
                                Inicio()
                            })
                        })
                    }

                    function Terceiro_Ambiente() {
                        const Embed_Terceiro_Ambiente = new Discord.MessageEmbed()
                            .setAuthor(`Isabelly User Adm ©`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                            .setTitle(`Ação drástica para ${Member.user.username}`)
                            .setColor(`#FF0000`)
                            .setThumbnail(`${Member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024})}`)
                            .addFields(
                                {name: `[🅰] BAN`, value: `Option 1`},
                                {name: `[🅱] KICK`, value: `Option 2`},
                                {name: `[🔇] TIMEOUT`, value: `Option 3`},
                                {name: `[🟦] RETURN`, value: `Option 4`},                               
                            )
                            .setFooter(`© Isabelly - Admin TmR`, Member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                        msg.channel.send(Embed_Terceiro_Ambiente).then(Reaction_3 => {
                            Reaction_3.react(`🅰`)
                            Reaction_3.react(`🅱`)
                            Reaction_3.react(`🔇`)
                            Reaction_3.react(`🟦`)

                            const Evento_React_A = (reaction, user) => reaction.emoji.name === `🅰` && user.id === msg.author.id;
                            const Evento_React_B = (reaction, user) => reaction.emoji.name === `🅱` && user.id === msg.author.id;
                            const Evento_React_T = (reaction, user) => reaction.emoji.name === `🔇` && user.id === msg.author.id;
                            const Evento_React_R = (reaction, user) => reaction.emoji.name === `🟦` && user.id === msg.author.id;

                            const Evento_React_A_Operando = Reaction_3.createReactionCollector(Evento_React_A);
                            const Evento_React_B_Operando = Reaction_3.createReactionCollector(Evento_React_B);
                            const Evento_React_T_Operando = Reaction_3.createReactionCollector(Evento_React_T);
                            const Evento_React_R_Operando = Reaction_3.createReactionCollector(Evento_React_R);

                            Evento_React_A_Operando.on('collect', Reaction_33 => {
                                Member.ban(`Um Staff do servidor Testing My Robots Baniu Você!`).then(() => {
                                    msg.channel.send(`Sucesso ao BANIR "*${Member.user.tag}*" do servidor!`)
                                })
                                Reaction_3.delete();
                            })

                            Evento_React_B_Operando.on('collect', Reaction_333 => {
                                Member.kick(`Kickado!!`).then(() => {
                                    msg.channel.send(`Sucesso ao EXPULSAR "*${Member.user.tag}*" do servidor!`)
                                })
                                Reaction_3.delete();
                            })

                            Evento_React_T_Operando.on('collect', Reaction_3333 => {
                                Quarto_Ambiente();
                                Reaction_3.delete();
                            })

                            Evento_React_R_Operando.on('collect', Reaction_33333 => {
                                Segundo_Ambiente();
                                Reaction_3.delete();
                            })
                        })
                    }

                    function Quarto_Ambiente() {
                        const Embed_Quarto_Ambiente = new Discord.MessageEmbed()
                            .setAuthor(`Isabelly User Adm ©`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                            .setTitle(`Timeout para ${Member.user.username}`)
                            .setColor(`#FF0000`)
                            .setThumbnail(`${Member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024})}`)
                            .addFields(
                                {name: `[⏱] 15min`, value: `Option 1`},
                                {name: `[⏲] 30min`, value: `Option 2`},
                                {name: `[⌛] 1hora`, value: `Option 3`},
                                {name: `[⏰] 5horas`, value: `Option 4`},                               
                            )
                            .setFooter(`© Isabelly - Admin TmR`, Member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                        msg.channel.send(Embed_Quarto_Ambiente).then(Reaction_4 => {
                            Reaction_4.react(`⏱`)
                            Reaction_4.react(`⏲`)
                            Reaction_4.react(`⌛`)
                            Reaction_4.react(`⏰`)

                            const Evento_React_15m = (reaction, user) => reaction.emoji.name === `⏱` && user.id === msg.author.id;
                            const Evento_React_30m = (reaction, user) => reaction.emoji.name === `⏲` && user.id === msg.author.id;
                            const Evento_React_1h = (reaction, user) => reaction.emoji.name === `⌛` && user.id === msg.author.id;
                            const Evento_React_5h = (reaction, user) => reaction.emoji.name === `⏰` && user.id === msg.author.id;

                            const Evento_React_15m_Operando = Reaction_4.createReactionCollector(Evento_React_15m);
                            const Evento_React_30m_Operando = Reaction_4.createReactionCollector(Evento_React_30m);
                            const Evento_React_1h_Operando = Reaction_4.createReactionCollector(Evento_React_1h);
                            const Evento_React_5h_Operando = Reaction_4.createReactionCollector(Evento_React_5h);

                            Evento_React_15m_Operando.on('collect', Reaction_44 => {
                                Member.roles.add(TIMEOUT)
                                msg.channel.send(`${Member.user.username} está com um Timeout de 15minutos na conta.`)
                                Reaction_4.delete();
                                setTimeout(function HORAS_15(){
                                    Member.roles.remove(TIMEOUT)
                                }, 900000)
                            })

                            Evento_React_30m_Operando.on('collect', Reaction_444 => {
                                Member.roles.add(TIMEOUT)
                                msg.channel.send(`${Member.user.username} está com um Timeout de 30minutos na conta.`)
                                Reaction_4.delete();
                                setTimeout(function HORAS_30(){
                                    Member.roles.remove(TIMEOUT)
                                }, 1800000)
                            })

                            Evento_React_1h_Operando.on('collect', Reaction_4444 => {
                                Member.roles.add(TIMEOUT)
                                msg.channel.send(`${Member.user.username} está com um Timeout de 1hora na conta.`)
                                Reaction_4.delete();
                                setTimeout(function HORAS_1(){
                                    Member.roles.remove(TIMEOUT)
                                }, 3600000)
                            })

                            Evento_React_5h_Operando.on('collect', Reaction_44444 => {
                                Member.roles.add(TIMEOUT)
                                msg.channel.send(`${Member.user.username} está com um Timeout de 5horas na conta.`)
                                Reaction_4.delete();
                                setTimeout(function HORAS_5(){
                                    Member.roles.remove(TIMEOUT)
                                }, 18000000)
                            })
                        })
                    }

                    function Quinto_Ambiente() {
                        msg.channel.send(`**[🎃] --> Top Moderators / [🤑] --> Super Developer**`).then(Reaction_5 => {
                            Reaction_5.react(`🎃`)
                            Reaction_5.react(`🤑`)

                            const Evento_React_A = (reaction, user) => reaction.emoji.name === `🎃` && user.id === msg.author.id;
                            const Evento_React_B = (reaction, user) => reaction.emoji.name === `🤑` && user.id === msg.author.id;

                            const Evento_React_A_Operando = Reaction_5.createReactionCollector(Evento_React_A);
                            const Evento_React_B_Operando = Reaction_5.createReactionCollector(Evento_React_B);

                            Evento_React_A_Operando.on('collect', Reaction_55 => {
                                Member.roles.add(TopModerators)
                                msg.channel.send(`${Member.user.username} recebeu o cargo Top Moderators`)
                                msg.channel.bulkDelete(5);
                            })
                            Evento_React_B_Operando.on('collect', Reaction_555 => {
                                Member.roles.add(SuperDeveloper)
                                msg.channel.send(`${Member.user.username} recebeu o cargo Super Developer`)
                                msg.channel.bulkDelete(5);
                            })
                        })
                        msg.channel.send(`**[💀] --> Contratantes / [🪀] --> Twitch Member**`).then(Reaction_5 => {
                            Reaction_5.react(`💀`)
                            Reaction_5.react(`🪀`)

                            const Evento_React_A = (reaction, user) => reaction.emoji.name === `💀` && user.id === msg.author.id;
                            const Evento_React_B = (reaction, user) => reaction.emoji.name === `🪀` && user.id === msg.author.id;

                            const Evento_React_A_Operando = Reaction_5.createReactionCollector(Evento_React_A);
                            const Evento_React_B_Operando = Reaction_5.createReactionCollector(Evento_React_B);

                            Evento_React_A_Operando.on('collect', Reaction_55 => {
                                Member.roles.add(Contratantes)
                                msg.channel.send(`${Member.user.username} recebeu o cargo Contratantes`)
                                msg.channel.bulkDelete(5);
                            })
                            Evento_React_B_Operando.on('collect', Reaction_555 => {
                                Member.roles.add(TwitchMember)
                                msg.channel.send(`${Member.user.username} recebeu o cargo Twitch Member`)
                                msg.channel.bulkDelete(5);
                            })
                        })
                        msg.channel.send(`**[🛶] --> Total Administrator / [🐦] --> Partial Administrator**`).then(Reaction_5 => {
                            Reaction_5.react(`🛶`)
                            Reaction_5.react(`🐦`)

                            const Evento_React_A = (reaction, user) => reaction.emoji.name === `🛶` && user.id === msg.author.id;
                            const Evento_React_B = (reaction, user) => reaction.emoji.name === `🐦` && user.id === msg.author.id;

                            const Evento_React_A_Operando = Reaction_5.createReactionCollector(Evento_React_A);
                            const Evento_React_B_Operando = Reaction_5.createReactionCollector(Evento_React_B);

                            Evento_React_A_Operando.on('collect', Reaction_55 => {
                                Member.roles.add(TotalAdministrator)
                                msg.channel.send(`${Member.user.username} recebeu o Total Administrator`)
                                msg.channel.bulkDelete(5);
                            })
                            Evento_React_B_Operando.on('collect', Reaction_555 => {
                                Member.roles.add(PartialAdministrator)
                                msg.channel.send(`${Member.user.username} recebeu o cargo Partial Administrator`)
                                msg.channel.bulkDelete(5);
                            })
                        })
                        msg.channel.send(`**[🔨] --> Developer Member / [🔗] --> Verificado**`).then(Reaction_5 => {
                            Reaction_5.react(`🔨`)
                            Reaction_5.react(`🔗`)

                            const Evento_React_A = (reaction, user) => reaction.emoji.name === `🔨` && user.id === msg.author.id;
                            const Evento_React_B = (reaction, user) => reaction.emoji.name === `🔗` && user.id === msg.author.id;

                            const Evento_React_A_Operando = Reaction_5.createReactionCollector(Evento_React_A);
                            const Evento_React_B_Operando = Reaction_5.createReactionCollector(Evento_React_B);

                            Evento_React_A_Operando.on('collect', Reaction_55 => {
                                Member.roles.add(DeveloperMember)
                                msg.channel.send(`${Member.user.username} recebeu o Developer Member`)
                                msg.channel.bulkDelete(5);
                            })
                            Evento_React_B_Operando.on('collect', Reaction_555 => {
                                Member.roles.add(Verificado)
                                msg.channel.send(`${Member.user.username} recebeu o cargo Verificado`)
                                msg.channel.bulkDelete(5);
                            })
                        })
                        msg.channel.send(`**[🟦] --> RETURN**`).then(Reaction_5 => {
                            Reaction_5.react(`🟦`)

                            const Evento_React_A = (reaction, user) => reaction.emoji.name === `🟦` && user.id === msg.author.id;

                            const Evento_React_A_Operando = Reaction_5.createReactionCollector(Evento_React_A);

                            Evento_React_A_Operando.on('collect', Reaction_55 => {
                                msg.channel.bulkDelete(5);
                                Segundo_Ambiente();
                            })
                        })
                    }

                    Inicio()
                }
            }
        }
    })
}