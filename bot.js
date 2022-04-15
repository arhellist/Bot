const Telegraf = require('телеграф')

const bot = новый телеграф(process.env.1850490698: AAHUjaTW0tBMWYNGpMq8kCSatRNsvkel174)
bot.start((ctx) => ctx.reply("Добро пожаловать!"))
bot.help((ctx) => ctx.reply("Пришлите мне стикер"))
bot.on('sticker', (ctx) => ctx.reply("))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()