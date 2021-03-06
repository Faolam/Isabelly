// Puxando informações sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando avatar
const execute = (bot,msg,args) => {
    let user = msg.mentions.users.first() || message.author
      const embed = new Discord.MessageEmbed()
            .setTitle(`🖼️ ${user.tag}`)
            .setDescription(`Avatar de ${user}`)
            .setImage(user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
            .setColor('RANDOM')
    msg.channel.send(embed)
}


// Informações do comando!
module.exports ={
    name: "avatar",
    help: "Mostra o avatar de um usuário.",
    execute,
}