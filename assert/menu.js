
const { Markup } = require("telegraf");

const menu = {
    message: 'Menu',
    button: Markup.inlineKeyboard(
        [
            [
                Markup.button.callback('Boost Volume 📊', 'boost'),
                Markup.button.callback('Referrals 💰', 'referrals')
            ],
            [
                Markup.button.callback('Support 🆘', 'support'),
                Markup.button.callback('Learn more 🔗', 'learn_more')
            ],
        ]
    )
}



module.exports = {
    menu
}
