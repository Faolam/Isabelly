// Puxando informações sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando lives
const execute = (bot,msg,args) => {
    let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setTitle(`${msg.author.username}, temos aqui os links das lives do pessoal da comunidade!`)
    .setColor("#1f9b02")
    .setDescription(`🟣 LIVES 🟣`)
    .addField(`📕 Live do Theuzznn 📕`, `https://www.twitch.tv/theuzznn`, true)
    .addField(`📗 Live do Frx 📗`, `https://www.twitch.tv/frxfps_`, true)
    .addField(`📘 Live da Lorena 📘`, `https://www.twitch.tv/lorecristine`, true)
    .addField(`📙 Live do FenixRXP 📙`, `https://www.twitch.tv/fenixrxp`, true)
    .addField(`📔 Live do Vaca 📔`, `https://www.twitch.tv/vacasuperior`, true)
    .addField(`📒 Live do Salopaxz 📒`, `https://www.twitch.tv/salopaxz`, true)
    .addField(`📓 Live do Frogman1 📓`, `https://www.twitch.tv/frogman1`, true)

    msg.channel.send(embed);
}


// Informações do comando!
module.exports ={
    name: "lives",
    help: "Mostra as lives da comunidade!",
    execute,
}