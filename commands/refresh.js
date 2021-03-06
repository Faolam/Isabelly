// Puxando informações sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando reiniciar
const execute = (bot,msg,args) => {
    let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor(`Sistema - Refresh Account`,)
    .setTitle(`Fase Beta - Alguns dados podem ser comprometidos!`)
    .setThumbnail("https://image.flaticon.com/icons/png/512/2397/2397650.png")
    .setDescription(`${msg.author.username}, você está prestes a começar a reinicialização de sua conta!`)
    .setColor("#8A2BE2")
    .setFooter(`SISTEMA OPERANTE E PRESTES A SER INICIADO!`)

    let embed1 = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor(`Sistema - Refresh Account`,)
    .setTitle(`Fase Beta - Alguns dados podem ser comprometidos!`)
    .setThumbnail("https://image.flaticon.com/icons/png/512/2397/2397650.png")
    .setDescription(`${msg.author.username}, efetuando ajustes...`)
    .setColor("#8A2BE2")
    .setFooter(`SISTEMA EM ANDAMENTO`)

    let embed2 = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor(`Sistema - Refresh Account`,)
    .setTitle(`Fase Beta - Alguns dados podem ser comprometidos!`)
    .setThumbnail("https://image.flaticon.com/icons/png/512/2397/2397650.png")
    .setDescription(`${msg.author.username}, preparação efetuada. Andamento 0%`)
    .setColor("#8A2BE2")
    .setFooter(`SISTEMA EM ANDAMENTO`)

    let embed3 = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor(`Sistema - Refresh Account`,)
    .setTitle(`Fase Beta - Alguns dados podem ser comprometidos!`)
    .setThumbnail("https://image.flaticon.com/icons/png/512/2397/2397650.png")
    .setDescription(`${msg.author.username}, preparação efetuada. Andamento 10%`)
    .setColor("#8A2BE2")
    .setFooter(`SISTEMA EM ANDAMENTO`)

    let embed4 = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor(`Sistema - Refresh Account`,)
    .setTitle(`Fase Beta - Alguns dados podem ser comprometidos!`)
    .setThumbnail("https://image.flaticon.com/icons/png/512/2397/2397650.png")
    .setDescription(`${msg.author.username}, preparação efetuada. Andamento 20%`)
    .setColor("#8A2BE2")
    .setFooter(`SISTEMA EM ANDAMENTO`)

    let embed5 = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor(`Sistema - Refresh Account`,)
    .setTitle(`Fase Beta - Alguns dados podem ser comprometidos!`)
    .setThumbnail("https://image.flaticon.com/icons/png/512/2397/2397650.png")
    .setDescription(`${msg.author.username}, preparação efetuada. Andamento 30%`)
    .setColor("#8A2BE2")
    .setFooter(`SISTEMA EM ANDAMENTO`)

    let embed6 = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor(`Sistema - Refresh Account`,)
    .setTitle(`Fase Beta - Alguns dados podem ser comprometidos!`)
    .setThumbnail("https://image.flaticon.com/icons/png/512/2397/2397650.png")
    .setDescription(`${msg.author.username}, preparação efetuada. Andamento 40%`)
    .setColor("#8A2BE2")
    .setFooter(`SISTEMA EM ANDAMENTO`)

    let embed7 = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor(`Sistema - Refresh Account`,)
    .setTitle(`Fase Beta - Alguns dados podem ser comprometidos!`)
    .setThumbnail("https://image.flaticon.com/icons/png/512/2397/2397650.png")
    .setDescription(`${msg.author.username}, preparação efetuada. Andamento 50%`)
    .setColor("#8A2BE2")
    .setFooter(`SISTEMA EM ANDAMENTO`)

    let embed8 = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor(`Sistema - Refresh Account`,)
    .setTitle(`Fase Beta - Alguns dados podem ser comprometidos!`)
    .setThumbnail("https://image.flaticon.com/icons/png/512/2397/2397650.png")
    .setDescription(`${msg.author.username}, preparação efetuada. Andamento 60%`)
    .setColor("#8A2BE2")
    .setFooter(`SISTEMA EM ANDAMENTO`)

    let embed9 = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor(`Sistema - Refresh Account`,)
    .setTitle(`Fase Beta - Alguns dados podem ser comprometidos!`)
    .setThumbnail("https://image.flaticon.com/icons/png/512/2397/2397650.png")
    .setDescription(`${msg.author.username}, preparação efetuada. Andamento 70%`)
    .setColor("#8A2BE2")
    .setFooter(`SISTEMA EM ANDAMENTO`)

    let embed10 = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor(`Sistema - Refresh Account`,)
    .setTitle(`Fase Beta - Alguns dados podem ser comprometidos!`)
    .setThumbnail("https://image.flaticon.com/icons/png/512/2397/2397650.png")
    .setDescription(`${msg.author.username}, preparação efetuada. Andamento 80%`)
    .setColor("#8A2BE2")
    .setFooter(`SISTEMA EM ANDAMENTO`)

    let embed11 = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor(`Sistema - Refresh Account`,)
    .setTitle(`Fase Beta - Alguns dados podem ser comprometidos!`)
    .setThumbnail("https://image.flaticon.com/icons/png/512/2397/2397650.png")
    .setDescription(`${msg.author.username}, preparação efetuada. Andamento 90%`)
    .setColor("#8A2BE2")
    .setFooter(`SISTEMA EM ANDAMENTO`)

    let embed12 = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor(`Sistema - Refresh Account`,)
    .setTitle(`Fase Beta - Alguns dados podem ser comprometidos!`)
    .setThumbnail("https://image.flaticon.com/icons/png/512/2397/2397650.png")
    .setDescription(`${msg.author.username}, preparação efetuada. Andamento 99%`)
    .setColor("#8A2BE2")
    .setFooter(`SISTEMA EM ANDAMENTO`)

    let embed13 = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor(`Sistema - Refresh Account`,)
    .setTitle(`Fase Beta - Alguns dados podem ser comprometidos!`)
    .setThumbnail("https://image.flaticon.com/icons/png/512/2397/2397650.png")
    .setDescription(`${msg.author.username}, preparação efetuada. Andamento 100%`)
    .setColor("#8A2BE2")
    .setFooter(`SISTEMA EM ANDAMENTO`)

    msg.channel.send(embed).then(Message => {
        setTimeout(() => { Message.edit(embed1); }, 20000);
        setTimeout(() => { Message.edit(embed2); }, 25000);
        setTimeout(() => { Message.edit(embed3); }, 10000);
        setTimeout(() => { Message.edit(embed4); }, 10000);
        setTimeout(() => { Message.edit(embed5); }, 30000);
        setTimeout(() => { Message.edit(embed6); }, 40000);
        setTimeout(() => { Message.edit(embed7); }, 10000);
        setTimeout(() => { Message.edit(embed8); }, 15000);
        setTimeout(() => { Message.edit(embed9); }, 25000);
        setTimeout(() => { Message.edit(embed10); }, 10000);
        setTimeout(() => { Message.edit(embed11); }, 10000);
        setTimeout(() => { Message.edit(embed12); }, 40000);
        setTimeout(() => { Message.edit(embed13); }, 10000);
        setTimeout(() => { Message.edit(`${msg.author.username}, sua estrutura de dados do DISCORD foi reiniciada!`); });

    });
}


// Informações do comando!
module.exports ={
    name: "reiniciar",
    help: "Reinicia a conta de um Usuário no discord!",
    execute,
}