const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

let robux = message.content.split(" ").slice(1).join(" ");
let rologs = client.channels.find("name", "robux-logs");
let reason = message.content.split(" ").slice(2).join(" ");	


  if(!rologs) return message.reply("I've detected that this server dosn't have a robux-logs text channel!");
  if(!robux) return message.reply("You must add a integer, on how mow robux you need!");

  
  const roembed = new Discord.RichEmbed()
  .setAuthor(`Robux Log`, message.author.displayAvatarURL)
  .setColor("06F500")
  .addField("Robux Infomation (Only for Uniform!)", `**User:** ${message.author.username}#${message.author.discriminator}\n**Robux:** ${robux}`)
  .setTimestamp(new Date());
 rologs.send({
        embed : roembed  
 })
}

module.exports.help = {
    name:"funds"
}