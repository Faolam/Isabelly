// Trazendo Informações sobre o Discord. Caso seja ultilizado posteriormente.
const Discord = require('discord.js');


// Dando início ao comando de Limpeza!
const execute = (bot,msg,args) => {
    if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.channel.send(`🏆 Você não tem permissão para ultilizar esse comando, @${msg.author.username}.`);
    let mensagemDeletar = args.slice(0).join(" ");
    if(mensagemDeletar < 2 || mensagemDeletar > 100) return msg.channel.send(`🔒 ${msg.author.username}, o discord só me permite apagar mensagens maiores que 1 e menores que 100!`)
    if(args.length === 0) return msg.channel.send(`🎨 ${msg.author.username}, ultilize: =remover <número de mensagens> para apagar...`);
    if(isNaN(args[0])) return msg.channel.send("✏️ Você não colocou nenhum número! Preencha o campo vazio após =remover com um número entre 2 e 100.");
// Caso algo dê errado certificar que seja apresentado corretamente no terminal
    try {
        msg.channel.bulkDelete(mensagemDeletar);
        msg.channel.send(`📂 Eu limpei exatamente ${mensagemDeletar} mensagens a pedido de ${msg.author.username}. 📂`);
    } catch(e){
        console.log(e);
    }
}


// Informações module Exports
module.exports ={
    name: "r",
    help: "Apaga mensagens de um chat. Mínimo 2 máximo 100",
    execute,
}