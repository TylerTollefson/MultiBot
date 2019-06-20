exports.run = (client, message, args) => {
    let command = args[0];
    let validCommands = ["add","show","clear","change", "name", "help"];
    let raidDB = client.raid;
    raidDB.defer.then( () => {
        console.log(raidDB.size + " keys loaded");
        dbReady = true;

        if (command === "help") {
            let commandFile = require('./raidhelp.js');
            commandFile.run(client, message);
        } else if (command === "name") {
            message.channel.send("Warning: If you have already named the raid, it will now be reset.");
            nameRaid(raidDB, message, args[1], args[2], args[3])
        } else if (command !== "name" && !(raidDB.has("name"))){
            message.channel.send("Please name your raid before trying to modify it.");
        } else {
            if (!(validCommands.includes(command))) {
                message.channel.send("Please enter a valid command.");
            } else {
                //eat the create command
                if (command === "add") {
                    addEntry(raidDB, message, args[1]);
                } else if (command === "show") {
                    dbReturn(raidDB, client, message);
                } else if (command === "clear") {
                    dbClear(raidDB, message);
                } else if (command === "change") {
                    dbChange(raidDB, message, args[1], args[2]);
                }
            }
        }
    });
};

function nameRaid(db, message, name, time, timezone){
    let raidNameString = name + " " + time + " " + timezone;
    message.channel.send("Raid has been named to: " + raidNameString);
    db.set("name", raidNameString);
}

function addEntry(db, message, dataValue){
    message.channel.send("Added player " + dataValue + " to the raid roster.");
    db.set(db.autonum, dataValue);
}

function dbReturn(db, client, message){
    if (db.size === 1){
        message.channel.send("There are no players currently set up to raid.");
    } else {
        let returnArray = db.fetchEverything().array();
        let raidTeamString = "";
        for (let i = 1; i < returnArray.length; i++){
            raidTeamString += i +". " + returnArray[i] + "\n";
        }

        let embed = {
            color:0x66ffff,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: "Raid team for " + returnArray[0],
            description: raidTeamString

        };

        message.channel.send({embed});
    }
}

function dbClear(db, message){
    message.channel.send("Cleared the raid.");
    db.deleteAll();
}

function dbChange(db, message, key, newVal){
    db.set(key, newVal);
    message.channel.send("The entry in the raid has changed to: " + newVal);
}