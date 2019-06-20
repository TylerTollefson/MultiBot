exports.run = (client, message) => {
    message.author.send('Welcome to the raid command guide, here are some of the subcommands you can use:\n'+
        '```'+
        '!raid name [raid name] [time] [time zone] : Names the current raid to the specified parameters. ' +
        'If you already have a raid set up this will overwrite the last raid name.\n\n' +
        '!raid add [Player name] : This command will add the specified player to the raid roster \n\n'+
        '!raid change [player # on the roster] [new player] : Changes the player at the specified spot to a new player.\n\n'+
        '!raid show : Displays the current raid roster along with the raid time.\n\n'+
        '!raid clear : This clears all people and the title from the raid, use this before creating a new one.\n\n'+
        '```\n'+
        'If you require assistance message **Robo#8347** (Robo), my creator!');
};
