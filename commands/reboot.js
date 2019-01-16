const config = require('../config.json');
exports.run = (client, message, args) => {
  let roleAdmin = "534925225654091787";
  if (message.member.roles.has(roleAdmin)){
    message.channel.send("Rebooting...")
    .then(msg => client.destroy())
    .then(() => client.login(config.token));
    message.channel.send("Back online!");
  } else {
    message.channel.send("You do not have sufficient permissions to do this!");
  }

}
