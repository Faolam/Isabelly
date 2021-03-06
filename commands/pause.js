// Início ao desenvolvimento do comando pause!
const execute = (bot, msg, args) => {
    const queue = bot.queues.get(msg.guild.id);
    if (!queue) {
      return msg.channel.send(`⚠️ ${msg.author.username}, não ah música alguma sendo reproduzida!!`);
    }
    queue.dispatcher.pause();
    const emoji1 = bot.emojis.cache.get("803678268666413156")
    msg.channel.send(`${emoji1} A música que estava sendo reproduzida foi pausada!`)
};


// Informações do comando!!
  module.exports = {
    name: "pause",
    help: "Pausa a reprodução das músicas!",
    execute,
};