// Início ao comando ajuda Barra onde serão apresentadas as informações do discord
const Discord = require('discord.js');


// Início ao desenvolvimento do comando ajuda!
const execute = (bot,msg,args) => {
        let embed = new Discord.MessageEmbed()
    
        .setTimestamp()
        .setThumbnail("https://3.bp.blogspot.com/-jDRjJx7Vb-E/UkzKaHIXFLI/AAAAAAAAN6w/-48_p_uAtPI/s1600/gif+%252837%2529.gif")
        .setTitle(`Salve ${msg.author.username}! Meu nome é Isabelly! \nNeste campo te apresento minhas funções!`)
        .setColor("#e2fd16")
        .setDescription(`⚙️ Lembre-se que meu prefixo é :"=" ⚙️`)
        .addField(`💡 =r <número de mensagens>`, "Nesse comando faço a remoção das mensagens de um chat. \n| Número mínimo 2 | - | Número máximo 100 |", true)
        .addField(`💡 =sinfo`, "Nesse comando apresento informações sobre este servidor!", true)
        .addField(`💡 =uinfo ou =uinfo <@Usuário>`, "Nesse comando apresento informações sobre um determinado usuário ou de você mesmo!", true)
        .addField(`💡 =minfo`, "Aqui apresento informações sobre os comandos de música!", true)
        .addField(`💡 =Isabelly`, "Aqui apresento algumas informações sobre mim!", true)
        .addField(`💡 =pergunta <Sua pergunta!>`, "Aqui te darei a resposta para todas as suas perguntas!", true)
        .addField(`💡 =tempo <Nome da cidade>`, "Aqui apresento algumas informações sobre o clima da cidade inserida!", true)
        .addField(`💡 =avatar <@Usuário>`, "Mostra o avatar do Usuário mencionado!", true)
        .addField(`💡 =reportar <problema>`, "Aqui você fará um report sobre um problema que por ventura eu possa ter!", true)
        .addField(`💡 =lives`, "Aqui mostrarei as lives do pessoal da comunidade!", true)
        .setFooter(`@${msg.author.username}, os comandos que você desejar utilizar precisam ser semelhantes aos que foram expostos acima!`);
    
        msg.channel.send(embed);
}


// Aba para o module exports. Informações.
module.exports ={
    name: "ajuda",
    help: "Mostra a ajuda para o usuário!",
    execute,
}