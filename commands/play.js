// Puxando informações sobre o discord E Bibliotecas do Youtube
const Discord = require('discord.js');
const search = require("yt-search");
const ytdl = require("ytdl-core-discord");


// Inicio ao desenvolvimento do comando play
const execute = (bot, msg, args) => {
    // Aba para colocar os emojis da reaction e do comando play!
    const emoji1 = bot.emojis.cache.get("821123456828964874")
    const emoji2 = bot.emojis.cache.get("821123475364118589")
    const emoji3 = bot.emojis.cache.get("821123492745052190")
    const emoji4 = bot.emojis.cache.get("821123511720214580")
    const emoji5 = bot.emojis.cache.get("821123530275946496")
    // Fim da aba de emojis
    const s = args.join(" ");
    try {
      search(s, (err, result) => {
        if (err) {
          msg.channel.send(`${msg.author.username}, infelizmente encontrei uma barreira no processo de busca. Por favor tente novamente de outra forma!`)
          console.log(err)
        } else if (result && result.videos.length > 0) {
          const song = result.videos[0];
          const queue = bot.queues.get(msg.guild.id);
          // Resposta ao Usuário que solicitou a música
          const embed_Música = new Discord.MessageEmbed()

          .setThumbnail(song.thumbnail)
          .setTimestamp()
          .setAuthor(`---> Nova Música Adicionada a Fila! <---`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
          .setTitle(`${emoji4} - Resultados para a Busca - ${emoji4}`)
          .setColor("RANDOM")
          .setDescription(`${emoji3} ${song.title} ${emoji3}`)
          .addField(`🎧 Duração da Música:`, `${song.timestamp}`, true)
          .addField(`🎧 URL da Música:`, `${song.url}`, true)
          .addField(`🎧 Quantidade de views`, `${song.views}`, true)
          .setFooter(`Sistema de Músicas! A fila está em: "=fila"`)

          msg.channel.send(embed_Música).then(msg1 => {
            msg1.react(emoji1)
            msg1.react(emoji2)
            msg1.react(emoji5) 
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