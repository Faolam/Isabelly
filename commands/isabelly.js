// Puxando informações sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando isabelly
const execute = (bot,msg,args) => {
    let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor(`2021 © ${bot.user.username}`, "https://media1.giphy.com/media/FIZ1QC610AAhi/giphy.gif")
    .setTitle(`MINHAS INFORMAÇÕES!`)
    .setThumbnail("https://i.gifer.com/fyfK.gif")
    .setDescription(`${msg.author.username}, me chamo Isabelly! Fui criada no intúito de trazer a melhor experiência possível no discord para vocês! Sim, meu criador é o @Pedrão, ele com bastante esforço conseguiu me aprimorar da melhor forma, implementando os melhores comandos a mim. Ele durante todo o processo desejou me ver operante e conseguiu!! Ele realmente se superou e acredito que ainda irei crescer bastante como uma Robô autônoma! Agora um gostinho maior do que posso fazer está em "=ajuda", vai lá pô. Tenho certeza que vai te esclarecer bastante tudo o que posso fazer! Obrigada por se importar comigo! 🥰 `)
    .setColor("#FF4500")
    .setFooter(`Estou contribuindo atualmente para ${bot.guilds.cache.size} servidores!`)

    msg.channel.send(embed);
}


// Informações do comando!
module.exports ={
    name: "Isabelly",
    help: "Apresenta informações sobre a Isabelly.",
    execute,
}