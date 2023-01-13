// Require the necessary discord.js classes
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, FLAGS } = require('discord.js');
const { token } = require('./config.json');
const { VoiceConnectionStatus, AudioPlayerStatus } = require('@discordjs/voice');
var cron = require("cron");


// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

function test() {
	console.log("Action executed.");
  }
  
  let job1 = new cron.CronJob('00 00 08 * * *', test); // fires every day, at 01:05:01 and 13:05:01
  
  // To make a job start, use job.start()
  job1.start();
  // If you want to pause your job, use job.stop()
  //job1.stop();

  let scheduledMessage = new cron.CronJob('00 00 20 * * *', () => {
	// This runs every day at 8:00:00
	const channel = client.channels.cache.get('715308127729221672');
	channel.send('AYO ITS 8 O CLOCK');
  });
  
  // When you want to start it, use:
  scheduledMessage.start()


// Log in to Discord with your client's token
client.login(token);
