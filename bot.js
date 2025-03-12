const { Telegraf, Markup } = require("telegraf");
const dotenv = require("dotenv");
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN); // better use .env

bot.start((ctx) => ctx.reply(
  `*Welcome to Orbit MM\!* 🚀\n\n` +
  `Experience the unique power of *Orbit MM's Solana Volume Boosting*\n` +
  `Service optimized for *Solana* and *Pumpfun*, designed to attract *new organic investors*\n\n` +
  `*Here's How:*\n` +
  `⚡ *3 Modes:* Choose between *Fast Mode* \\(up to 6h\\), *Normal Mode* \\(up to 24h\\), or *Steady Mode* \\(up to 7 days\\).\n` +
  `📦 *Package Selection:* From *9 to 60 SOL*, tailored to your budget.\n` +
  `🤖 *MicroBots:* Up to *6 MicroBots* per package, each adding *2 tx per minute*.\n` +
  `😏 *FOMO Creation:* High volume from unique wallets creates *powerful FOMO* for your project.\n` +
  `✨ *Organic Trending:* High transaction rates drive *natural visibility* on crypto platforms.\n\n` +
  `*Get Started!*\nBoost your market presence discreetly and effectively with *Orbit MM*.\n` + 
  ` [Orbit MM Website](https://orbitmm.com) | ` + `[Twitter](https://twitter.com/OrbitMM) | ` + `[Telegram](https://t.me/OrbitMM) | ` + `[Orbit MM Guide](https://orbitmm.com/guide) | ` + `[Whitelabel](https://orbitmm.com/whitelabel)`,
  Markup.inlineKeyboard([
    [Markup.button.callback('Boost Volume 📊', 'boost'), Markup.button.callback('Referrals 💰', 'referrals')],
    [Markup.button.callback('Support 🆘', 'support'), Markup.button.callback('Learn more 🔗', 'learn_more')]
  ])
)); // will be executed when /start 
bot.command("help", (ctx) => ctx.reply("Help Works")); // works when you type /help
bot.on("sticker", (ctx) => // when bot recives a sticker , it reply with a sticker according to the sticker-id mention in replyWithSticker()
  ctx.replyWithSticker(
    "CAACAgUAAxkBAAEFyLNjGfp0a6emv-AbnJUxIrveMiYFggACxQEAAsTTqVSDFrDSj_I_PCkE"
  )
);
bot.hears("hello", (ctx) => ctx.reply("Hello from Telegraf")); // triggered when bot gets "hello" as a message

bot.launch();
