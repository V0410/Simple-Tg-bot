
const { Markup } = require("telegraf");


const referrals = {
    message: `➡️ Please provide your Solana wallet address where you'll receive Solana Coins (SOL) straight from purchases made through your link.\n\n` +
        `⚠️ Referral activation takes 24 hours ⚠️`,
    button: Markup.inlineKeyboard(
        [Markup.button.callback('👈  Return', 'return')]
    )
}

module.exports = {
    referrals
};
