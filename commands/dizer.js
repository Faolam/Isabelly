// Puxando informações sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando de repetição!
const execute = (bot,msg,args) => {
    if (!msg.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR'])) { return msg.channel.send(`${msg.author.username}, infelizmente você não tem permissão para executar esse comando. 😖`) }

    let argsresult
    const mChannel = msg.mentions.channels.first()

    msg.delete()
    if (mChannel) {
      argsresult = args.slice(1).join(' ')
      mChannel.send(argsresult)
    } else {
      argsresult = args.join(' ')
      msg.channel.send(argsresult)
    }
}

// As informações abaixo compreendem name, help e a parte de execução
// Informações do comando!
module.exports ={
    name: "diga",
    help: "Faz o Bot repetir a msg anterior!",
    execute,
}