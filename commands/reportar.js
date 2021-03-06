// Puxando informações sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando de report!
const execute = (bot,msg,args) => {
    let argsresult
    const mChannel = msg.mentions.channels.first()

    let erros = new Discord.MessageEmbed()
    .setAuthor("Isabelly Notice - Erro", msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .setDescription(`${msg.author.username}, não consigo enviar mensagem para você, ative suas mensagens diretas!`)
    .setTimestamp()
    .setThumbnail(msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .setFooter(msg.author.tag)
    .setColor('RANDOM')

    let denuncia = new Discord.MessageEmbed()
    .setAuthor(`Sistema de Reportes - Isabelly`, bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .setThumbnail("https://media1.tenor.com/images/458ea2a02a16dd754cfa70167200d232/tenor.gif?itemid=4674818")
    .setTitle(`${msg.author.username}, confirme sua denuncia abaixo...`)
    .setDescription(`A mensagem acima, dita por mim, compreende a sua denúncia e para finalizarmos o processo de aviso é preciso que seja clicado no icone 🟡 abaixo! Feito isso, automaticamente será enviada uma mensagem datalhada para meu criador sobre o problema relatado. Caso tenha ainda alguma dúvida contate : *henriquepedro709@yahoo.com*.`)
    .setFooter(`Obrigada por sua confiança! Isabelly © Rv1.6`)

    msg.delete()

    if (mChannel) {
        argsresult = args.slice(1).join(' ')
        mChannel.author.send("⏳*Mensagem sob argumento de reporte:⏳* \n" + "`" + argsresult + "`\n" + "⌛*Fim da mensagem*⌛").catch(err => msg.channel.send(erros))
        mChannel.author.send(denuncia)
      } else {
        argsresult = args.join(' ')
        msg.author.send("⏳*Mensagem sob argumento de reporte:⏳* \n" + "`" + argsresult + "`\n" + "⌛*Fim da mensagem*⌛").catch(err => msg.channel.send(erros))
        msg.author.send(denuncia).then(msg1 => {
            msg1.react("🟡")
        });
    }
    console.log()
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ÁREA DE REPORTES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    console.log("=======================================++=======================================")
    console.log(argsresult)
    console.log("=======================================++=======================================")
    console.log()
}

// As informações abaixo compreendem name, help e a parte de execução
// Informações do comando!
module.exports ={
    name: "reportar",
    help: "Faz com que uma mensagem seja enviada no privado de um usuario fazendo com que ele possa reportar o problema!",
    execute,
}