const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let embed = new Discord.RichEmbed() 
   
    .setAuthor(message.guild, message.guild.iconURL)
    .setThumbnail(message.guild.iconURL)
    .setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16))
    .addField("Name",`${message.guild}`,true)
    .addField("ID",`${message.guild.id}`,true)
    .addField("Owner",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`,true)
    .addField("Members",`${message.guild.memberCount}`,true)
    .addField("Region", `${message.guild.region}`, true)
    .addField("Created", `${message.guild.createdAt}`)
    // .addField("Channels", `#serverinfo **|** #welcome-farewells **|** #announcements **|** #updates **|** suggest-logs **|** #staff-chat **|** #mod-logs **|** #general **|** #suggestions **|** #bot-corner **|** #bot-features (Only Acezus can access it) `)
//    .addField("Roles", message.guild.roles.findAll("name", "CraneBot","name", "Ace"))
    // .addField("Roles", `CraneBot **|** Acezus **|** Head Staff **|** Staff **|** Moderators **|** Helpers **|** Testers`)
//  .addField("Bot Creator", "**Acezus#8392**")
    .setFooter("Type in $$help for more commands!")
    .setTimestamp(new Date());
     message.channel.sendEmbed(embed);
};
module.exports.help = {
    name:"server"
}