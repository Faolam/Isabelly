// Passando as requisições para que o Bot funcione!
const Discord = require('discord.js'); // Passando que variavel é Discord
const bot = new Discord.Client(); // Passando que o nome que se refere a Isabelly é bot
const dotenv = require("dotenv"); // Biblioteca para facilitar o desenvolvimento
const fs = require("fs"); // Outra biblioteca para facilitar o desenvolvimento
const path = require("path"); // Puxando variáveis do path.

// tentando arrumar no heroku
const express = require('express');
const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`App is running on port ${ PORT }`);
});


// Puxar informações do arquivo env.
dotenv.config(); // Trazendo a Central de configurações do dotenv


// Trazer informações das pasta commands
bot.commands = new Discord.Collection();
const commandFiles = fs
    .readdirSync(path.join(__dirname,"./commands"))
    .filter((filename) => filename.endsWith(".js"));

for (var filename of commandFiles) {
    const command = require(`./commands/${filename}`);
    bot.commands.set(command.name, command);
};


// Aba para as requisições de música
bot.queues = new Map();


// Quando no terminal for digitado *node .* essas mensagens serão exibidas.
bot.once('ready', () => {
    console.log('==================================@@@@@==================================');
    console.log('=============== Estou Pronta Para Ser Usada! Bot:Isabelly ===============');
    console.log('==================================@@@@@==================================');
    let atividade_do_bot = [
        `❓ Encontrou algum problema? Reporte em "=reportar <problema>"! ❓`,
        `🦝 Atualização v18.9 © Isabelly 🦝`,
        `🧐 f(x)et agradeço a você! Update!! 🧐`,
        `🔴 =ajuda 🔴`,
        `💰 Sendo util para ${bot.guilds.cache.size} servidores! 💰`,
    ],
    i = 0;
    setInterval(() => bot.user.setActivity(`${atividade_do_bot[i++ % atividade_do_bot.length]}`, {
        type: "WATCHING"
    }), 5000);
        bot.user
            .setStatus("online")
            .catch(console.log);
});



// Criando evento mensagem, onde o bot se nn reconhecer o comando responderá de uma outra forma.
bot.on("message", (msg) => {
    if (!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;

    const args = msg.content.slice(process.env.PREFIX.length).split(" ");
    const command = args.shift().toLowerCase();

    try {
        bot.commands.get(command).execute(bot,msg,args);
    } catch(e) {
        return msg.channel.send(`${msg.author.username}, não reconheço esse comando ai... Acho que você achará oque precisa em "=ajuda"`);
    }
});

// Colocando a Isabelly para rodar!
bot.login(process.env.TOKEN);