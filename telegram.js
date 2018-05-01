const Telegraf = require('telegraf')
TOKEN = '410509983:AAF3kbJrAGKIrW6ceOdrUg-zLlk5Tuy-NhU'

const bot = new Telegraf('545192289:AAEprkuvYU866H3hx1UFrf4h7ZhsoTC-uBQ')

const replies = require('./replies')

const getReplyToMessageId = ctx =>(
    ctx.message.reply_to_message ? ctx.message.reply_to_message.message_id : null
)

const sendReply =(ctx, reply) =>{
    let replyMethod = {
        text: ctx.reply,
        gif: ctx.replyWithDocument(),
        sticker: ctx.replyWithSticker
    }[reply.type]

    replyMethod(reply.value,{
        reply_to_message_id : getReplyToMessageId(ctx)
    })
}
bot.command('list',ctx =>{
    ctx.reply(
        'Available triggers:\n\n'+Object.keys(replies).join('\n')
        //console.log(`Message Triggered`)
    )
    console.log(`Hi`)
})
bot.on('text',ctx =>{
    let cmd = ctx.message.text.toLowerCase()
    if(cmd in replies)
        sendReply(ctx,replies[cmd])
})


bot.startPolling();