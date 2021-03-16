const execute = (bot, msg, args) => {
    const queue = bot.queues.get(msg.guild.id);
    if (!queue) {
      return msg.reply(" não tem nenhuma música sendo reproduzida nesse servidor... Em outros sim, mas aqui nn! kkkk");
    }
    const volume = Number(args.join(" "));
    if (isNaN(volume) || volume < 0 || volume > 10) {
      return msg.reply(" o volume precisa estar entre 0 e 10!");
    }
    queue.dispatcher.setVolume(volume / 10);
    queue.volume = volume;
    bot.queues.set(msg.guild.id, queue);
    msg.channel.send(`Seu volume pessoal foi alterado ${msg.author.username}!`)
  };
  
  module.exports = {
    name: "sound",
    help: "Ajusta o volume numa escala de 0 a 10",
    execute,
  };