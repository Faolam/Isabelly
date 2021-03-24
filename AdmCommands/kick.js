const Discord = require('discord.js') // trazendo biblioteca do discord!

// comando de kick!!!!
module.exports = (bot) => {
    bot.on('message', (msg) => {
        if (!msg.guild) return;

        if (msg.author.bot) return;

        if (!msg.guild.member(msg.author).hasPermission('KICK_MEMBERS')) return;

        if (msg.content.startsWith('Isabelly expulse')) {
            const Usuario_Expulso = msg.mentions.users.first();

            if (!Usuario_Expulso) {
                return msg.channel.send(`${msg.author.username}, meu Deus!! Esse comando está em escala "ADMINISTRATOR" e você não consegue marcar o usuário a ser removido... Preste mais atenção!`)
            }

            if (Usuario_Expulso) {
                const membro = msg.guild.member(Usuario_Expulso)
                if (!membro) {
                    msg.channel.send(`${msg.author.username}, o usuário ${Usuario_Expulso} não pertence a esse servidor!!`)
                }
                if (membro) {
                    membro
                        .kick(`${Usuario_Expulso} foi expulso`)
                        .then(() => {
                            msg.reply(` sucesso ao expulsar "*${Usuario_Expulso.tag}*" do servidor!`)
                        })
                        .catch(err => {
                            msg.reply(` eu não posso remover o usuário mencionado! Verifique minhas permissões e cargos!`);
                            console.error(err)
                        })
                }
            }
                
        }
    })
}