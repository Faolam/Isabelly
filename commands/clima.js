var weather = require("weather-js"); //Criando uma variavel tempo para puchar informações sobre o clima
const Discord = require('discord.js') //Pegando informações do Discord


// Dando início a captação de informações sobre o tempo!
const execute = (bot, msg, args) => {
    weather.find({
        search: args,
        degreeType: 'C'
    }, function (err, result) {
        if (err) console.log(err);
        //console.log(JSON.stringify(result, null, 2));
        if (!result) return msg.channel.send(`É necessário o nome da cidade!`)
        if (!result[0]) return msg.channel.send(`Essa cidade não existe!`)
        const embed = new Discord.MessageEmbed()
            .setAuthor(`Clima by Isabelly`, 'https://i.pinimg.com/originals/44/56/24/445624df69914749cf4fa7295fb50e7f.gif')
            .setTitle(`**Tempo em ${result[0].location.name}**`)
            .addField(`**Temperatura:**`, `${result[0].current.temperature}°C`)
            .addField(`**Sensação Térmica:**`, `${result[0].current.feelslike}°C`)
            .addField(`**Umidade:**`, `${result[0].current.humidity}%`)
            .addField(`**Vento:**`, `${result[0].current.windspeed}`)
            .setColor("RANDOM")
            .setThumbnail(result[0].current.imageUrl)
            .setTimestamp()
        msg.channel.send(embed)

    });
};


// Considerações finais e execução do comando!
module.exports = {
    name: `tempo`,
    description: `Verifica o clima/tempo de uma cidade. Qualquer cidade.`,
    execute,
};