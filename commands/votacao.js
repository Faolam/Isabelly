const Discord = require("discord.js");

const execute = async (bot, message, args) =>{

   message.delete().catch(O_o=>{});
   
    if(!message.member.hasPermission('MANAGE_GUILD'))
      return message.reply("você não tem permissão!").then(msg => msg.delete(6000));
    
    const comousar = new Discord.MessageEmbed()
      .setAuthor("Isabelly", bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
      .setTitle(`${process.env.PREFIX}votar`)
      .setDescription(`Irá abrir uma votação no canal que a mensagem foi executada.`)
      .setColor("#22a7cc")
      .setFooter("© Isabelly - Sistema de votação.")
      .addField("Como usar:", `\`${process.env.PREFIX}votar <mensagem da votação>\``)
      .addField("Permissão:", "O staff que for usar o comando tem que esta em um cargo com a permissão `Gerenciar servidor`")
   
    let mensg = args.join(" ");
    if(!mensg)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
   
    const vote = new Discord.MessageEmbed()
        .setAuthor('Sistema de Votação', "https://i.pinimg.com/474x/7f/53/82/7f538287e88a7213658c3272b321d0a9.jpg", "https://www.politize.com.br/voto-o-que-e/")
        .setTitle("Votação")
        .setDescription(`\n\n${mensg}`)
        .setColor("#00ffa8")
        .setFooter(`© Isabelly Votação`)

    const categoria = new Discord.MessageEmbed()
        .setTitle("Escolha uma categoria...")
        .setDescription("\n\n**😆 Reaction**\n` Faces:` 😃 🤔 😡\n\n**👍 Like**\n`Hands:` 👍 👎 ❓")
        .setColor("#00ffa8")
        .setFooter(`Por: ${message.author.tag}`)
    message.channel.send(categoria).then(msg=> {
        msg.react("😆").then(r => {
            msg.react("👍")
        
            const num = (reaction, user) => reaction.emoji.name === '😆' && user.id === message.author.id;
            const like = (reaction, user) => reaction.emoji.name === '👍' && user.id === message.author.id;

            const numl = msg.createReactionCollector(num, { time: 60000 });
            const likel = msg.createReactionCollector(like, { time: 60000 });

            numl.on('collect', r=> {
                msg.delete();
                message.channel.send(vote).then(msg1=> {
                    msg1.react("😃").then(r => {
                        msg1.react("🤔")
                        msg1.react("😡")
                    })})
            })
            likel.on('collect', r=> {
                msg.delete();
                message.channel.send(vote).then(msg2=> {
                    msg2.react("👍").then(r => {
                        msg2.react("👎")
                        msg2.react("❓")
                    })})
            })
        })
    })
}

module.exports = {
    name: "votar",
    help: "Faz uma espécie de votação!",
    execute,

}