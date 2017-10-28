const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
 
// if(message.member.roles.some(r=>["Acezus", "Head Staff", "Staff", "Helpers"].includes(r.name)))

 if(message.mentions.users.size === 0) {
	return message.reply("You know, there is something called a 'mention', use it. Example: **@[USERNAME]**").catch(console.error);
}
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

module.exports.help = {
    name:"userinfo"
}