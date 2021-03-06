// Início ao comando Skip
const playSong = require("./play").playSong;

const execute = (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    return msg.reply(`⚠️ ${msg.author.username}, não ah música alguma sendo reproduzida!!`);
  }
  queue.songs.shift();
  bot.queues.set(msg.guild.id, queue);
  playSong(bot, msg, queue.songs[0]);
  msg.channel.send(`⏭️ Estou pulando a música atual! Que venha a próxima música!!`)
};


// Informações sobre o comando skip!
module.exports = {
  name: "skip",
  help: "Pula para a próxima música",
  execute,
};