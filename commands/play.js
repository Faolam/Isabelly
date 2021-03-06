// Puxando informações sobre o discord E Bibliotecas do Youtube
const Discord = require('discord.js');
const search = require("yt-search");
const ytdl = require("ytdl-core-discord");


// Inicio ao desenvolvimento do comando play
const execute = (bot, msg, args) => {
    const s = args.join(" ");
    try {
      search(s, (err, result) => {
        if (err) {
          msg.channel.send(`${msg.author.username}, infelizmente encontrei uma barreira no processo de busca. Por favor tente novamente de outra forma!`)
        } else if (result && result.videos.length > 0) {
          const song = result.videos[0];
          const queue = bot.queues.get(msg.guild.id);
          // Resposta ao Usuário que solicitou a música
          let embed_Música = new Discord.MessageEmbed()

          .setThumbnail(song.thumbnail)
          .setTimestamp()
          .setTitle(`📥 - Resultados para a Busca - 📤`)
          .setColor("RANDOM")
          .setDescription(`😍 ${song.title} 😍`)
          .addField(`🎧 Descrição da Música:`, song.description, true)
          .addField(`🎧 URL da Música:`, song.url, true)
          .addField(`🎧 Quantidade de views`, song.views, true)

          msg.channel.send(embed_Música).then(msg1 => {
            msg1.react("🤙").then(msg2 => {
              msg1.react("👎")
            })
          });
          // Fim do supracitado resultado! 
          if (queue) {
            queue.songs.push(song);
            bot.queues.set(msg.guild.id, queue);
          } else playSong(bot, msg, song);
        } else {
          return msg.reply("infelizmente não consegui achar nenhuma música com esse nome.");
        }
      });
    } catch (e) {
      console.error(e);
    }
};
  
  const playSong = async (bot, msg, song) => {
    let queue = bot.queues.get(msg.member.guild.id);
    if (!song) {
      if (queue) {
        queue.connection.disconnect();
        return bot.queues.delete(msg.member.guild.id);
      }
    }
    if (!msg.member.voice.channel) {
      return msg.reply(
        ", aparentemente você não está em nenhum canal de voz, e é por isso que não consigo tocar a música que você pediu!"
      );
    }
    if (!queue) {
      const conn = await msg.member.voice.channel.join();
      queue = {
        volume: 10,
        connection: conn,
        dispatcher: null,
        songs: [song],
      };
    }
    queue.dispatcher = await queue.connection.play(
      await ytdl(song.url, { highWaterMark: 1 << 25, filter: "audioonly" }),
      {
        type: "opus",
      }
    );
    queue.dispatcher.on("finish", () => {
      queue.songs.shift();
      playSong(bot, msg, queue.songs[0]);
    });
    bot.queues.set(msg.member.guild.id, queue);
};

// Informações do comando!
module.exports ={
    name: "p",
    help: "começa a reproduzir a musica pedida!",
    execute,
    playSong,
};