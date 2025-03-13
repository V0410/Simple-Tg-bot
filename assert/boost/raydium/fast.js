const { Markup } = require("telegraf");

const fast = {
    message: "Please send a token address for volume market making.",
    button: [Markup.button.callback('👈  Return', 'return')]
}

module.exports = {
    fast
};