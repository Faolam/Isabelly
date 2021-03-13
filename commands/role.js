const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
    const Gold = bot.emojis.cache.get("809479417024872521")
    const Diamond = bot.emojis.cache.get("809479541067743312")
    const DiscordA = bot.emojis.cache.get("809479516825059358")
    const Iron = bot.emojis.cache.get("809479496289091635")
    const Dev = bot.emojis.cache.get("820289453586382879")
  if (args.length === 0) {
    const embed = new MessageEmbed();
    embed.setTitle(`Cargos de Testing My Robots`);
    embed.setDescription("Este ambiante o ajudará a encontrar suas areas preferidas. Lembre-se que, escolhida uma, não haverá volta!");
    embed.setAuthor(`Isabelly - Sistema de Cargos`,bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}));
    embed.setThumbnail(`https://cdn.discordapp.com/icons/${msg.guild.id}/${msg.guild.icon}.png`)
    embed.addFields([
      { name: "Acesso total a Áreas Recreativas, Mover membros e Alterar Apelidos!", value: Gold, inline: true },
      { name: "Acesso total a Áreas Recreativas, Silenciar membros e Voz Prioritária.", value: Diamond, inline: true },
      { name: "Acesso total a Áreas Recreativas, Acesso a Área de Manutenção e Mover Membros.", value: DiscordA, inline: true },
      { name: "Acesso total a Áreas Recreativas, Acesso a Área dos Robôs e Alterar Apelidos.", value: Iron, inline: true },
      { name: "Acesso total a Áreas Recreativas, a Área de desenvolvedores e Área dos Robôs.", value: Dev, inline: true },
    ]);
    msg.channel.send({ embed }).then(async (embed) => {
      try {
        await embed.react(`${Gold}`);
        await embed.react(`${Diamond}`);
        await embed.react(`${DiscordA}`);
        await embed.react(`${Iron}`);
        await embed.react(`${Dev}`);
        const collector = embed.createReactionCollector(
          (reaction, user) =>
            [`${Gold}`, `${Diamond}`, `${DiscordA}`, `${Iron}`, `${Dev}`].includes(reaction.emoji.name) &&
            !user.bot,
          {
            time: 500000,
          }
        );
        collector.on("collect", (reaction, user) => {
          let role;
          switch (reaction.emoji.name) {
            case `${Gold}`:
              role = msg.guild.roles.cache.find((r) => r.name === "Gold_Active");
              if (role) msg.member.roles.add(role);
              else console.error("Cargo não encontrado");
              break;
            case `${Diamond}`:
              role = msg.guild.roles.cache.find((r) => r.name === "Diamond_Active");
              if (role) msg.member.roles.add(role);
              else console.error("Cargo não encontrado");
              break;
            case `${DiscordA}`:
              role = msg.guild.roles.cache.find((r) => r.name === "Discord_Advanced");
              if (role) msg.member.roles.add(role);
              else console.error("Cargo não encontrado");
              break;
            case `${Iron}`:
              role = msg.guild.roles.cache.find((r) => r.name === "Iron_Active");
              if (role) msg.member.roles.add(role);
              else console.error("Cargo não encontrado");
              break;
            case `${Dev}`:
              role = msg.guild.roles.cache.find((r) => r.name === "Developer_Member");
              if (role) msg.member.roles.add(role);
              else console.error("Cargo não encontrado");
              break;
          }
        });
      } catch (e) {
        console.error(e);
      }
    });
  } else {
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
  }
};

module.exports = {
  name: "c",
  help: "Atribui cargos a um usuário",
  execute,
};