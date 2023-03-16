let linkRegex = /https:/i
export async function before(m, { isAdmin, isBotAdmin, text }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0
}    
await conn.sendButton(m.chat, `*「 АНТИ ССЫЛКА 」*\n*ЭТУ ССЫЛКУ ЗАСУНЬ СЕБЕ В ЗАДНИЦУ 👋, ${await this.getName(m.sender)} НАРУШЕНИЕ ПРАВИЛА ГРУППЫ, ЗА ЭТО МЫ ЗАКИНЕМ ТЕБЯ В КОЛОДЕЦ С ДЕРЬМОМ...!!*${isBotAdmin ? '' : '\n\n*[❗ИНФО❗] БОТУ ПОХУЙ,КАК ТО ТАК*'}`, author, ['ОТКЛЮЧИТЬ АНТИССЫЛКУ', '/отключить антиссылку'], m)    
if (isBotAdmin && bot.restrict) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'удалить')
if (responseb[0].status === "404") return
} else if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] ВЛАДЕЛЕЦ БОТА НЕ ИМЕЕТ ВКЛЮЧЕНЫХ ОГРАНИЧЕНИИ (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) СКАЖИТЕ ЕМУ ЧТОБЫ ВКЛЮЧИЛ ИХ*')
}
return !0
}
