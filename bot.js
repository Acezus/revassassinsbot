
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
  
client.on('message', message = > {
 if(message.mentions.users.size === 0) {
	return message.reply("You know, there is something called a 'mention', use it. Example: **@[USERNAME]**").catch(console.error);
    let userinfo = message.mentions.members.first().username;

	
 let embed = new Discord.RichEmbed()
	 .setAuthor(message.mentions.users.first().username)
	 .setThumbnail(message.mentions.users.first().avatarURL)
	 .setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16))
	 .addField("Full Username", `${message.mentions.users.first().username}#${message.mentions.users.first().discriminator}`)
	 .addField("ID", message.mentions.users.first().id, true)
	 .addField("Created At", message.mentions.users.first().createdAt);
	 
 message.channel.send({embed})
}

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
