	const Discord = module.require("discord.js");

    module.exports.run = async (client, message, args) => {

        if(message.member.roles.some(r=>["Mentor", "Important to Canon"].includes(r.name)))
    {{{
        let embed = new Discord.RichEmbed()
		.setThumbnail("https://t6.rbxcdn.com/ee20266dc962d52904f91684b4ffcfc1")
		.setColor("#FFFFFF")
		
		.addField("Ranks of the Brotherhood", 
		"**Low:** Novice; Servant; Assistant; Soldier; Disciple; Mercenary; 																																																								**Middle:** Warrior; Veteran; Master; 																																																														   **High:** Assassin; Elite Assassin; Grand Assassin; Elder Assassin; Master Assassin; Arch Assassin; Dignitary; Mentor;", true)
		
		.addField("Forts of The Revolutionary Assassins", "[Outpost Faroe](https://www.roblox.com/games/957586006/Outpost-Faroe) - Currently the only fort of the Assassins.**Disclamer:** *All assests belong to Levantine Assassins Brotherhood and their deveolpers including but not limited to Solarical, Sk3let0n, Nekzus, Donnybrook, Akiyba and Matkovic*", true)
		
		.addField("Training Ares of The Revolutionary Assassins", "[Animus Island](https://www.roblox.com/games/995890337/Animus-Island) - This is the primary training grounds and only for The Revolutionary Assassins. All events are to be hosted here. Credit once again, to Levantine Assassins Brotherhood and their deveolpers.")

		.addField("Division Restrictions", "Just a heads up. You can only be in **ONE** main division and **TWO** sides max. Division ceremonies may occassionaly be hosted or Tryouts.\n\n**If you are a EA+ (Elder Assassin and up), you have permisson to join both Main Divisions**")

		.addField("Offical Divisions", 
		"**Main Divisions:** [Guards](https://www.roblox.com/Groups/group.aspx?gid=3388832); [Blades](https://www.roblox.com/My/Groups.aspx?gid=3388812) ;																																																																																																													**Side Divisions:** [Mentors Divisions](https://www.roblox.com/Groups/group.aspx?gid=3430246); [Scholars](https://www.roblox.com/Groups/group.aspx?gid=3439697); [Angels](https://www.roblox.com/My/Groups.aspx?gid=3499603)")

		.setFooter("Credits to Acezus#8392")
		.setTimestamp(new Date());
	message.channel.sendEmbed(embed);	
    }}} else{
        let fakeembed = new Discord.RichEmbed()
    .setColor("#F50000")
    .setDescription("Sorry you do not have the **_Mentor_** role!")
    .setTimestamp(new Date());
    message.channel.sendEmbed(fakeembed);

    }}
    

    module.exports.help = {
    name:"group"
    }
