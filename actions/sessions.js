const services = require('../gw2Services/services.js')
const pool = require('../database/db.js')
const axios = require("axios");
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))


module.exports = {

    sessionShower: async (message) => {
        let queryUser = 'SELECT * FROM account_info WHERE uid = ?'
        let queryUserResults = await pool.query(queryUser, message.author.id)

        let lastSessionKills = queryUserResults[0].currentKills
        let newSessionKills;

        //need to obtain newSessions off gw2 api
        message.channel.send('Processing...')
        let getKillResponse = await services.obtainAchievements(queryUserResults[0].api)
        await delay(1000)
        let killAchievements = getKillResponse.data.find(res => res.id === 283);
        newSessionKills = killAchievements.current

        let obtainedKills = newSessionKills - lastSessionKills 

        message.channel.send("Your last session kills are " + lastSessionKills + ". Your new session is  " + newSessionKills + ". A total of " + obtainedKills + " obtained. ")

        "UPDATE users SET weekly_tally = ?, weekly_kill_total = ? WHERE api = ?";

        let updateKills = 'UPDATE account_info SET currentKills = ? WHERE uid = ? and api = ?'
        let sqlObj = [
            newSessionKills,
            message.author.id,
            queryUserResults[0].api
        ]
        await pool.query(updateKills, sqlObj)
    }
}