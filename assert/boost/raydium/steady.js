const { Markup } = require("telegraf");

const steady = {
    message: "Please send a token address for volume market making.",
    button: [Markup.button.callback('👈  Return', 'return')]
}

module.exports = {
    steady
};