import axios from 'axios'

const tier1Api = "https://api.guildwars2.com/v2/wvw/matches/1-1";
const tier2Api = "https://api.guildwars2.com/v2/wvw/matches/1-2";
const tier3Api = "https://api.guildwars2.com/v2/wvw/matches/1-3";
const tier4Api = "https://api.guildwars2.com/v2/wvw/matches/1-4";


const tier1ChannelId = "396597006593687553";
const tier2ChannelId = "396597023794659331";
const tier3ChannelId = "396597041536565248";
const tier4ChannelId = "396597060247224320";

export default {

    matchUp: async (message,client) => {
        if(client.channelID === tier1ChannelId) {
            let response = await axios(tier1Api);

            message.channel.send("Green score: " + response.data.scores.green + "\n" +
                "Blue score: " + response.data.scores.blue + "\n" +
                "Red score: " + response.data.scores.red + "\n" +
                "Green kills: " + response.data.kills.green + "\n" +
                "Blue kills: " + response.data.kills.blue + "\n" +
                "Red kills: " + response.data.kills.red + "\n" +
                "Green deaths: " + response.data.deaths.green + "\n" +
                "Blue deaths: " + response.data.kills.blue + "\n" +
                "Red deaths: " + response.data.kills.red + "\n");
        }else if(client.channelID === tier2ChannelId){
            let response = await axios(tier2Api);

            message.channel.send("Green score: " + response.data.scores.green + "\n" +
                "Blue score: " + response.data.scores.blue + "\n" +
                "Red score: " + response.data.scores.red + "\n" +
                "Green kills: " + response.data.kills.green + "\n" +
                "Blue kills: " + response.data.kills.blue + "\n" +
                "Red kills: " + response.data.kills.red + "\n" +
                "Green deaths: " + response.data.deaths.green + "\n" +
                "Blue deaths: " + response.data.kills.blue + "\n" +
                "Red deaths: " + response.data.kills.red + "\n");
        }else if(client.channelID === tier3ChannelId){
            let response = await axios(tier3Api);

            message.channel.send("Green score: " + response.data.scores.green + "\n" +
                "Blue score: " + response.data.scores.blue + "\n" +
                "Red score: " + response.data.scores.red + "\n" +
                "Green kills: " + response.data.kills.green + "\n" +
                "Blue kills: " + response.data.kills.blue + "\n" +
                "Red kills: " + response.data.kills.red + "\n" +
                "Green deaths: " + response.data.deaths.green + "\n" +
                "Blue deaths: " + response.data.kills.blue + "\n" +
                "Red deaths: " + response.data.kills.red + "\n");
        }else if(client.channelID === tier4ChannelId){
            let response = await axios(tier4Api);

            message.channel.send("Green score: " + response.data.scores.green + "\n" +
                "Blue score: " + response.data.scores.blue + "\n" +
                "Red score: " + response.data.scores.red + "\n" +
                "Green kills: " + response.data.kills.green + "\n" +
                "Blue kills: " + response.data.kills.blue + "\n" +
                "Red kills: " + response.data.kills.red + "\n" +
                "Green deaths: " + response.data.deaths.green + "\n" +
                "Blue deaths: " + response.data.kills.blue + "\n" +
                "Red deaths: " + response.data.kills.red + "\n");
        }else{
            message.channel.send("This only works in match up channels.")
        }
    }

};