require('dotenv').config();

const TeleBot = require('telebot');

const bot = new TeleBot({
	token: process.env.API_KEY
});

bot.on('/a', resp => {
	const now = new Date();


	bot.sendMessage(resp.from.id, now.getTime() + (2*60*60*1000));
});

bot.start();