console.log('');
console.log('                                  ▄   ');
console.log('  ▄▄▄▄    ▄▄▄   ▄▄ ▄▄▄    ▄▄▄▄  ▄██▄  ');
console.log('▄█   ▀▀ ▄█  ▀█▄  ██  ██  ██▄ ▀   ██   ');
console.log('██      ██   ██  ██  ██  ▄ ▀█▄▄  ██   ');
console.log(' ▀█▄▄▄▀  ▀█▄▄█▀ ▄██▄ ██▄ █▀▄▄█▀  ▀█▄▀ ');
console.log('                                       ');
console.log('                                       ');
console.log('by constvk github');
console.log('                                       ');
console.log('                                       ');
const { Console } = require("console");
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./Config.json");
const delay = ms => new Promise(res => setTimeout(res, ms));

client.on('ready', () => {
  console.log(`[+/+/+] Online => BotDiv, ${client.users.size} => usuários / ${client.guilds.size} => servidores.`);
});

client.on('guildMemberAdd', async member => {
  console.log(`${member.user.tag} entrou no servidor ${member.guild.name}.`);
    member.send(config.Msg)
    .catch(error => console.log(`Error msg => ${member.user.tag}.`));
});

client.on('message', async msg => {
  if (msg.author.id == client.user.id && msg.guild && msg.content.startsWith(`${config.Ativador}`)) {
    console.log(`Ativador => Online => server => ${msg.guild.name}`);
    msg.guild.members.forEach(member => {
      if (member.id != client.user.id && !member.user.bot) {
        member.send(`${config.Mensagem}`)
          .catch(error => {
            console.log(`Usuário ${member.user.tag} => mensagem não enviada! 30s delay.`);
            delay(30000);
          });
        console.log(`Usuário ${member.user.tag} => mensagem.`);
      }
    });
  }
});

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));


client.login(config.TokenACC);

