const axios = require('axios');
const world = require("./worldList");

/*NA match ups*/
const tier1NaApi = "https://api.guildwars2.com/v2/wvw/matches/1-1";
const tier2NaApi = "https://api.guildwars2.com/v2/wvw/matches/1-2";
const tier3NaApi = "https://api.guildwars2.com/v2/wvw/matches/1-3";
const tier4NaApi = "https://api.guildwars2.com/v2/wvw/matches/1-4";

/*EU match ups*/
const tier1EuApi = "https://api.guildwars2.com/v2/wvw/matches/2-1";
const tier2EuApi = "https://api.guildwars2.com/v2/wvw/matches/2-2";
const tier3EuApi = "https://api.guildwars2.com/v2/wvw/matches/2-3";
const tier4EuApi = "https://api.guildwars2.com/v2/wvw/matches/2-4";
const tier5EuApi = "https://api.guildwars2.com/v2/wvw/matches/2-5";

const tier1NaChannelId = "396597006593687553";
const tier2NaChannelId = "396597023794659331";
const tier3NaChannelId = "396597041536565248";
const tier4NaChannelId = "396597060247224320";

const tier1EuChannelId = "396597271849861131";
const tier2EuChannelId = "396597290615177219";
const tier3EuChannelId = "396597304842256384";
const tier4EuChannelId = "396597315952967680";
const tier5EuChannelId = "396597379115122698";

module.exports =  {

    matchUp: async (message,client) => {
        if(message.channel.id === tier1NaChannelId) {
            let response = await axios(tier1NaApi);
            let getBlue = response.data.worlds.blue;
            let getRed = response.data.worlds.red;
            let getGreen = response.data.worlds.green;

            let blueServer = worldArray.filter(blue => getBlue === blue.id);
            let redServer = worldArray.filter(red => getRed === red.id);
            let greenServer = worldArray.filter(green => getGreen === green.id);
            let greenKdr = response.data.kills.green / response.data.deaths.green;
            let blueKdr = response.data.kills.blue / response.data.deaths.blue;
            let redKdr = response.data.kills.red / response.data.deaths.red;

            //obtain skirmish data from gw2
            let skirmishResults = response.data.skirmishes;
            //store it and remove the final input

            let skirmish = skirmishResults.pop();

            message.channel.send(
                {
                    "embed":{
                        "title": "WvW match up",
                        "color": 16646144,
                        "fields": [
                            {
                                "name": "Total",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.scores.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.scores.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.scores.red + "```",
                                "inline": true
                            },
                            {
                                "name": "Kills",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.kills.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.kills.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.kills.red + "```",
                                "inline": true
                            },
                            {
                                "name": "Deaths",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.red + "```",
                                "inline": true
                            },
                            {
                                "name": "KDR",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + greenKdr.toFixed(2) + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + blueKdr.toFixed(2) + "\n" + redServer[0].name.padStart(3, ' ') + ": " + redKdr.toFixed(2) + "```",
                                "inline": true
                            },
                            {
                                "name": "Current Skirmish",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.red  + "```",
                                "inline": true
                            },
                            {
                                "name": "Victory Points",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.red + "```",
                                "inline": true
                            }
                        ]
                    } }
            );

        }else if(message.channel.id === tier2NaChannelId){
            let response = await axios(tier2NaApi);
            let getBlue = response.data.worlds.blue;
            let getRed = response.data.worlds.red;
            let getGreen = response.data.worlds.green;

            let blueServer = worldArray.filter(blue => getBlue === blue.id);
            let redServer = worldArray.filter(red => getRed === red.id);
            let greenServer = worldArray.filter(green => getGreen === green.id);
            let greenKdr = response.data.kills.green / response.data.deaths.green;
            let blueKdr = response.data.kills.blue / response.data.deaths.blue;
            let redKdr = response.data.kills.red / response.data.deaths.red;

            //obtain skirmish data from gw2
            let skirmishResults = response.data.skirmishes;
            //store it and remove the final input

            let skirmish = skirmishResults.pop();
            message.channel.send(

                {
                    "embed":{
                        "title": "WvW match up",
                        "color": 16646144,
                        "fields": [
                            {
                                "name": "Total",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.scores.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.scores.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.scores.red + "```",
                                "inline": true
                            },
                            {
                                "name": "Kills",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.kills.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.kills.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.kills.red + "```",
                                "inline": true
                            },
                            {
                                "name": "Deaths",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.red + "```",
                                "inline": true
                            },
                            {
                                "name": "KDR",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + greenKdr.toFixed(2) + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + blueKdr.toFixed(2) + "\n" + redServer[0].name.padStart(3, ' ') + ": " + redKdr.toFixed(2) + "```",
                                "inline": true
                            },
                            {
                                "name": "Current Skirmish",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.red  + "```",
                                "inline": true
                            },
                            {
                                "name": "Victory Points",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.red + "```",
                                "inline": true
                            }
                        ]
                    }
                })
        }else if(message.channel.id === tier3NaChannelId){
            let response = await axios(tier3NaApi);
            let getBlue = response.data.worlds.blue;
            let getRed = response.data.worlds.red;
            let getGreen = response.data.worlds.green;

            let blueServer = worldArray.filter(blue => getBlue === blue.id);
            let redServer = worldArray.filter(red => getRed === red.id);
            let greenServer = worldArray.filter(green => getGreen === green.id);
            let greenKdr = response.data.kills.green / response.data.deaths.green;
            let blueKdr = response.data.kills.blue / response.data.deaths.blue;
            let redKdr = response.data.kills.red / response.data.deaths.red;

            //obtain skirmish data from gw2
            let skirmishResults = response.data.skirmishes;
            //store it and remove the final input

            let skirmish = skirmishResults.pop();
            message.channel.send(

                {
                    "embed":{
                        "title": "WvW match up",
                        "color": 16646144,
                        "fields": [
                            {
                                "name": "Total",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.scores.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.scores.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.scores.red + "```",
                                "inline": true
                            },
                            {
                                "name": "Kills",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.kills.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.kills.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.kills.red + "```",
                                "inline": true
                            },
                            {
                                "name": "Deaths",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.red + "```",
                                "inline": true
                            },
                            {
                                "name": "KDR",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + greenKdr.toFixed(2) + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + blueKdr.toFixed(2) + "\n" + redServer[0].name.padStart(3, ' ') + ": " + redKdr.toFixed(2) + "```",
                                "inline": true
                            },
                            {
                                "name": "Current Skirmish",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.red  + "```",
                                "inline": true
                            },
                            {
                                "name": "Victory Points",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.red + "```",
                                "inline": true
                            }

                        ]
                    }
                })

        }else if(message.channel.id === tier4NaChannelId) {
            let response = await axios(tier4NaApi);
            let getBlue = response.data.worlds.blue;
            let getRed = response.data.worlds.red;
            let getGreen = response.data.worlds.green;

            let blueServer = worldArray.filter(blue => getBlue === blue.id);
            let redServer = worldArray.filter(red => getRed === red.id);
            let greenServer = worldArray.filter(green => getGreen === green.id);
            let greenKdr = response.data.kills.green / response.data.deaths.green;
            let blueKdr = response.data.kills.blue / response.data.deaths.blue;
            let redKdr = response.data.kills.red / response.data.deaths.red;

            //obtain skirmish data from gw2
            let skirmishResults = response.data.skirmishes;
            //store it and remove the final input

            let skirmish = skirmishResults.pop();
            message.channel.send(
                {
                    "embed": {
                        "title": "WvW match up",
                        "color": 16646144,
                        "fields": [
                            {
                                "name": "Total",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.scores.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.scores.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.scores.red + "```",
                                "inline": true
                            },
                            {
                                "name": "Kills",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.kills.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.kills.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.kills.red + "```",
                                "inline": true
                            },
                            {
                                "name": "Deaths",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.red + "```",
                                "inline": true
                            },
                            {
                                "name": "KDR",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + greenKdr.toFixed(2) + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + blueKdr.toFixed(2) + "\n" + redServer[0].name.padStart(3, ' ') + ": " + redKdr.toFixed(2) + "```",
                                "inline": true
                            },
                            {
                                "name": "Current Skirmish",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.red  + "```",
                                "inline": true
                            },
                            {
                                "name": "Victory Points",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.red + "```",
                                "inline": true
                            }

                        ]
                    }
                })
            /*Begin EU match ups*/
        }else if(message.channel.id === tier1EuChannelId){
                let response = await axios(tier1EuApi);
                let getBlue = response.data.worlds.blue;
                let getRed = response.data.worlds.red;
                let getGreen = response.data.worlds.green;

                let blueServer = worldArray.filter(blue => getBlue === blue.id);
                let redServer = worldArray.filter(red => getRed === red.id);
                let greenServer = worldArray.filter(green => getGreen === green.id);
                let greenKdr = response.data.kills.green / response.data.deaths.green;
                let blueKdr = response.data.kills.blue / response.data.deaths.blue;
                let redKdr = response.data.kills.red / response.data.deaths.red;

                //obtain skirmish data from gw2
                let skirmishResults = response.data.skirmishes;
                //store it and remove the final input

                let skirmish = skirmishResults.pop();
                message.channel.send(
                    {
                        "embed":{
                            "title": "WvW match up",
                            "color": 16646144,
                            "fields": [
                                {
                                    "name": "Total",
                                    "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.scores.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.scores.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.scores.red + "```",
                                    "inline": true
                                },
                                {
                                    "name": "Kills",
                                    "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.kills.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.kills.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.kills.red + "```",
                                    "inline": true
                                },
                                {
                                    "name": "Deaths",
                                    "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.red + "```",
                                    "inline": true
                                },
                                {
                                    "name": "KDR",
                                    "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + greenKdr.toFixed(2) + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + blueKdr.toFixed(2) + "\n" + redServer[0].name.padStart(3, ' ') + ": " + redKdr.toFixed(2) + "```",
                                    "inline": true
                                },
                                {
                                    "name": "Current Skirmish",
                                    "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.red  + "```",
                                    "inline": true
                                },
                                {
                                    "name": "Victory Points",
                                    "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.red + "```",
                                    "inline": true
                                }

                            ]
                        }
                    })
        }else if(message.channel.id === tier2EuChannelId){
            let response = await axios(tier2EuApi);
            let getBlue = response.data.worlds.blue;
            let getRed = response.data.worlds.red;
            let getGreen = response.data.worlds.green;

            let blueServer = worldArray.filter(blue => getBlue === blue.id);
            let redServer = worldArray.filter(red => getRed === red.id);
            let greenServer = worldArray.filter(green => getGreen === green.id);
            let greenKdr = response.data.kills.green / response.data.deaths.green;
            let blueKdr = response.data.kills.blue / response.data.deaths.blue;
            let redKdr = response.data.kills.red / response.data.deaths.red;

            //obtain skirmish data from gw2
            let skirmishResults = response.data.skirmishes;
            //store it and remove the final input

            let skirmish = skirmishResults.pop();
            message.channel.send(
                {
                    "embed":{
                        "title": "WvW match up",
                        "color": 16646144,
                        "fields": [
                            {
                                "name": "Total",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.scores.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.scores.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.scores.red + "```",
                                "inline": true
                            },
                            {
                                "name": "Kills",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.kills.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.kills.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.kills.red + "```",
                                "inline": true
                            },
                            {
                                "name": "Deaths",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.red + "```",
                                "inline": true
                            },
                            {
                                "name": "KDR",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + greenKdr.toFixed(2) + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + blueKdr.toFixed(2) + "\n" + redServer[0].name.padStart(3, ' ') + ": " + redKdr.toFixed(2) + "```",
                                "inline": true
                            },
                            {
                                "name": "Current Skirmish",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.red  + "```",
                                "inline": true
                            },
                            {
                                "name": "Victory Points",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.red + "```",
                                "inline": true
                            }

                        ]
                    }
                })
        }else if(message.channel.id === tier3EuChannelId){
            let response = await axios(tier3EuApi);
            let getBlue = response.data.worlds.blue;
            let getRed = response.data.worlds.red;
            let getGreen = response.data.worlds.green;

            let blueServer = worldArray.filter(blue => getBlue === blue.id);
            let redServer = worldArray.filter(red => getRed === red.id);
            let greenServer = worldArray.filter(green => getGreen === green.id);
            let greenKdr = response.data.kills.green / response.data.deaths.green;
            let blueKdr = response.data.kills.blue / response.data.deaths.blue;
            let redKdr = response.data.kills.red / response.data.deaths.red;

            //obtain skirmish data from gw2
            let skirmishResults = response.data.skirmishes;
            //store it and remove the final input

            let skirmish = skirmishResults.pop();
            message.channel.send(
                {
                    "embed":{
                        "title": "WvW match up",
                        "color": 16646144,
                        "fields": [
                            {
                                "name": "Total",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.scores.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.scores.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.scores.red + "```",
                                "inline": true
                            },
                            {
                                "name": "Kills",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.kills.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.kills.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.kills.red + "```",
                                "inline": true
                            },
                            {
                                "name": "Deaths",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.red + "```",
                                "inline": true
                            },
                            {
                                "name": "KDR",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + greenKdr.toFixed(2) + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + blueKdr.toFixed(2) + "\n" + redServer[0].name.padStart(3, ' ') + ": " + redKdr.toFixed(2) + "```",
                                "inline": true
                            },
                            {
                                "name": "Current Skirmish",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.red  + "```",
                                "inline": true
                            },
                            {
                                "name": "Victory Points",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.red + "```",
                                "inline": true
                            }

                        ]
                    }
                })
        }else if(message.channel.id === tier4EuChannelId){
            let response = await axios(tier4EuApi);
            let getBlue = response.data.worlds.blue;
            let getRed = response.data.worlds.red;
            let getGreen = response.data.worlds.green;

            let blueServer = worldArray.filter(blue => getBlue === blue.id);
            let redServer = worldArray.filter(red => getRed === red.id);
            let greenServer = worldArray.filter(green => getGreen === green.id);
            let greenKdr = response.data.kills.green / response.data.deaths.green;
            let blueKdr = response.data.kills.blue / response.data.deaths.blue;
            let redKdr = response.data.kills.red / response.data.deaths.red;

            //obtain skirmish data from gw2
            let skirmishResults = response.data.skirmishes;
            //store it and remove the final input

            let skirmish = skirmishResults.pop();

            message.channel.send(
                {
                    "embed":{
                        "title": "WvW match up",
                        "color": 16646144,
                        "fields": [
                            {
                                "name": "Total",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.scores.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.scores.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.scores.red + "```",
                                "inline": true
                            },
                            {
                                "name": "Kills",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.kills.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.kills.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.kills.red + "```",
                                "inline": true
                            },
                            {
                                "name": "Deaths",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.red + "```",
                                "inline": true
                            },
                            {
                                "name": "KDR",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + greenKdr.toFixed(2) + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + blueKdr.toFixed(2) + "\n" + redServer[0].name.padStart(3, ' ') + ": " + redKdr.toFixed(2) + "```",
                                "inline": true
                            },
                            {
                                "name": "Current Skirmish",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.red  + "```",
                                "inline": true
                            },
                            {
                                "name": "Victory Points",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.red + "```",
                                "inline": true
                            }

                        ]
                    }
                })
        }else if(message.channel.id === tier5EuChannelId){
            let response = await axios(tier5EuApi);
            let getBlue = response.data.worlds.blue;
            let getRed = response.data.worlds.red;
            let getGreen = response.data.worlds.green;

            let blueServer = worldArray.filter(blue => getBlue === blue.id);
            let redServer = worldArray.filter(red => getRed === red.id);
            let greenServer = worldArray.filter(green => getGreen === green.id);
            let greenKdr = response.data.kills.green / response.data.deaths.green;
            let blueKdr = response.data.kills.blue / response.data.deaths.blue;
            let redKdr = response.data.kills.red / response.data.deaths.red;

            //obtain skirmish data from gw2
            let skirmishResults = response.data.skirmishes;
            //store it and remove the final input

            let skirmish = skirmishResults.pop();

            message.channel.send(
                {
                    "embed":{
                        "title": "WvW match up",
                        "color": 16646144,
                        "fields": [
                            {
                                "name": "Total",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.scores.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.scores.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.scores.red + "```",
                                "inline": true
                            },
                            {
                                "name": "Kills",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.kills.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.kills.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.kills.red + "```",
                                "inline": true
                            },
                            {
                                "name": "Deaths",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.deaths.red + "```",
                                "inline": true
                            },
                            {
                                "name": "KDR",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + greenKdr.toFixed(2) + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + blueKdr.toFixed(2) + "\n" + redServer[0].name.padStart(3, ' ') + ": " + redKdr.toFixed(2) + "```",
                                "inline": true
                            },
                            {
                                "name": "Current Skirmish",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + skirmish.scores.red  + "```",
                                "inline": true
                            },
                            {
                                "name": "Victory Points",
                                "value": "```" + greenServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.green + "\n" + blueServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.blue + "\n" + redServer[0].name.padStart(3, ' ') + ": " + response.data.victory_points.red + "```",
                                "inline": true
                            }

                        ]
                    }
                })
        }else{
            message.channel.send("This only works in match up channels.")
        }
    }

};