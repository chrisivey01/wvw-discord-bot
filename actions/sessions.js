const services = require('../gw2Services/services.js')
const pool = require('../database/db.js')
const axios = require("axios");
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))


module.exports = {

    sessionShower: async (message) => {
        try {

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

            //calculate time
            let dbTime = new Date(queryUserResults[0].time_stamp)
            let currentTime = new Date();

            //in ms
            let msHours = currentTime.getTime() - dbTime.getTime();
            let answer = destructMS(msHours)
            // answer = {d: 0, h: 0, m: 10, s: 54, ms: 263}


            message.channel.send("Your last session kills are " + lastSessionKills + ". Your new session is  " + newSessionKills + ". A total of " + obtainedKills + " obtained." +
                "Within the last " + answer.d + " days, " + answer.h + " hours, " + answer.m + " minutes, " + answer.s + " seconds since you've updated!")

            // "UPDATE users SET weekly_tally = ?, weekly_kill_total = ? WHERE api = ?";

            let updateKills = 'UPDATE account_info SET currentKills = ?, time_stamp = ? WHERE uid = ? and api = ?'
            let sqlObj = [
                newSessionKills,
                currentTime,
                message.author.id,
                queryUserResults[0].api
            ]
            await pool.query(updateKills, sqlObj)
        }catch(e){
            console.log(e.response)
            message.channel.send('You are not verified - please !kill yourself instead.')
        }
    }
}

destructMS = (milli) => {
    if (isNaN(milli) || milli < 0) {
        return null;
    }

    var d, h, m, s, ms;
    s = Math.floor(milli / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    ms = Math.floor((milli % 1000) * 1000) / 1000;
    return { d: d, h: h, m: m, s: s, ms: ms };
}