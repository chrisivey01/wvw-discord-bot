const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports = {
    dm: async (message, client) => {
        let server = client.guilds.get("247928597883387905");
        let obtainedUser = server.members
        let iterator = 0
        for await (user of obtainedUser) {
            await delay(500)
            client.users.get(user[1].user.id).send("New bot actived! \n \n" +
                "Apologies for the DM... Register to the new WvW Discord Bot to track your kill progress! \n " +
                "!api #######-####-####-####-####################-####-####-####-############ \n" +
                "To access or generate API keys, please visit <https://account.arena.net/applications> and generate a key with the ->> progression flag. <<- \n" +
                "Please do not delete the API key used to verify. You will lose access to the WvW bot. \n \n" +
                "Once registered type !kills to increase e-peen status. \n" +
                "Got ideas for new content? Or wanting to donate to show some love, no donation is too small! - please visit -> http://wvw-community.com/contact")
            console.log(iterator++ + " users have been DMed.")
         }
    }
};