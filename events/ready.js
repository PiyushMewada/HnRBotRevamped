const { Events, ActivityType } = require('discord.js');


// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		client.user.setActivity('Rat Movie: Mystery of the Mayan Treasure', { type: ActivityType.Watching });
		// const channel = client.channels.cache.get('channelID');
		// channel.send('Message');
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};
