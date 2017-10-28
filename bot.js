const botSettings = require("./botSettings.json");
const Discord = require("discord.js");
const fs = require("fs");

const prefix = "$$"

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
	if(err) console.error(err);

	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if(jsfiles.length <= 0) {
		console.log("No commands to load!");
	}

	console.log(`Loading ${jsfiles.length} commands!`);

	jsfiles.forEach((f, i) => {
		let props = require(`./cmds/${f}`);
		console.log(`${i + 1}: ${f} loaded!`);
		bot.commands.set(props.help.name, props);
	});
});

bot.on("ready", async () => {
	console.log(`Bot is ready! ${bot.user.username}`);

	try {
		let link = await bot.generateInvite(["ADMINISTRATOR"]);
		console.log(link);
	} catch(e) {
		console.log(e.stack)
	}
});


bot.on('ready', () => {
  bot.user.setGame(`Type $$help for more! | In ${bot.guilds.size} servers!`)
});


// bot.on('guildMemberAdd', member => {
// 	member.guild.channels.get('360616465642029056').send('**' + member.user.username + '**, has joined the server! Make sure to read #serverinfo for more infomation!');
// });

// bot.on('guildMemberRemove', member => {
// 	member.guild.channels.get('360616465642029056').send('**' + member.user.username + '**, has left the server! Was fun as it lasted... :cry:');
// });




bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type == "dm") return;

	let messageArray = message.content.split(/\s+/g);
	let command = messageArray[0];
	let args = messageArray.slice(1);

	if(!command.startsWith(prefix)) return;


	let cmd = bot.commands.get(command.slice(prefix.length));
	if (cmd) cmd.run(bot, message, args);
	
//	if(command === `${prefix}userinfo`) {
//		 let embed = new Discord.RichEmbed()
//		 .setAuthor(message.author.username)
//		 .setDescription("This is the user's info!")
//		 .setColor("#9B59B6")
//		 .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
//		 .addField("ID", message.author.id)
//		 .addField("Created At", message.author.createdAt);
//		 
//	 message.channel.sendEmbed(embed);
//	}
//
//	if(command === `${prefix}server`) {
//		let embed = new Discord.RichEmbed()
//		.setTitle("The Revolutionary Assassins")
//		.setDescription(" “Nothing is True; Everything is Permitted.” The Revolutionary Assassins, also known as TRA, is a group focused on the empowerment of combat and companionship, here we seek to open the minds of our members by setting them further than their goals. We do our best to distribute knowledge and opportunities. To do that, we motivate them to become great themselves, leading the next generation of Assassins. If you need the Discord link, message a High Rank. One of us might be able to just send to you")
//		.setColor("#737CA1")
//		.setURL("https://www.roblox.com/My/Groups.aspx?gid=3356979")
//		.setThumbnail("https://t6.rbxcdn.com/ee20266dc962d52904f91684b4ffcfc1")
//		.addField("Ranks of the Brotherhood", "Within TRA. The current way to rank up is to attend trainings or showing activity!")
//		.addField("Low; ", "Novice; Servant; Assistant;") 
//		.addField("Middle; ", "Soilder; Disciple; Mercenary; Warrior; Veteran; Master;")
//		.addField("High; ", "Assassin; Elite Assassin; Grand Assassin; Elder Assassin; Master Assassin; Arch Assassin; Dignitary; Mentor;")
//		.addField("Tenets and Maxim", "Tenets and the maxim are the rules of the creed what we all follow; They are the rules that makes a brotherhood a brotherhood.")
//		.addField("**Tenet 1:**", "*_Stay your blade from the flesh of an Innocent_*")
//		.setFooter("Message Acezus#8392 if need more infomation!");
		
//	message.channel.sendEmbed(embed);
//	}

//  if(command === `${prefix}si`) {
//	let embed = new Discord.RichEmbed()
//	.setColor("#ff0000")
//	.setTitle("Server Rules")
//	.setThumbnail("https://t6.rbxcdn.com/7bc66ede1def117e04815ecb2ee58e8a")
//	.setDescription("Welcome @everyone to **Phantom Forces Discord**")
//	.addField("Disclamer:", "Just so you know, this is not the **__OFFICAL__** discord server of the creators of Phantom Forces. And Sadly, we have to go straight into the rules..");
//	message.channel.sendEmbed(embed);	
//}
//
//	if(command === `${prefix}text`) {
//	
//	let embed = new Discord.RichEmbed()
//	.setTitle("Text Channel Rules") //TextChannel
//	.setColor("#ff0000")
//	.addField("#1: NSFW", "NSFW (Not Suitable For Work) is off limits. **You all should know what not to send, if caught it will be a ban. No Warning!**")
//	.addBlankField()
//	.addField("#2: Agressive Behaviour", "If you are in this discord, to start a arguement constently, you will be warned. As there are people who don't want to see this.")
//	.addBlankField()
//	.addField("#3: Respecting Eachother","We are only here to have fun, right? So we are here to show eachother **respect**.")
//	.addBlankField()
//	.addField("#4: Spamming", "Spamming in any form (DMs, Text Channels, Voice Channels, are not allowed. Found to do so is a punishment.)")
//	.addBlankField()
//	.addField("#5: Personal Attacks", "Targeting one person just to provoke them, is not on. If caught or told doing so is a a mute for **24 Hours**")
//	.addBlankField()
//	.addField("#6: Cursing", "Cursing (AKA: Swearing) is at a minimum. So don't use 24/7");
//
//	message.channel.sendEmbed(embed);
//}
//
//	
//	if(command === `${prefix}voice`) {
//
//	let embed = new Discord.RichEmbed()
//	.setTitle("Voice Channel Rules") //VoiceChannel
//	.setColor("#ff0000")
//	.addField("#1: Non-Bullying", "Now, if you are scared to JOIN the discord voice channel, you don't have to. No one would pick on you about your voice, if someone does, message @MOD or @ADMIN")
//	.addBlankField()
//	.addField("#2: Voice Changers", "Voice changers are a big no. If you are afraid of being picked on. Then don't join one, but if you want to you can. As I said, no one would pick on you.")
//	.addBlankField()
//	.addField("#3: Music", "Music is allowed, if you ask the others around you. As it might effect them (at school for example.)" );
//
//	message.channel.sendEmbed(embed);
//}
//
//	if(command === `${prefix}CON`) {
//	let embed = new Discord.RichEmbed()
//	.setTitle("Conclusion") //Conclusion
//	.setColor("#ff0000")
//	.setImage(message.ow.avatar)
//	.setDescription("That makes up all our rules. Please follow them and use common sense on everything. If a rule ain't here and ain't sure if you should. Then don't as you might have a chance on getting kicked from this discord. This is a fun enviroment. **HAPPY CHATTING!**")
//	.setFooter("Remember, Use your common sense, if no rule is here and not sure. Then don't do it.")
//	.addField("Created at", message.author.createdAt)
//	message.channel.sendEmbed(embed);
//}
//-----------------------------------------------------------------------------------------------------------------\\
//
//  if(command === `${prefix}random`) {
//	let embed = new Discord.RichEmbed()
//	.setTitle("This is random")
//	.setAuthor("Acezus")
//	.setColor("#ff0000")
//	.addField("This is a Masked link", "Masked links are [helpful](https://google.com), don't go crazy!")
//	.setFooter("Message Acezus#8392 for more infomation.")
//	.setURL("http://google.com")
//	.setTimestamp(new Date());
//	message.channel.sendEmbed(embed);
// }

});

bot.login(botSettings.token);
process.on("unhandeledRejection", console.error);

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
