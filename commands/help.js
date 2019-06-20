exports.run = (client, message) => {
  message.author.send('Hello my name is MultiBot! Here are the commands you can use:\n'+
'```'+
'!help : Lists the different commands MBot can do\n\n' +
'!prefix [new prefix] : Changes the default command prefix\n\n'+
'!reboot : Restarts MBot in case of any weird errors or if it becomes unresponsive (Admin required).\n\n'+
'!raid [various commands] : To learn more about the raid command !raid help'+
'```\n'+
'If you require assistance message **Robo#8347** (Robo), my creator!');
};
