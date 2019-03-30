const Discord = require("discord.js");
const axios = require("axios");
const client = new Discord.Client();
const config = require("./auth.json");


const db = require('./database/db.js')
const services = require('./gw2Services/services.js')
const registration = require('./actions/registration.js')
const session = require('./actions/sessions.js')
const dm = require('./actions/dm-all-users.js')


client.login(config.token)

client.on("ready", () => {
    console.log("Bot online!");
});


client.on("guildMemberAdd", member => {
    member.user.send(
      "This is the WvW Community discord." +
        "If you're having any issues please message an admin in discord" +
        "\n\n\n" +
        "To gain full access to all voice and text channels, you will need to verify. Type the following, replacing the #### string with your own API key. \n" +
        "!api #######-####-####-####-####################-####-####-####-############ \n" +

        "To access or generate API keys, please visit <https://account.arena.net/applications> and generate a key with the progression flag. \n" +
        "Please do not delete the API key used to verify. You will lose access to the WvW bot."
    );
  });


client.on("message", async (message) => {
    if (message.content.startsWith("test")) {
        message.channel.send("chris is a shithead")
    }

    if (message.content.startsWith("!api")) {
        registration.register(message, client);
    }

    if (message.content.startsWith("!kills")) {
        session.sessionShower(message, client);
    }

    if (message.content.startsWith("!dm")) {
        dm.dm(message, client);
    }
})



