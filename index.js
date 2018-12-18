require('dotenv').config();

const TeleBot = require('telebot');

const bot = new TeleBot({
	token: process.env.API_KEY
});

const DAY = 24 * 60 * 60 * 1000;
const UKRAIN_GMT = 2 * 60 * 60 * 1000;

const getCounters = () => {
	const electionDay = new Date('2019/03/31 00:00:00');
	const now = new Date();
	const diff = electionDay - now + (now.getTimezoneOffset() * 60 * 1000) - UKRAIN_GMT;
	const restDate = new Date(diff % DAY);
	const days = Math.round(diff / DAY);
	const hours = restDate.getHours();
	const minutes = restDate.getMinutes() + 1;

	return [days, hours, minutes];
};

bot.on('/a', resp => {

	// bot.sendMessage(resp.from.id, getCounters().toString());
	bot.sendMessage(resp.from.id, (new Date()).toString());
});

bot.start();