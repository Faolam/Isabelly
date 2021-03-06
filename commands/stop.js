// Início ao comando stop!
const execute = (bot, msg, args) => {
    const queue = bot.queues.get(msg.guild.id);
    if (!queue) {
      return msg.channel.send(`⚠️ ${msg.author.username}, não ah música alguma sendo reproduzida!!`);
    }
    queue.songs = [];
    bot.queues.set(msg.guild.id, queue);
    queue.dispatcher.end();
    msg.channel.send(`⏹️ Estou parando definitivamente essa música!`)
  };
  

// Informações do comando Stop  
  module.exports = {
    name: "stop",
    help: "Para a reprodução de músicas no servidor",
    execute,
  };