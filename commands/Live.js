// Puxando informaΓ§Γ΅es sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando lives
const execute = (bot,msg,args) => {
    let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setTitle(`${msg.author.username}, temos aqui os links das lives do pessoal da comunidade!`)
    .setColor("#1f9b02")
    .setDescription(`π£ LIVES π£`)
    .addField(`π Live do Theuzznn π`, `https://www.twitch.tv/theuzznn`, true)
    .addField(`π Live do Frx π`, `https://www.twitch.tv/frxfps_`, true)
    .addField(`π Live da Lorena π`, `https://www.twitch.tv/lorecristine`, true)
    .addField(`π Live do FenixRXP π`, `https://www.twitch.tv/fenixrxp`, true)
    .addField(`π Live do Vaca π`, `https://www.twitch.tv/vacasuperior`, true)
    .addField(`π Live do Salopaxz π`, `https://www.twitch.tv/salopaxz`, true)
    .addField(`π Live do Frogman1 π`, `https://www.twitch.tv/frogman1`, true)

    msg.channel.send(embed);
}


// InformaΓ§Γ΅es do comando!
module.exports ={
    name: "lives",
    help: "Mostra as lives da comunidade!",
    execute,
}