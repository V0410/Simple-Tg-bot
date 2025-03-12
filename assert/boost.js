

// Define boosting message
const boostMessage =
    `Select the pool you'd like Orbitt MM to operate in:\n` +

    `🟣 Raydium: Orbitt MM will immediately locate your pool and apply optimized volume-boosting settings.\n` +

    `🟢 PumpFun: After your token completes the bonding curve on PumpFun and transitions to Raydium, Orbitt MM will seamlessly continue the volume-boosting process on Raydium.\n` +

    `🟠 Meteora: Orbitt MM will identify your pool on Meteora and apply volume-boosting strategies specifically optimized for the platform.\n` +

    `🟡 Moonshot: After reaching market cap milestones, the token transitions to Raydium or Meteora, where Orbitt MM continues volume-boosting seamlessly.`

// Define pool options
const POOL_OPTIONS = [
    { text: '🟣 Raydium', action: 'raydium' },
    { text: '🟢 PumpFun', action: 'pumpFun' },
    { text: '🟠 Meteora', action: 'meteora' },
    { text: '🟡 Moonshot', action: 'moonshot' }
];

module.exports = {
    boostMessage,
    POOL_OPTIONS,
    // BUTTON_TEXTS: ['Boost Volume', 'Referrals', 'Support', 'Learn more']
};
