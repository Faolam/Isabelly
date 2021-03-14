const Discord = require('discord.js');


const execute = (bot, msg, args) => {
    let User = msg.mentions.users.first();

    if (!User) {
        return msg.reply(` infelizmente parece que o usuario mencionado não existe nesse servidor!`);
    }

    if (!msg.member.hasPermission("BAN_MEMBERS")) {
        return msg.reply(` infelizmente você não tem o poder necessário para realizar essa tarefa!`);
    }

    return msg.guild.members.ban(User)
        .then(() => msg.reply(` ${User} foi ejetado do servidor naquele jeito! kkkkkkkkkk Pokas!`))
        .catch(error => msg.reply(` vish! Algo de errado aconteceu e não consegui mandar ${User} embora! Parece até magia!`));
};

module.exports = {
    name: 'ban',
    help: 'Esse comando irá Banir um membro de um canal!',
    execute
};