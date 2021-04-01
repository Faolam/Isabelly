const Discord = require('discord.js')


module.exports = (bot) => {
    bot.on('message', (msg) => {
        if (msg.content.toLowerCase() === `bom dia`) {
            if (msg.author.bot) {
                return msg.channel.send(`Olá! Bom dia!! Como está? Detectei que você é um robô... Tem certeza que está vendo a luz do dia, ou apenas está me trolando?`)
            } else {
                return msg.channel.send(`Bom dia ${msg.author.username}!! Como você está? Tudo certo?`)
            }
        }
        if (msg.content.toLowerCase() === `boa tarde`) {
            if (msg.author.bot) {
                return msg.channel.send(`Olá! Boa tarde!! Como está? Detectei que você é um robô... Tem certeza que está vendo a luz do dia, ou apenas está me trolando?`)
            } else {
                return msg.channel.send(`Boa tarde ${msg.author.username}!! Como você está? Tudo certo?`)
            }
        }
        if (msg.content.toLowerCase() === `boa noite`) {
            if (msg.author.bot) {
                return msg.channel.send(`Olá! Boa Noite !! Como está? Detectei que você é um robô... Tem certeza que está vendo a luz do dia, ou apenas está me trolando?`)
            } else {
                return msg.channel.send(`Boa Noite ${msg.author.username}!! Como você está? Tudo certo?`)
            }
        }
    })
}