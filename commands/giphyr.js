exports.run = (client, message, args) => {
  let giphy = require('giphy-api')();
  if(args[0] == 'mindblown'){
    const embed = {
        "color": 3551410,
        "image": {
          "url": "https://media.giphy.com/media/Um3ljJl8jrnHy/giphy.gif"
      }
    };
    message.channel.send({ embed });
  } else {
    giphy.random({
        tag: args[0],
        fmt: 'json'
    }, function (err, res) {
          var embed = {
            "color": 3551410,
            "image": {
              "url": res.data.image_url
            }
          };
          message.channel.send({ embed });
    });
  }

}
