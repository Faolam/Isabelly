// Puxando informações sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando sinfo
const execute = (bot,msg,args) => {
    let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setTitle(`${msg.author.username}, segue ai informações sobre o servidor!`)
    .setColor("#1f9b02")
    .setDescription(`⚙️ Algumas informações do servidor!! ⚙️`)
    .addField(`👻 O nome deste servidor é`, msg.guild.name, true)
    .addField(`👻 O número de membros é`, msg.guild.memberCount, true)
    .addField(`👻 O server foi criado em`, msg.guild.createdAt, true)
    .addField(`👻 O server foi criado no país`, msg.guild.region, true)
    .addField(`👻 ID deste servidor é`, msg.guild.id, true)
    .addField(`👻 O fundador deste servidor é`, msg.guild.owner, true)
    .addField(`👻 Você entrou aqui em`, msg.member.joinedAt, true)

    msg.channel.send(embed);
}


// Informações do comando!
module.exports ={
    name: "sinfo",
    help: "Mostra as informações do servidor ao qual o bot está!",
    execute,
}