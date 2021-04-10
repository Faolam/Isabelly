// Informações de fila!

const execute = async (bot, msg, args) => {
    const serverQueue = bot.queues.get(msg.guild.id);
    if (!serverQueue) return msg.channel.send(`Olha aqui. Você acha que eu sou boba? Não tem nada tocando nesse servidor aqui, ${msg.author.username}.`);
    return msg.channel.send("```"+`
Lista de Reprodução:
${serverQueue.songs.map(song => `--> ${song.title}`).join('\n')}
Música em reprodução: {
    ${serverQueue.songs[0].title}
}
    `+"```");

}

// Module Help Exports and Name.

module.exports = {
    name: 'fila',
    help: 'Mostra a lista de musicas !',
    execute,
}