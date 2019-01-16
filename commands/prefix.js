const fs = require('fs');
const config = require('../config.json');
exports.run = (client, message, args) => {
  let roleAdmin = "534925225654091787";
  if (message.member.roles.has(roleAdmin)){
    let newPrefix = args[0];
    config.prefix = newPrefix;
    fs.writeFile("../config.json", JSON.stringify(config));
    message.channel.send("Prefix changed to ["+newPrefix+"]");
  } else {
    message.channel.send("Insufficient permissions.");
  }
}
