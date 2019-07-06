Welcome(bot, {
    privatemsg : "Default message, welcome anyway",
    publicmsg : "Default Public Message where you can flag use @MEMBER to mention the newcomer",
    publicchannel : "welcome or 595798973743235074"
    })
});
const Welcome = require("discord-welcome");
 
Welcome(client, {
    "numericserverid1": {
        privatemsg : "Default message, welcome anyway",
        publicmsg : "Default Public Message where you can flag use @MEMBER to mention the newcomer",
        publicchannel : "welcome or 595798973743235074"
    },
    "numericserverid2": {
        privatemsg : "Second Server default message",
        publicmsg : "Welcome on the second server",
        publicchannel : "welcoe or 595798973743235074"
    }
    bot.login(process.env.BOT_TOKEN)
