const axios = require('axios');
const tier1Api = "https://api.guildwars2.com/v2/wvw/matches/1-1";
const tier2Api = "https://api.guildwars2.com/v2/wvw/matches/1-2";
const tier3Api = "https://api.guildwars2.com/v2/wvw/matches/1-3";
const tier4Api = "https://api.guildwars2.com/v2/wvw/matches/1-4";


const tier1ChannelId = "396597006593687553";
const tier2ChannelId = "396597023794659331";
const tier3ChannelId = "396597041536565248";
const tier4ChannelId = "396597060247224320";

module.exports =  {

    matchUp: async (message,client) => {
        if(message.channel.id === tier1ChannelId) {
            let response = await axios(tier1Api);
            let getBlue = response.data.worlds.blue;
            let getRed = response.data.worlds.red;
            let getGreen = response.data.worlds.green;

            let blueServer = worldArray.filter(blue => getBlue === blue.id);
            let redServer = worldArray.filter(red => getRed === red.id);
            let greenServer = worldArray.filter(green => getGreen === green.id);

            message.channel.send(greenServer.name + " score: " + response.data.scores.green + "\n" +
                blueServer.name + " score: " + response.data.scores.blue + "\n" +
                redServer.name + " score: " + response.data.scores.red + "\n" +
                greenServer.name + " kills: " + response.data.kills.green + "\n" +
                blueServer.name + " kills: " + response.data.kills.blue + "\n" +
                redServer.name + " kills: " + response.data.kills.red + "\n" +
                greenServer.name + " deaths: " + response.data.deaths.green + "\n" +
                blueServer.name + " deaths: " + response.data.deaths.blue + "\n" +
                blueServer.name + " deaths: " + response.data.deaths.red + "\n");
        }else if(message.channel.id === tier2ChannelId){
            let response = await axios(tier2Api);
            let getBlue = response.data.worlds.blue;
            let getRed = response.data.worlds.red;
            let getGreen = response.data.worlds.green;

            let blueServer = worldArray.filter(blue => getBlue === blue.id);
            let redServer = worldArray.filter(red => getRed === red.id);
            let greenServer = worldArray.filter(green => getGreen === green.id);

            message.channel.send(greenServer.name + " score: " + response.data.scores.green + "\n" +
                blueServer.name + " score: " + response.data.scores.blue + "\n" +
                redServer.name + " score: " + response.data.scores.red + "\n" +
                greenServer.name + " kills: " + response.data.kills.green + "\n" +
                blueServer.name + " kills: " + response.data.kills.blue + "\n" +
                redServer.name + " kills: " + response.data.kills.red + "\n" +
                greenServer.name + " deaths: " + response.data.deaths.green + "\n" +
                blueServer.name + " deaths: " + response.data.deaths.blue + "\n" +
                blueServer.name + " deaths: " + response.data.deaths.red + "\n");

        }else if(message.channel.id === tier3ChannelId){
            let response = await axios(tier3Api);
            let getBlue = response.data.worlds.blue;
            let getRed = response.data.worlds.red;
            let getGreen = response.data.worlds.green;

            let blueServer = worldArray.filter(blue => getBlue === blue.id);
            let redServer = worldArray.filter(red => getRed === red.id);
            let greenServer = worldArray.filter(green => getGreen === green.id);

            message.channel.send(greenServer.name + " score: " + response.data.scores.green + "\n" +
                blueServer.name + " score: " + response.data.scores.blue + "\n" +
                redServer.name + " score: " + response.data.scores.red + "\n" +
                greenServer.name + " kills: " + response.data.kills.green + "\n" +
                blueServer.name + " kills: " + response.data.kills.blue + "\n" +
                redServer.name + " kills: " + response.data.kills.red + "\n" +
                greenServer.name + " deaths: " + response.data.deaths.green + "\n" +
                blueServer.name + " deaths: " + response.data.deaths.blue + "\n" +
                blueServer.name + " deaths: " + response.data.deaths.red + "\n");
        }else if(message.channel.id === tier4ChannelId){
            let response = await axios(tier4Api);
            let getBlue = response.data.worlds.blue;
            let getRed = response.data.worlds.red;
            let getGreen = response.data.worlds.green;

            let blueServer = worldArray.filter(blue => getBlue === blue.id);
            let redServer = worldArray.filter(red => getRed === red.id);
            let greenServer = worldArray.filter(green => getGreen === green.id);

            message.channel.send(greenServer.name + " score: " + response.data.scores.green + "\n" +
                blueServer.name + " score: " + response.data.scores.blue + "\n" +
                redServer.name + " score: " + response.data.scores.red + "\n" +
                greenServer.name + " kills: " + response.data.kills.green + "\n" +
                blueServer.name + " kills: " + response.data.kills.blue + "\n" +
                redServer.name + " kills: " + response.data.kills.red + "\n" +
                greenServer.name + " deaths: " + response.data.deaths.green + "\n" +
                blueServer.name + " deaths: " + response.data.deaths.blue + "\n" +
                blueServer.name + " deaths: " + response.data.deaths.red + "\n");
        }else{
            message.channel.send("This only works in match up channels.")
        }
    }

};