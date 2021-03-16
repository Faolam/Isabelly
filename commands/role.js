const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
  if (args.length === 0) {
    const Grr = bot.emojis.cache.get("821180443457093703")
    msg.channel.send(`${msg.author.username}, você não mencionou a quem quer dar o cargo e nem o cargo que será dado. Não sei deduzir o que você pensa!`).then(reaction => {
      reaction.react(Grr)
    })
  } else {
    msg.delete();
    if (!msg.member.hasPermission("MANAGE_ROLES"))
      return msg.reply("Desculpa, você não pode executar essa ação");
    const [mention, roleArg] = args;
    const member = msg.mentions.members.first();
    if (!member)
      return msg.reply("você precisa mencionar a quem deseja dar o cargo.");
    if (!roleArg) return msg.reply("você precisa escolher um cargo");
    const role = msg.guild.roles.cache.find((r) => r.name === roleArg);
    if (!role) return msg.reply(`não encontrei o cargo \`${roleArg}\``);
    member.roles.add(role);
    msg.channel.send(`__**Sucesso! Alteração de Cargo Efetuada!**__`)
  }
};

module.exports = {
  name: "c",
  help: "Atribui cargos a um usuário",
  execute,
};