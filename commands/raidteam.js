const config = require('../config.json');
exports.run = (client, message, args) => {
    let command = args[0];
    if (command === "add"){
        addEntry(client, args[1], args[2]);
    } else if (command === "show") {
        dbReturn(client, message);
    } else if (command === "clear"){
        dbClear(client, message);
    }


};

function addEntry(client, id, dataValue){
    client.testdb.defer.then( () => {
        console.log(client.testdb.size + " keys loaded");
        client.testdb.set(id, dataValue);
    });

}

function dbReturn(client, message){


    client.testdb.defer.then( () => {
        if (client.testdb.size === 0){
            message.channel.send("There are no teams currently set up.");
        } else {
            console.log(client.testdb.size + " keys loaded");
            let returnArray = client.testdb.fetchEverything().array();
            let raidTeamString = "";
            for (const names of returnArray){
                raidTeamString += names + "\n";
            }

            let embed = {
                color:0x66ffff,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "Raid team for LW at 6:00pm",
                description: raidTeamString

            };

            message.channel.send({embed});
        }
    });

}

function dbClear(client, message){
    client.testdb.defer.then( () => {
        message.channel.send("Cleared the raid team.");
        client.testdb.deleteAll();
    });

}