const Discord = require('discord.js')

// Informações de fila!

const execute = async (bot, msg, args) => {
    let Num = 0;
    const serverQueue = bot.queues.get(msg.guild.id);
    if (!serverQueue) return msg.channel.send(`Olha aqui. Você acha que eu sou boba? Não tem nada tocando nesse servidor aqui, ${msg.author.username}.`);
    const Embed = new Discord.MessageEmbed()
        .setAuthor(`2021 © ${bot.user.username}`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
        .setColor(`#00FFDC`)
        .setDescription(`
        ***Lista de Reprodução:***
        ${serverQueue.songs.map(song => `**[${++Num}] ** ${song.title}`).join('\n')}
            
        **Tocando Agora:** ${serverQueue.songs[0].title}`)
        .setFooter(`${msg.author.username}`, msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    return msg.channel.send(Embed)
}

// Module Help Exports and Name.

module.exports = {
    name: 'fila',
    help: 'Mostra a lista de musicas !',
    execute,
}