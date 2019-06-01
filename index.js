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
        case 'rule':
            message.channel.sendMessage(`
            Rules 規則
            
            [1] » 互相尊重，不要亂講話，不要亂嘴人，不要罵人。
            
            [2] »  如果沒有請跟 YT管理員 要身分組～
            
            [3] » 不要跟管理員要東西或請管理員拉你進入任何地方
            
            [4] » 再不犯任何規則的情況下都可以隨便的聊天
            
            [5] » 禁止隨意貼連結
            
            [6] » 禁止傳送18+的東西
            
            [7] » 沒事不要傳沒有無異議的照片
            
            [8] » 如果有打錯別人的名子請自行更改
            
            [9] » 禁止大量TAG別人
            
            [10] » 請求幫助時具體說明
            
            [11] » 禁止洗頻
            
            [12] » 不要過度說髒話 (一點點沒有關係)
            
            [13] » 禁止宣傳
            
            [14] » 請勿使用任何分身帳戶
            
            [15] » 禁止開自以為好笑的玩笑
            
            [16] » 還有更多的規則會添加!
            
            [17] » 禁止以任何形式威脅或者恐嚇別人做特別的事或阻止別人做的事`)
            break;

    }
})


bot.login(token);
