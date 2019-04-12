const services = require("../gw2Services/services.js");
const pool = require("../database/db.js");
const axios = require("axios");

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
module.exports =  {

    register: async (message, client) => {
        let api = message.content.replace('!api ', '');
        if (message.channel.type !== 'dm') {
            message.delete(message)
        }
        let achievementUrl = `https://api.guildwars2.com/v2/account/achievements?access_token=${api}`;
        let accountUrl = `https://api.guildwars2.com/v2/account?access_token=${api}`;
        try {
            await axios(achievementUrl);
            await delay(1000)
        } catch (e) {
            message.channel.send("An issue with registration -> " + e.response.data.text + ". Please resubmit your API with the progression checkbox on.")
            return;
        }
        try {
            //obtain account Information
            message.channel.send("Processing... one moment.");
            let accountResponse = await axios(accountUrl);
            await delay(1000);
            let getKillResponse = await services.obtainAchievements(api);
            await delay(1000);
            let updatedkillResults = getKillResponse.data.find(res => res.id === 283);

            let faData = {
                uid: message.author.id,
                api: api,
                world: accountResponse.data.world,
                name: accountResponse.data.name,
                currentKills: updatedkillResults.current
            };
            let sql = "INSERT INTO account_info SET ? ON DUPLICATE KEY UPDATE api = VALUES(api), world = VALUES(world), name = VALUES(name), currentKills = VALUES(currentKills)";

            await pool.query(sql, faData, (err, result, field) => {
                if (err) {
                    console.log(err)
                } else {
                    message.channel.send("You've been added to the WvW Discord.")
                }
            })
        } catch (e) {
            console.log(e.response)
        }
    }
};