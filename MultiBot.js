const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
client.login(config.token);

client.on('ready', () => {
  console.log('I am ready!');
});

function makeKeywords(){
  var k_array = [];
  for (var i in config.keywords) {
    if (config.keywords.hasOwnProperty(i)) {
        k_array.push(config.keywords[i]);
    }
  }
  return k_array;
}

client.on('message', message =>
{
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  let command = message.content.split(' ')[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(' ').slice(1);
  try {
    let k_word = makeKeywords();
    if (k_word.indexOf(command) !== -1) {
      let commandFile = require('./commands/'+command+'.js');
      commandFile.run(client, message, args, Discord);
    }
  } catch(err){
    console.log(err);
  }

});
