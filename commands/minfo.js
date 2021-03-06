// Puxando informações sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando minfo
const execute = (bot,msg,args) => {
    let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setThumbnail('https://3.bp.blogspot.com/-_s7nl8btUCc/VqpBvrrYgzI/AAAAAAAAA20/yj-hdyzX8Zw/s1600/tumblr_m7h208DLRB1rvi1zto1_500_large.gif')
    .setTitle(`${msg.author.username}, segue ai informações sobre o comando de música!!`)
    .setColor("#0223d6")
    .setDescription(`🔊 Algumas informações do comando de música da Isabelly!! 🔊`)
    .addField(`🔔 =p <nome da música> ou <link da música>`, `Começa a reproduzir a música solicitada!`, true)
    .addField(`🔔 =skip`, `Pula a reprodução da música atual!`, true)
    .addField(`🔔 =pause`, `Pausa a música atual!`, true)
    .addField(`🔔 =resume`, `Volta a reprodução das músicas!`, true)
    .addField(`🔔 =stop`, `Para a reprodução de todas as músicas!`, true)

    msg.channel.send(embed);
}

// As informações abaixo compreendem name, help e a parte de execução
// Informações do comando!
module.exports ={
    name: "minfo",
    help: "Mostra as informações do comando MÚSICA!",
    execute,
}