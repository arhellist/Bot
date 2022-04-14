const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.1850490698: AAHUjaTW0tBMWYNGpMq8kCSatRNsvkel174)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply(''))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()