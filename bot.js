


const { Telegraf } = require("telegraf");
const { menu } = require("./assert/menu");
const { boost } = require("./assert/boost/index");
const { referrals } = require("./assert/referrals/index");
const { support } = require("./assert/support/index");
const { raydium } = require("./assert/boost/raydium/index");
const { fast } = require("./assert/boost/raydium/fast");

const dotenv = require("dotenv");
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN); // better use .env

const welcomeMessage =
  `*Welcome to Orbit MM\!* 🚀\n\n` +
  `Experience the unique power of *Orbit MM's Solana Volume Boosting*\n` +
  `Service optimized for *Solana* and *Pumpfun*, designed to attract *new organic investors*\n\n` +
  `*Here's How:*\n` +
  `⚡ *3 Modes:* Choose between *Fast Mode* \\(up to 6h\\), *Normal Mode* \\(up to 24h\\), or *Steady Mode* \\(up to 7 days\\).\n` +
  `📦 *Package Selection:* From *9 to 60 SOL*, tailored to your budget.\n` +
  `🤖 *MicroBots:* Up to *6 MicroBots* per package, each adding *2 tx per minute*.\n` +
  `😏 *FOMO Creation:* High volume from unique wallets creates *powerful FOMO* for your project.\n` +
  `✨ *Organic Trending:* High transaction rates drive *natural visibility* on crypto platforms.\n\n` +
  `*Get Started!*\nBoost your market presence discreetly and effectively with *Orbit MM*.\n`;

bot.start((ctx) => ctx.reply(
  welcomeMessage,
  menu.button
)); // will be executed when /start 

bot.action('boost', (ctx) =>
  ctx.reply(boost.message, boost.button));

bot.action('raydium', (ctx) => (
  ctx.reply(raydium.message, raydium.button)
))

bot.action('fast', (ctx) => (
  ctx.reply(fast.message, fast.button)
))

bot.action('pumpfun', (ctx) => (
  ctx.reply(raydium.message, raydium.button)
))

bot.action('meteora', (ctx) => (
  ctx.reply(raydium.message, raydium.button)
))

bot.action('referrals', (ctx) =>
  ctx.reply(referrals.message, referrals.button));
bot.action('support', (ctx) =>
  ctx.reply(support.message, support.button));
bot.action('learn_more', async (ctx) => {
  await ctx.answerCbQuery(); // Answer the callback query
  await ctx.telegram.sendMessage(ctx.chat.id, 'Learn more selected!');
})



bot.action('return', (ctx) =>
  ctx.reply(menu.message, menu.button));
bot.command("help", (ctx) => ctx.reply("Help Works")); // works when you type /help
bot.on("sticker", (ctx) => // when bot recives a sticker , it reply with a sticker according to the sticker-id mention in replyWithSticker()
  ctx.replyWithSticker(
    "CAACAgUAAxkBAAEFyLNjGfp0a6emv-AbnJUxIrveMiYFggACxQEAAsTTqVSDFrDSj_I_PCkE"
  )
);
bot.hears("hello", (ctx) => ctx.reply("Hello from Telegraf")); // triggered when bot gets "hello" as a message

bot.launch();
