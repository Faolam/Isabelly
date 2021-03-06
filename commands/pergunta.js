var fortunes = [
    "Sim",
    "Não",
    "Talvez",
    "Eu não sei...",
    "Quem sabe?",
    "Isso é um mistério",
    "Não posso te contar",
    "Meu informante disse que não",
    "Provavelmente",
    "Me pergunte mais tarde que talvez terei uma resposta! kkkkkk",
    "Claro que não!",
    "Discordo",
    "Dúvido muito",
    "Discordo nesse momento. Talvez mude de ideia algum dia.",
    "Claro que sim!! Onde assino?",
    "Não entendi direito o que você quis dizer... Pode tentar denovo?",
    "Claro que sim!",
    "Pergunte a outra pessoa, isso eu não posso responder!",
    "Juro que se soubesse do que você está falando, ajudaria nessa pergunta.",
    "Positivo.",
    "Negativo",
    "Of course!",
    "Exato. Concordo!",
    "Sei não... Estou em duvida.",
    "humm... \nAcho que sim...",
    "humm... \nAcho que não...",
    "kkkkkkkkkkkkkkkk sim!",
    "kkkkkkkkkkkkkkkk não vou falar é nada!",
];
  
const execute = (bot, msg, args) => {
  
    if(!args[0]){
      return msg.channel.send(":x: " + "| Por favor insira uma pergunta!")
    }
    if (args[0]) msg.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
    else msg.channel.send(":x: " + "| Não foi possível ler sua pergunta! :(");
  
};
  
  
module.exports = {
    name : "pergunta",
    help: "Te da resposta para suas perguntas!",
    execute,

};