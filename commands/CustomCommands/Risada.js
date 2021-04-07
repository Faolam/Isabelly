const Discord = require('discord.js')


module.exports = (bot) => {
    bot.on('message', (msg) => {
        if (msg.author.bot) {
            return;
        }
        if (msg.content.toLowerCase().startsWith('kkk')) {
            const String_K = "kkkkkkkkkkkkkkkkkkkkk"
            return msg.channel.send(`${String_K.repeat(5)}`)
        }
    })
}