

const { Markup } = require("telegraf");

// Define boosting message
const raydium = {
    message: `Select the mode in which you'd like Orbitt MM to operate. Each mode is designed to adjust duration and transaction frequency, tailored to maximize your token's impact based on specific needs.\n\n` +
        `🚀 Fast Mode: Perfect for new launches, providing a rapid volume boost in up to 6 hours.\n\n` +
        `🚈 Normal Mode: Ideal for maintaining steady chart movements, with volume boosting up to 24 hours.\n\n` +
        `🔄 Steady Mode: Designed for long-term impact, keeping your chart active with consistent volume boosts for up to 7 days.\n`,
    button: Markup.inlineKeyboard([ 
        [Markup.button.callback('🚀 Fast Mode 6 hours', 'fast')],
        [Markup.button.callback('🚈 Normal Mode 24hours', 'normal')],
        [Markup.button.callback('🔄 Steady Mode 7 days', 'steady')],
        [Markup.button.callback('Learn more 🔗', 'learn_more')],
        [Markup.button.callback('👈  Return', 'return')]
    ])
}

module.exports = {
    raydium
};
