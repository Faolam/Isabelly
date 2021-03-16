const Discord = require('discord.js');


const execute = (bot,msg,args) => {
    let espaco_de_argumentos = args.join(" ").split(" / ");
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
        return msg.channel.send(`${msg.author.username}, você não tem permissão para isso!`);
    }
    if (args.length === 0) {
        return msg.channel.send(`${msg.author.username}, ultilize "${process.env.PREFIX}game <id do canal> / <título> / <Endereço da Foto do Jogo> / <Link para Dowload>"`);
    }
    let canal = espaco_de_argumentos[0];
    let Titulo = espaco_de_argumentos[1];
    let foto = espaco_de_argumentos[2];
    let link = espaco_de_argumentos[3];
    if(!link){
        return msg.reply('Faltou o link!')
    }
    const canal_do_anuncio = msg.guild.channels.cache.find(cda => cda.id === canal)

    let anuncio_embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setAuthor(`Sistema de Divulgação de Jogos | ${bot.user.username}`, "https://i.pinimg.com/236x/17/74/52/17745210fb97895f57333a94e6bbfc26.jpg")
    .setThumbnail(foto)
    .setTitle(Titulo)
    .setColor("#008000")
    .setDescription(link)
    .setFooter('A área jogos é um ambiente criado para divulgação de jogos Pirateados!')

    canal_do_anuncio.send(anuncio_embed);
}


// Informações do comando!
module.exports ={
    name: "game",
    help: "Divulgação de jogos",
    execute,
}
