exports.run = (client, message, args) => {
  message.author.send('Hello my name is MultiBot! Here are the commands you can use:\n\n'+
'```'+
'!help : Lists the different commands MBot can do\n\n' +
'!prefix [new prefix] : Changes the default command prefix\n\n'+
'!reboot : Restarts MBot in case of any weird errors or if it becomes unresponsive (Admin required).\n\n'+
'!giphyr [search term] : Searches for a random gif with the search term specified.'+
'```\n\n'+
'If you require more assistance message **Robo#8347** (Robo), my creator!');
}
