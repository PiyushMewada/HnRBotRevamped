const {SlashCommandBuilder} = require('discord.js');
const voiceDiscord = require('@discordjs/voice');

module.exports = {

    data: new SlashCommandBuilder()
    .setName('soundboard')
    .setDescription('Plays a sound!')
	.addStringOption(option => 
		option.setName('sound')
		.setDescription('The sound effect to play')
		.setRequired(true)
		.addChoices(
			{name: 'ohyeah', value: 'ohyeah'},
			{name: 'airhorn', value: 'airhorn'},
			{name: 'rekt', value: 'rekt'},
			{name: 'loss', value: 'loss'},
			{name: 'haha', value: 'haha'},
			{name: 'rickroll', value: 'rickroll'},
			{name: 'defaultdance', value: 'defaultdance'},
			{name: 'sans', value: 'sans'},
			{name: 'oof', value: 'oof'},
			{name: 'bonk', value: 'bonk'},
			{name: 'bnok', value: 'bnok'},
			{name: 'clap', value: 'clap'},
			{name: 'mimimi', value: 'mimimi'},
			{name: 'AMONGUS', value: 'AMONGUS'},
			{name: 'no', value: 'no'},
			{name: 'yea', value: 'yea'},
			{name: 'spongefail', value: 'spongefail'},
			{name: 'spongedrama', value: 'spongedrama'},
			{name: 'morbin', value: 'morbin'},
			{name: 'grrrrr', value: 'grrr'},
			{name: 'bello', value: 'bello'},
			{name: 'kingbob', value: 'bob'},
			{name: 'hmmm', value: 'hmmm'},
		)),
    async execute(interaction) {
        await interaction.reply({content: 'playing!', ephemeral: true});
        const channel = interaction.member.voice.channel;
		if(!channel) return interaction.channel.send('you are not in a voice channel');

		const player = voiceDiscord.createAudioPlayer();
		var resource;
		switch(interaction.options.getString('sound')){
			case 'oof':
				const oofSounds = ["./sounds/oofR.mp3", "./sounds/oofMC.mp3"];
				resource = voiceDiscord.createAudioResource((oofSounds[Math.floor(Math.random() * oofSounds.length)]), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case 'grrr':
				const growlSounds = [
					"./sounds/growl1.mp3",
					"./sounds/growl2.mp3",
					"./sounds/growl3.mp3",
					"./sounds/growl4.mp3",
				  ];
				resource = voiceDiscord.createAudioResource((growlSounds[Math.floor(Math.random() * growlSounds.length)]), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "ohyeah":
				resource = voiceDiscord.createAudioResource(('./sounds/ohyeah.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "airhorn":
				resource = voiceDiscord.createAudioResource(('./sounds/horn.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "rekt":
				resource = voiceDiscord.createAudioResource(('./sounds/career.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "loss":
				resource = voiceDiscord.createAudioResource(('./sounds/loss.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "haha":
				resource = voiceDiscord.createAudioResource(('./sounds/laughtrack.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "rickroll":
				resource = voiceDiscord.createAudioResource(('./sounds/roll.mp3'), { inlineVolume: true });
				resource.volume.setVolume(.1);
				break;
			case "defaultdance":
				resource = voiceDiscord.createAudioResource(('./sounds/default.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "sans":
				resource = voiceDiscord.createAudioResource(('./sounds/megalovania.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "bonk":
				resource = voiceDiscord.createAudioResource(('./sounds/bonk.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "bnok":
				resource = voiceDiscord.createAudioResource(('./sounds/bonk.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "clap":
				resource = voiceDiscord.createAudioResource(('./sounds/clapping.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "mimimi":
				resource = voiceDiscord.createAudioResource(('./sounds/mimimi.mp3'), { inlineVolume: true });
				resource.volume.setVolume(.05);
				break;
			case "AMONGUS":
				resource = voiceDiscord.createAudioResource(('./sounds/mogus.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "no":
				resource = voiceDiscord.createAudioResource(('./sounds/no.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "yea":
				resource = voiceDiscord.createAudioResource(('./sounds/yea.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "spongefail":
				resource = voiceDiscord.createAudioResource(('./sounds/spongefail.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "spongedrama":
				resource = voiceDiscord.createAudioResource(('./sounds/spongedrama.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "morbin":
				resource = voiceDiscord.createAudioResource(('./sounds/morbin.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "bello":
				resource = voiceDiscord.createAudioResource(('./sounds/bello.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "kingbob":
				resource = voiceDiscord.createAudioResource(('./sounds/bob.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			case "hmmm":
				resource = voiceDiscord.createAudioResource(('./sounds/hmmm.mp3'), { inlineVolume: true });
				resource.volume.setVolume(1);
				break;
			default:
				resource = voiceDiscord.createAudioResource(('./sounds/bonk.mp3'), { inlineVolume: true });
				resource.volume.setVolume(0);
				break;
				
		}
		const connection = await voiceDiscord.joinVoiceChannel({
			channelId: channel.id,
			guildId: interaction.guild.id,
			adapterCreator: interaction.guild.voiceAdapterCreator,
		});

		player.play(resource);
		connection.subscribe(player);

		// checking for ending, leaving vc if yes

		player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
			connection.destroy();
		});
    },
};