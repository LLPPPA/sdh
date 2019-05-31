const {Client, Attachment} = require('discord.js')
const bot = new Client();

const token = 'NTg0MDM0MTg3NjU3NDc4MTg3.XPFIbA.HonxI-YMRee4VVC72AQLpiz-d2w';

const PREFIX = '&&';

bot.on('ready', () =>{
    console.log('This bot is online~~')
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "新進成員");
    if (!channel) return

    channel.send(`歡迎加入惠惠教! ${member}`)

})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'jokes':
            message.channel.sendMessage('')
            break;
        case 'youtube':
            message.channel.sendMessage('Please Subscribe to https://www.youtube.com/channel/UCevdVRFtMR2HIcyMo2eKD4Q?view_as=subscriber')
            break;
            case 'explosion':
                    const attachment = new Attachment('https://i.ytimg.com/vi/O4tbOvKwZUw/maxresdefault.jpg')
                    message.channel.send(message.author, attachment);
            break;
        case 'info': 
            if(args[1] === 'help'){
                message.channel.sendMessage('love u')
            }else{
                message.channel.sendMessage('What are you taking about??')
                
            }
            break; 

    }
})


bot.login(token);