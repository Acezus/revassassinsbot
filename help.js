const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => { 
    let embed = new Discord.RichEmbed()
    .setTitle("Help Panel")
    .setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16))
    .setThumbnail(message.guild.iconURL)
    .setDescription("Look who needs help now. I'm only messing with ya! Should've saw your face. Anyway, commands are simple! Find any bugs? Direct message `Acezus#8392` and he should get it sorted out!")
    .addField("Prefix", "**Prefix:** $$")
    .addField("Commands", "**$$help** - Using it right now.\n\n**$$server** - Will give you the infomation on the server! (members, regions, roles[WIP] etc.)\n\n**$$userinfo** - You'll need to mention somewhere, to get their info, like what time they created the account.\n\n**$$funds** - Used incase if you need to be donated!\n_USE THIS COMMAND WHEN YOU NEED TO BE FUNDED FOR ANY OF THE UNIFORMS!_")
    // .addField("Moderation Commands", "**$$ban** - This command is only used for moderators, a quicker way to ban someone. Need to mention and give a reason why.\n\n**$$kick** - This command is only used for moderators, a quicker way to ban someone. Need to mention and give a reason why.\n\n**$$sug** - Where you suggest on what you think should be added to the bot!\n\n **$$panel** - Still a work in progress command, but only Staff Members can use it!")
    // .addField("CraneBot's Official Server", "Join us if you need help with anything: https://discord.gg/YFPmRH9");
    
    //Now we want it so it sends via DM!
    message.author.sendEmbed(embed)
};


module.exports.help = {
    name:"help" 
}
