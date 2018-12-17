require('dotenv').config();

const TeleBot = require('telebot');

const bot = new TeleBot({
	token: process.env.API_KEY
});

bot.start();