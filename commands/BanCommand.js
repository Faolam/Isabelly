const Discord = require('discord.js');


const execute = (bot, msg, args) => {
    const User = msg.mentions.users.first();

    if (!User) {
        return msg.reply(` você não mencionou ninguém para Banir! kkkk`);
    }

    if (!msg.member.hasPermission("BAN_MEMBERS")) {
        return msg.reply(` infelizmente você não tem o poder necessário para realizar essa tarefa!`);
    }

    if (User) {
        const member = msg.guild.member(User);

        if (member) {
            member
                .ban('Reação kkkkkkkkk')
                .then(() => msg.reply(` ${User} foi ejetado do servidor naquele jeito! kkkkkkkkkk Pokas!`))
                .catch(err => {
                    msg.reply(` vish! Algo de errado aconteceu e não consegui mandar ${User} embora! Parece até magia!`);
                    console.error(err)
                });
        } else {
            msg.reply(` você está ultilizando esse comando e não sabe se o usuário mencionado está ou não nesse servidor. Verifica direito ai, por que aqui me parece que ${User} não está no servidor! Mais atenção!`)
        }
    }
};

module.exports = {
    name: 'ban',
    help: 'Esse comando irá Banir um membro de um canal!',
    execute
};