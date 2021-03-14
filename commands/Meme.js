const Discord = require('discord.js')
const Ksoft = require('@ksoft/api')

const execute = async (bot, msg, args) => {
    const meme = await bot.Ksoft.images.meme();

    if (meme.url == undefined) {
        msg.delete();
        msg.channel.send(`Um erro inesperado aconteceu! Puts, e o pior é que eu não consigo resolve-lo... Tente novamente.`)
    }
    const embed = new Discord.MessageEmbed()
			.setTitle(`${msg.translate(settings.Language, 'FUN/MEME_TITLE')} /${meme.post.subreddit}`)
			.setColor(16333359)
			.setURL(meme.post.link)
            .addField("https://github.com/Spiderjockey02/Discord-Bot/blob/master/src/commands/Fun/meme.js", "https://github.com/Spiderjockey02/Discord-Bot/blob/master/src/config.example.js")
			.setImage(meme.url)
			.setFooter(`👍 ${meme.post.upvotes}   👎 ${meme.post.downvotes} | ${msg.translate(settings.Language, 'FUN/MEME_FOOTER')} KSOFT.API`);
		msg.channel.send(embed);


}

module.exports = {
    name: 'meme',
    help: 'Mostrará um meme em uma embed',
    execute

}