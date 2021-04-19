const Discord = require('discord.js')
const Moment = require('moment')

// Data Base
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('DataBase.json')
const db = low(adapter)

// Minerios da mina
var minerios = [
    `Diamante`,
    `Diamante`,
    `Esmeralda`,
    `Esmeralda`,
    `Esmeralda`,
    `Pedra`,
    `Pedra`,
    `Pedra`,
    `Pedra`,
    `Pedra`,
    `Pedra`,
    `Pedra`,
    `Pedra`,
    `Pedra`,
    `Pedra`,
    `Pedra`,
    `Carvao`,
    `Carvao`,
    `Carvao`,
    `Carvao`,
    `Carvao`,
    `Carvao`,
    `Pedra`,
    `Ouro`,
    `Ouro`,
    `Ouro`,
    `Ouro`,
    `Ouro`,
    `Ouro`,
    `Ouro`,
    `Ferro`,
    `Ferro`,
    `Ferro`,
    `Ferro`,
    `Ferro`,
    `Ferro`,
    `Ferro`,
    `Ferro`,
    `Ferro`,
    `Ferro`,
    `Ferro`
];
// Minérios da mina


module.exports = (bot) => {
    bot.on('message', (msg) => {
        // Emojis //
        const Diamante = bot.emojis.cache.get("809479541067743312")
        const Ouro = bot.emojis.cache.get("809479417024872521")
        const Esmeralda = bot.emojis.cache.get("833458538017062922")
        const Pedra = bot.emojis.cache.get("809479571568852993")
        const Ferro = bot.emojis.cache.get("809479496289091635")
        const Carvao = bot.emojis.cache.get("833459685582438411")
        const Picareta = bot.emojis.cache.get("833493003410079764")
        // Emojis // 

        // Informações do Usuário!
        let InfoUserId = db.get(`${msg.author.username}[0].id`).value()
        let InfoUserIcoins = db.get(`${msg.author.username}[0].Icoins`).value()
        let InfoUserPicareta = db.get(`${msg.author.username}[0].Picareta`).value()
        let InfoUserDurabilidade = db.get(`${msg.author.username}[0].Durabilidade`).value()
        let InfoUserLevel = db.get(`${msg.author.username}[0].Level`).value()
        // Informações do Usuário!

        if (msg.content.toLowerCase() === `igame`) {
            return IsabellyGame();
        }
        if (msg.content.toLowerCase() === `ilogin`) {
            if (msg.author.id !== InfoUserId) {
                msg.channel.send(`**Você ainda não possui registro! Obtenha-o após ler as regras em "Igame".**`)
            }    
            else {
                Login1();
            }        
        }
        if (msg.content.toLowerCase() === `iregister`) {
            if (msg.author.id === InfoUserId) {
                return msg.channel.send(`**Você já foi registrado! Acesse sua área inicial com "ILogin"**`)
            }
            else {
                db.set(`${msg.author.username}`, []).write()
                db.get(`${msg.author.username}`).push({
                    id: `${msg.author.id}`,
                    Icoins: 2000,
                    Picareta: `Pedra`,
                    Durabilidade: 5,
                    Level: 1
                }).write()
                msg.channel.send(`**Registro efetuado com sucesso!**`)
            }
        }

        function IsabellyGame() {
            const EmbedGame = new Discord.MessageEmbed()
                .setAuthor(`Isabelly Game`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                .setColor(`#0CB0F7`)
                .setTitle(`O que é o Igame?`)
                .setThumbnail(`https://www.oficinadanet.com.br/imagens/post/27221/generos-de-games.jpg`)
                .setDescription(`Salve ${msg.author.username}! O "Igame" é um jogo baseado em mineração online. Nele você ira receber valores em "Icoins" que adiante podem ser trocados por níveis maiores, abertura de baús, ou até liberação de novos mundos. Você irá conseguir roubar os Icoins de outros participantes do mesmo servidor!`)
                .addFields(
                    {name: `Regras`, value: `Clique em [🟥]`},
                    {name: `Sair`, value: `Clique em [⬜]`}
                )
                .setFooter(`Informações do Igame para ${msg.author.username}`, msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
            msg.channel.send(EmbedGame).then(Reaction => {
                Reaction.react(`🟥`)
                Reaction.react(`⬜`)

                const Evento_React_Red = (reaction, user) => reaction.emoji.name === `🟥` && user.id === msg.author.id;
                const Evento_React_White = (reaction, user) => reaction.emoji.name === `⬜` && user.id === msg.author.id;

                const Evento_React_Red_Operando = Reaction.createReactionCollector(Evento_React_Red);
                const Evento_React_White_Operando = Reaction.createReactionCollector(Evento_React_White);

                Evento_React_Red_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    Regras()
                })
                Evento_React_White_Operando.on(`collect`, Reaction2 => {
                    msg.delete();
                    Reaction.delete();
                })
            })
        }
        function Regras() {
            const EmbedRegras = new Discord.MessageEmbed()
                .setAuthor(`Isabelly Game Regras`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                .setColor(`#F70C17`)
                .setThumbnail(`https://negociopilates.com.br/wp-content/uploads/2019/04/Regras-696x391.jpg`)
                .setTitle(`Como funciona o Igame?`)
                .setDescription(`**Retorne com [🟦] e Saia com [⬜]**`)
                .addFields(
                    {name: `[💰] Quantia Inicial`, value: `Você começará o Jogo com 2000 Icoins`},
                    {name: `[🏹] Nivel máximo`, value: `Level 10`},
                    {name: `[🧰] Caixas`, value: `Dependendo da caixa você conseguirá receber mais Icoins.`},
                    {name: `[${Diamante}] Minério Diamante`, value: `Cada bloco 500 Icoins`},
                    {name: `[${Esmeralda}] Minério Esmeralda`, value: `Cada bloco 350 Icoins`},
                    {name: `[${Ouro}] Minério Ouro`, value: `Cada bloco 250 Icoins`},
                    {name: `[${Ferro}] Minério Ferro`, value: `Cada bloco 150 Icoins`},
                    {name: `[${Carvao}] Minério Carvão`, value: `Cada bloco 50 Icoins`},
                    {name: `[${Pedra}] Minério Pedra`, value: `Cada bloco 20 Icoins`},
                    {name: `[⚡] Registre-se`, value: `Comando: "Iregister"`},
                    {name: `[🔥] Faça Login`, value: `Comando: "ILogin"`},
                )
                .setFooter(`Informações do Igame para ${msg.author.username}`, msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
            msg.channel.send(EmbedRegras).then(Reaction => {
                Reaction.react(`🟦`)
                Reaction.react(`⬜`)

                const Evento_React_Blue = (reaction, user) => reaction.emoji.name === `🟦` && user.id === msg.author.id;
                const Evento_React_White = (reaction, user) => reaction.emoji.name === `⬜` && user.id === msg.author.id;

                const Evento_React_Blue_Operando = Reaction.createReactionCollector(Evento_React_Blue);
                const Evento_React_White_Operando = Reaction.createReactionCollector(Evento_React_White);

                Evento_React_Blue_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    IsabellyGame()
                })
                Evento_React_White_Operando.on(`collect`, Reaction2 => {
                    Reaction.delete();
                })
            })

        }
        function Login1() {
            const EmbedLogin1 = new Discord.MessageEmbed()
                .setAuthor(`Isabelly Game Login pág: 1`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                .setColor(`RANDOM`)
                .setThumbnail(msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                .setDescription(`Continue em [🟨] ou Saia em [⬜]`)
                .setTitle(`$- Área pessoal de ${msg.author.username} -$`)
                .addFields(
                    {name: `[👤] Jogador`, value: `${msg.author.username}`},
                    {name: `[💨] Id`, value: `${InfoUserId}`},
                    {name: `[🦁] Level`, value: `${db.get(`${msg.author.username}[0].Level`).value()}`},
                    {name: `[💰] Icoins`, value: `${db.get(`${msg.author.username}[0].Icoins`).value()}`},
                    {name: `[${Picareta}] Picareta`, value: `${db.get(`${msg.author.username}[0].Picareta`).value()}`},
                    {name: `[🗾] Durabilidade`, value: `${db.get(`${msg.author.username}[0].Durabilidade`).value()}`},
                )
                .setFooter(`Área de Login pág: 1 de ${msg.author.username}`)
            msg.channel.send(EmbedLogin1).then(Reaction => {
                Reaction.react(`🟨`)
                Reaction.react(`⬜`)

                const Evento_React_Yellow = (reaction, user) => reaction.emoji.name === `🟨` && user.id === msg.author.id;
                const Evento_React_White = (reaction, user) => reaction.emoji.name === `⬜` && user.id === msg.author.id;

                const Evento_React_Yellow_Operando = Reaction.createReactionCollector(Evento_React_Yellow);
                const Evento_React_White_Operando = Reaction.createReactionCollector(Evento_React_White);

                Evento_React_Yellow_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    Login2()
                })
                Evento_React_White_Operando.on(`collect`, Reaction2 => {
                    Reaction.delete();
                    msg.delete();
                })
            })
        }
        function Login2() {
            const EmbedLogin2 = new Discord.MessageEmbed()
                .setAuthor(`Isabelly Game Login pág: 2`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                .setColor(`RANDOM`)
                .setThumbnail(msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                .setTitle(`$- Área pessoal de ${msg.author.username} -$`)
                .addFields(
                    {name: `Minerar`, value: `[🟡] `},
                    {name: `Comprar nova Picareta`, value: `[🟢] `},
                    {name: `Baús`, value: `[🟤] `},
                    {name: `Próxima Página`, value: `[🟠] `},                
                )
                .setFooter(`Área de Login pág: 2 de ${msg.author.username}`)
            msg.channel.send(EmbedLogin2).then(Reaction => {
                Reaction.react(`🟡`)
                Reaction.react(`🟢`)
                Reaction.react(`🟤`)
                Reaction.react(`🟠`)

                const Evento_React_Yellow = (reaction, user) => reaction.emoji.name === `🟡` && user.id === msg.author.id;
                const Evento_React_Green = (reaction, user) => reaction.emoji.name === `🟢` && user.id === msg.author.id;
                const Evento_React_Brown = (reaction, user) => reaction.emoji.name === `🟤` && user.id === msg.author.id;
                const Evento_React_Orange = (reaction, user) => reaction.emoji.name === `🟠` && user.id === msg.author.id;

                const Evento_React_Yellow_Operando = Reaction.createReactionCollector(Evento_React_Yellow);
                const Evento_React_Green_Operando = Reaction.createReactionCollector(Evento_React_Green);
                const Evento_React_Brown_Operando = Reaction.createReactionCollector(Evento_React_Brown);
                const Evento_React_Orange_Operando = Reaction.createReactionCollector(Evento_React_Orange);

                Evento_React_Yellow_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    Minerar();
                })

                Evento_React_Green_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    Picareta1();
                })

                Evento_React_Brown_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    msg.channel.send(`Em Manutenção!`)
                })

                Evento_React_Orange_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    Login3();
                })
            })
        }
        function Login3() {
            const EmbedLogin3 = new Discord.MessageEmbed()
                .setAuthor(`Isabelly Game Login pág: 3`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                .setColor(`RANDOM`)
                .setThumbnail(msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                .setTitle(`$- Área pessoal de ${msg.author.username} -$`)
                .addFields(
                    {name: `Comprar novo Nível`, value: `[⏫] `},
                    {name: `Roubar Adversário`, value: `[❌] `},
                    {name: `Volte a pág 2`, value: `[🟦] `},
                    {name: `Volte a pág 1`, value: `[🟧] `},                
                )
                .setFooter(`Área de Login pág: 3 de ${msg.author.username}`)
            msg.channel.send(EmbedLogin3).then(Reaction => {
                Reaction.react(`⏫`)
                Reaction.react(`❌`)
                Reaction.react(`🟦`)
                Reaction.react(`🟧`)

                const Evento_React_Up = (reaction, user) => reaction.emoji.name === `⏫` && user.id === msg.author.id;
                const Evento_React_100 = (reaction, user) => reaction.emoji.name === `❌` && user.id === msg.author.id;
                const Evento_React_Blue = (reaction, user) => reaction.emoji.name === `🟦` && user.id === msg.author.id;
                const Evento_React_Orange = (reaction, user) => reaction.emoji.name === `🟧` && user.id === msg.author.id;

                const Evento_React_Up_Operando = Reaction.createReactionCollector(Evento_React_Up);
                const Evento_React_100_Operando = Reaction.createReactionCollector(Evento_React_100);
                const Evento_React_Blue_Operando = Reaction.createReactionCollector(Evento_React_Blue);
                const Evento_React_Orange_Operando = Reaction.createReactionCollector(Evento_React_Orange);

                Evento_React_Up_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    msg.channel.send(`Em Manutenção!`)
                })

                Evento_React_100_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    msg.channel.send(`Em Manutenção!`)
                })

                Evento_React_Blue_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    Login2();
                })

                Evento_React_Orange_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    Login1();
                })
            })
        }
        function Minerar() {
            const EmbedMinerar = new Discord.MessageEmbed()
                .setAuthor(`Isabelly Game Mineração`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                .setColor(`RANDOM`)
                .setThumbnail(`https://static8.depositphotos.com/1035224/1050/i/600/depositphotos_10500953-stock-photo-the-mine.jpg`)
                .setTitle(`$- Mina de ${msg.author.username} -$`)
                .addFields(
                    {name: `[🔅] Blocos até a quebra`, value: `${db.get(`${msg.author.username}[0].Durabilidade`).value()}`},
                    {name: `[💰] Icoins`, value: `${db.get(`${msg.author.username}[0].Icoins`).value()}`},
                    {name: `Minere`, value: `[💵] `},
                    {name: `Volte em`, value: `[🟦] `},
                )
                .setFooter(`Mina de ${msg.author.username}`, msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
            msg.channel.send(EmbedMinerar).then(Reaction => {
                Reaction.react(`💵`)
                Reaction.react(`🟦`)

                const Evento_React_Grana = (reaction, user) => reaction.emoji.name === `💵` && user.id === msg.author.id;
                const Evento_React_Blue = (reaction, user) => reaction.emoji.name === `🟦` && user.id === msg.author.id;

                const Evento_React_Blue_Operando = Reaction.createReactionCollector(Evento_React_Blue);
                const Evento_React_Grana_Operando = Reaction.createReactionCollector(Evento_React_Grana);

                Evento_React_Blue_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    Login2();
                })

                Evento_React_Grana_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    if (db.get(`${msg.author.username}[0].Durabilidade`).value() <= 0) {
                        msg.channel.send(`**${msg.author.username}, sua picareta de ${db.get(`${msg.author.username}[0].Picareta`).value()} quebrou. Por favor vá a loja comprar uma nova!**`)
                        Login2()
                    }
                    const MinerioSorteado = minerios[Math.floor(Math.random() * minerios.length)]
                    let New_Value = db.get(`${msg.author.username}[0].Durabilidade`).value() - 1
                    if (db.get(`${msg.author.username}[0].Durabilidade`).value() > 0) {
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Durabilidade: New_Value}).write()
                        Mina()
                    }
                    function Mina() {
                        if (MinerioSorteado === `Diamante` &&  db.get(`${msg.author.username}[0].Durabilidade`).value() >= 0) {
                            msg.channel.send(`**${msg.author.username}, você minerou ${MinerioSorteado} [${Diamante}]**`)
                            let New_Diamante = db.get(`${msg.author.username}[0].Icoins`).value() + 500
                            db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Icoins: New_Diamante}).write()
                            Minerar()
                        }
                        if (MinerioSorteado === `Ouro` &&  db.get(`${msg.author.username}[0].Durabilidade`).value() >= 0) {
                            msg.channel.send(`**${msg.author.username}, você minerou ${MinerioSorteado} [${Ouro}]**`)
                            let New_Ouro = db.get(`${msg.author.username}[0].Icoins`).value() + 250
                            db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Icoins: New_Ouro}).write()
                            Minerar()
                        }
                        if (MinerioSorteado === `Esmeralda` &&  db.get(`${msg.author.username}[0].Durabilidade`).value() >= 0) {
                            msg.channel.send(`**${msg.author.username}, você minerou ${MinerioSorteado} [${Esmeralda}]**`)
                            let New_Esmeralda = db.get(`${msg.author.username}[0].Icoins`).value() + 350
                            db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Icoins: New_Esmeralda}).write()
                            Minerar()
                        }
                        if (MinerioSorteado === `Carvao` &&  db.get(`${msg.author.username}[0].Durabilidade`).value() >= 0) {
                            msg.channel.send(`**${msg.author.username}, você minerou ${MinerioSorteado} [${Carvao}]**`)
                            let New_Carvao = db.get(`${msg.author.username}[0].Icoins`).value() + 50
                            db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Icoins: New_Carvao}).write()
                            Minerar()
                        }
                        if (MinerioSorteado === `Ferro` &&  db.get(`${msg.author.username}[0].Durabilidade`).value() >= 0) {
                            msg.channel.send(`**${msg.author.username}, você minerou ${MinerioSorteado} [${Ferro}]**`)
                            let New_Ferro = db.get(`${msg.author.username}[0].Icoins`).value() + 150
                            db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Icoins: New_Ferro}).write()
                            Minerar()
                        }
                        if (MinerioSorteado === `Pedra` &&  db.get(`${msg.author.username}[0].Durabilidade`).value() >= 0) {
                            msg.channel.send(`**${msg.author.username}, você minerou ${MinerioSorteado} [${Pedra}]**`)
                            let New_Pedra = db.get(`${msg.author.username}[0].Icoins`).value() + 20
                            db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Icoins: New_Pedra}).write()
                            Minerar()
                        }
                    }
                })
            })
        }
        function Picareta1() {
            const EmbedPicareta = new Discord.MessageEmbed()
                .setAuthor(`Isabelly Game - Picareta pág 1`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                .setColor(`RANDOM`)
                .setThumbnail(`https://www.festejarereceber.com.br/wp-content/uploads/2016/07/Picareta-Minecraft.jpg`)
                .setTitle(`$- Nova Picareta para ${msg.author.username} -$`)
                .addFields(
                    {name: `[💰] Icoins`, value: `${db.get(`${msg.author.username}[0].Icoins`).value()}`},
                    {name: `[${Diamante}] Picareta de Diamante`, value: `20 000 Icoins - Durabilidade 200`},
                    {name: `[${Esmeralda}] Picareta de Esmeralda`, value: `15 000 Icoins - Durabilidade 150`},
                    //{name: `[${Ouro}] Picareta de Ouro`, value: `8 000 Icoins - Durabilidade 100`},
                    //{name: `[${Ferro}] Picareta de Ferro`, value: `2000 Icoins - Durabilidade 35`},
                    //{name: `[${Pedra}] Picareta de Pedra`, value: `250 Icoins - Durabilidade 5`},
                    {name: `[🟦] Volte`, value: `Pág de Selecionamento.`},
                    {name: `[🟧] Avance`, value: `Nova Picareta pág 2`},

                )
                .setFooter(`Picareta para ${msg.author.username}`, msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
            msg.channel.send(EmbedPicareta).then(Reaction => {
                Reaction.react(Diamante)
                Reaction.react(Esmeralda)
                Reaction.react(`🟦`)
                Reaction.react(`🟧`)

                const Evento_React_Dima = (reaction, user) => reaction.emoji.id === `809479541067743312` && user.id === msg.author.id;
                const Evento_React_Esmeralda = (reaction, user) => reaction.emoji.id === `833458538017062922` && user.id === msg.author.id;
                const Evento_React_Blue = (reaction, user) => reaction.emoji.name === `🟦` && user.id === msg.author.id;
                const Evento_React_Orange = (reaction, user) => reaction.emoji.name === `🟧` && user.id === msg.author.id;

                const Evento_React_Dima_Operando = Reaction.createReactionCollector(Evento_React_Dima);
                const Evento_React_Esmeralda_Operando = Reaction.createReactionCollector(Evento_React_Esmeralda);
                const Evento_React_Blue_Operando = Reaction.createReactionCollector(Evento_React_Blue);
                const Evento_React_Orange_Operando = Reaction.createReactionCollector(Evento_React_Orange);

                Evento_React_Dima_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    if (db.get(`${msg.author.username}[0].Icoins`).value() < 20000) {
                        msg.channel.send(`**Você não tem Icoins suficientes para comprar a picareta de Diamante [${Diamante}]. Sua quantia atual é: _${db.get(`${msg.author.username}[0].Icoins`).value()}_**`)
                        Picareta1()
                    }
                    if (db.get(`${msg.author.username}[0].Icoins`).value() >= 20000) {
                        msg.channel.send(`**Compra efetuada com sucesso! Sua picareta de Diamante [${Diamante}] possui durabilidade de 200**`)
                        let New_Icoins = db.get(`${msg.author.username}[0].Icoins`).value() - 20000
                        let New_Durabilidade = 200
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Durabilidade: 0}).write()
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Durabilidade: New_Durabilidade}).write()
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Picareta: "Diamante"}).write()
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Icoins: New_Icoins}).write()
                        Login1();
                    }
                })
                Evento_React_Esmeralda_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    if (db.get(`${msg.author.username}[0].Icoins`).value() < 15000) {
                        msg.channel.send(`**Você não tem Icoins suficientes para comprar a picareta de Esmeralda [${Esmeralda}]. Sua quantia atual é: _${db.get(`${msg.author.username}[0].Icoins`).value()}_**`)
                        Picareta1()
                    }
                    if (db.get(`${msg.author.username}[0].Icoins`).value() >= 15000) {
                        msg.channel.send(`**Compra efetuada com sucesso! Sua picareta de Esmeralda [${Esmeralda}] possui durabilidade de 150**`)
                        let New_Icoins1 = db.get(`${msg.author.username}[0].Icoins`).value() - 15000
                        let New_Durabilidade1 = 150
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Durabilidade: 0}).write()
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Durabilidade: New_Durabilidade1}).write()
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Picareta: "Esmeralda"}).write()
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Icoins: New_Icoins1}).write()
                        Login1();
                    }
                })
                Evento_React_Blue_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    Login2();
                })
                Evento_React_Orange_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    Picareta2();
                })
            })
        }
        function Picareta2() {
            const EmbedPicareta2 = new Discord.MessageEmbed()
                .setAuthor(`Isabelly Game - Picareta pág 2`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
                .setColor(`RANDOM`)
                .setTitle(`$- Nova Picareta para ${msg.author.username} -$`)
                .setThumbnail(`https://www.festejarereceber.com.br/wp-content/uploads/2016/07/Picareta-Minecraft.jpg`)
                .addFields(
                    {name: `[${Ouro}] Picareta de Ouro`, value: `8 000 Icoins - Durabilidade 100`},
                    {name: `[${Ferro}] Picareta de Ferro`, value: `2000 Icoins - Durabilidade 35`},
                    {name: `[${Pedra}] Picareta de Pedra`, value: `250 Icoins - Durabilidade 5`},
                    {name: `[🟦] Volte`, value: `Para Picareta pág 2`}
                )
                .setFooter(`Picareta para ${msg.author.username}`, msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
            msg.channel.send(EmbedPicareta2).then(Reaction => {
                Reaction.react(Ouro)
                Reaction.react(Ferro)
                Reaction.react(Pedra)
                Reaction.react(`🟦`)

                const Evento_React_Ouro = (reaction, user) => reaction.emoji.id === `809479417024872521` && user.id === msg.author.id;
                const Evento_React_Ferro = (reaction, user) => reaction.emoji.id === `809479496289091635` && user.id === msg.author.id;
                const Evento_React_Pedra = (reaction, user) => reaction.emoji.id === `809479571568852993` && user.id === msg.author.id;
                const Evento_React_Blue = (reaction, user) => reaction.emoji.name === `🟦` && user.id === msg.author.id;

                const Evento_React_Ouro_Operando = Reaction.createReactionCollector(Evento_React_Ouro);
                const Evento_React_Ferro_Operando = Reaction.createReactionCollector(Evento_React_Ferro);
                const Evento_React_Pedra_Operando = Reaction.createReactionCollector(Evento_React_Pedra);
                const Evento_React_Blue_Operando = Reaction.createReactionCollector(Evento_React_Blue);

                Evento_React_Ouro_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    if (db.get(`${msg.author.username}[0].Icoins`).value() < 8000) {
                        msg.channel.send(`**Você não tem Icoins suficientes para comprar a picareta de Ouro [${Ouro}]. Sua quantia atual é: _${db.get(`${msg.author.username}[0].Icoins`).value()}_**`)
                        Picareta2()
                    }
                    if (db.get(`${msg.author.username}[0].Icoins`).value() >= 8000) {
                        msg.channel.send(`**Compra efetuada com sucesso! Sua picareta de Ouro [${Ouro}] possui durabilidade de 100**`)
                        let New_Icoins2 = db.get(`${msg.author.username}[0].Icoins`).value() - 8000
                        let New_Durabilidade2 = 100
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Durabilidade: 0}).write()
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Durabilidade: New_Durabilidade2}).write()
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Picareta: "Ouro"}).write()
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Icoins: New_Icoins2}).write()
                        Login1();
                    }
                })
                Evento_React_Ferro_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    if (db.get(`${msg.author.username}[0].Icoins`).value() < 2000) {
                        msg.channel.send(`**Você não tem Icoins suficientes para comprar a picareta de Ferro [${Ferro}]. Sua quantia atual é: _${db.get(`${msg.author.username}[0].Icoins`).value()}_**`)
                        Picareta2()
                    }
                    if (db.get(`${msg.author.username}[0].Icoins`).value() >= 2000) {
                        msg.channel.send(`**Compra efetuada com sucesso! Sua picareta de Ferro [${Ferro}] possui durabilidade de 35**`)
                        let New_Icoins3 = db.get(`${msg.author.username}[0].Icoins`).value() - 2000
                        let New_Durabilidade3 = 35
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Durabilidade: 0}).write()
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Durabilidade: New_Durabilidade3}).write()
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Picareta: "Ferro"}).write()
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Icoins: New_Icoins3}).write()
                        Login1();
                    }
                })
                Evento_React_Pedra_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    if (db.get(`${msg.author.username}[0].Icoins`).value() < 250) {
                        msg.channel.send(`**Você não tem Icoins suficientes para comprar a picareta de Pedra [${Pedra}]. Sua quantia atual é: _${db.get(`${msg.author.username}[0].Icoins`).value()}_**`)
                        Picareta2()
                    }
                    if (db.get(`${msg.author.username}[0].Icoins`).value() >= 250) {
                        msg.channel.send(`**Compra efetuada com sucesso! Sua picareta de Pedra [${Pedra}] possui durabilidade de 5**`)
                        let New_Icoins4 = db.get(`${msg.author.username}[0].Icoins`).value() - 250
                        let New_Durabilidade4 = 5
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Durabilidade: 0}).write()
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Durabilidade: New_Durabilidade4}).write()
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Picareta: "Pedra"}).write()
                        db.get(`${msg.author.username}`).find({id: `${InfoUserId}`}).assign({Icoins: New_Icoins4}).write()
                        Login1();
                    }
                })
                Evento_React_Blue_Operando.on(`collect`, Reaction1 => {
                    Reaction.delete();
                    Picareta1();
                })

            })
        }
    })
}