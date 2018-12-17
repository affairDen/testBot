require('dotenv').config();

const TeleBot = require('telebot');

const bot = new TeleBot({
	token: process.env.API_KEY
});

bot.on('/a', resp => {
	console.log(resp);
	bot.sendMessage(resp.from.id, new Date());
});

bot.start();