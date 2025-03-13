
const { Markup } = require("telegraf");

// Define boosting message
const boost = {
    message: `Select the pool you'd like Orbitt MM to operate in:\n` +

        `🟣 Raydium: Orbitt MM will immediately locate your pool and apply optimized volume-boosting settings.\n` +

        `🟢 PumpFun: After your token completes the bonding curve on PumpFun and transitions to Raydium, Orbitt MM will seamlessly continue the volume-boosting process on Raydium.\n` +

        `🟠 Meteora: Orbitt MM will identify your pool on Meteora and apply volume-boosting strategies specifically optimized for the platform.\n` +

        `🟡 Moonshot: After reaching market cap milestones, the token transitions to Raydium or Meteora, where Orbitt MM continues volume-boosting seamlessly.`,
    button: Markup.inlineKeyboard([
        [Markup.button.callback('Raydium 🟣', 'raydium')],
        [Markup.button.callback('PumpFun 🟢', 'pumpFun')],
        [Markup.button.callback('Meteora 🟠', 'meteora')],
        [Markup.button.callback('Moonshot 🟡', 'moonsho')],
        [Markup.button.callback('Learn more 🔗', 'learn_more')],
        [Markup.button.callback('👈  Return', 'return')]
    ])
}

module.exports = {
    boost
};
