
const { Telegraf, Markup } = require("telegraf");
const { welcomeMessage, BUTTONS } = require("./assert/welcome");
const { boostMessage, POOL_OPTIONS } = require("./assert/boost");
const dotenv = require("dotenv");
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN); // better use .env



bot.start((ctx) => ctx.reply(
  welcomeMessage,
  Markup.inlineKeyboard(
    BUTTONS.map(row =>
      [row.map(button => `${[Markup.button.callback(button.text, button.action)]}, `)]
    ),
    {
      columns: 2,
      row_height: 2,
      resize_keyboard: true,
      one_time_keyboard: true,
      selective: true,
    }
  )
)); // will be executed when /start 

bot.action('boost', (ctx) =>
  ctx.reply(boostMessage, Markup.inlineKeyboard(POOL_OPTIONS.map(option => [Markup.button.callback(option.text, option.action)]))));
bot.command("help", (ctx) => ctx.reply("Help Works")); // works when you type /help
bot.on("sticker", (ctx) => // when bot recives a sticker , it reply with a sticker according to the sticker-id mention in replyWithSticker()
  ctx.replyWithSticker(
    "CAACAgUAAxkBAAEFyLNjGfp0a6emv-AbnJUxIrveMiYFggACxQEAAsTTqVSDFrDSj_I_PCkE"
  )
);
bot.hears("hello", (ctx) => ctx.reply("Hello from Telegraf")); // triggered when bot gets "hello" as a message

bot.launch();
