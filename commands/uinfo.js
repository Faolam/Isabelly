// Puxando informações do Discord.js e da classe Moment
const Discord = require("discord.js");
const moment = require('moment'); 
      moment.locale('pt-BR');


// Início ao desenvolvimento do comando!
const execute = async (bot, msg, args) =>{

    var member = msg.mentions.members.first();

    if(!member) member = msg.member

    const Embed_de_Informacoes = new Discord.MessageEmbed()

        .setAuthor(`Info de Usuários - Isabelly`, "https://pa1.narvii.com/6333/063687782b48f4261938012ea7b7209c494c5c9c_hq.gif")
        .setTitle(`👤 Informações de ${member.user.username}`)
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
        .addField('📱 ID:', member.user.id)
        .addField('📀 Entrou nesse servidor em:', `${moment(member.joinedAt).format('LLL')}`)
        .addField('💿 Conta criada em:', `${moment(member.user.createdAt).format('LLL')}`)
        .setColor("RANDOM")
        .setFooter("© Isabelly")
   
    msg.channel.send(Embed_de_Informacoes)
   
}


// Considerações finais e adentros sobre o comando UINFO
module.exports = {
    name: "uinfo",
    help: "Mostra as informações de um usuário!",
    execute,
}