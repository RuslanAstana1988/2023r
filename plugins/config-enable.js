let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒`,
rows: [
{title: "✨ | ПРИВЕТСТВИЕ", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} приветствие`},
{title: "🌎 | ПУБЛИЧНЫЙ", description: "БОТ СТАНОВИТСЯ ПУБЛИЧНЫМ ИЛИ ЧАСТНЫМ ИСПОЛЬЗОВАНИЕМ", rowId: `${usedPrefix + command} публичный`},
{title: "🥵 | МЕДИЯ 18+", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ +18", rowId: `${usedPrefix + command} медия+18`},
{title: "🔗 | АНТИ ССЫЛКА", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} антиссылка`},   
{title: "🔗 | АНТИ ССЫЛКА 𝟸", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} антиссылка2`},    
{title: "🔎 | ОБНАРУЖИТЬ", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} обнаружить`},      
{title: "❗ | ОГРАНИЧИТЬ", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} ограничить`},    
{title: "☑️ | АВТО ЧТЕНИЕ", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} авточтение`},
{title: "🔊 | АУДИО", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} аудио`},
{title: "👾 | АВТО СТИКЕР", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} автостики`},
{title: "💬 | БЛОК", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} блок`},
{title: "🏢 | ТОЛЬКО ГРУППЫ", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} толькогруппа`},
{title: "❌ | АНТИВИДЕНЬЕ", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} антивидение`},
{title: "📵 | ПРОТИВОУГОННЫЙ", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ ", rowId: `${usedPrefix + command} противоугонный`},
{title: "💬 | ЧАСТНЫЙ", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} частный`},
{title: "🤬 | АНТИ ТОКСИЧНЫЙ", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} антитоксичный`},
{title: "🕸️ | АНТИТРАБА", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} антитраба`},
{title: "👎🏻 | АНТИ ИНДУС", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} антииндус`}, 
{title: "🤖 | МОДЕ БОТ", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} модебот`}, 
{title: "👑 | ТОЛЬКО АДМИН", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} толькоадмин`},    
]}, ]

//let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `┏━━━━━━━━━━━━━┓
┣ ඬ⃟ℹ️ _${usedPrefix}включить *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *публичный*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *публичный*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *медия+18*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *медия+18*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антиссылка*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антиссылка*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антиссылка2*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антиссылка2*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *обнаружить*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *обнаружить*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *ограничить*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *ограничить*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *блок*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *блок*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *толькогруппа*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *толькогруппа*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *авточтение*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *авточтение*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *аудио*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *аудио*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антивидение*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антивидение*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *автостикер*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *автостикер*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *противоугонный*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *противоугонный*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *частный*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *частный*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антитоксичный*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антитоксичный*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антитраба*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антитраба*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антиарабики*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антиарабики*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *обморочный*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *обморочный*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *толькоадмин*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *толькоадмин*_
┗━━━━━━━━━━━━━┛`,
title: null,
buttonText: "СТРОКА КОМАНД БЛЯ ГРУППЫ",
sections }

let isEnable = /true|включить|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'приветствие':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'обнаружить':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'удаление':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('rowner', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'антиудаление':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'публичный':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'антиссылка':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'антиссылка2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'антивидение':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'медия+18':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'автостики':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('owner' , m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'толькоадмин':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
chat.autosticker = isEnable          
break
case 'аудио':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'ограничить':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'мак':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'авточтение':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'блок':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'обморочный':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'противоугонный':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'частный':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'антитоксичный':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
bot.antiPrivate = isEnable
break
case 'модебот':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.modejadibot = isEnable
break  
chat.antiToxic = isEnable
break
case 'антитраба':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'антииндус':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `🗂️ ВЫБОР: ${type} 
🎚️ КОМАНДА: ${isEnable ? 'ВКЛЮЧИНА' : 'ОТКЛЮЧИНА'}
📣 ДЛЯ: ${isAll ? 'ЭТОТ БОТ' : isUser ? '' : 'ЭТОТ ЧАТ'}`, author, null, [[`${isEnable ? '✖️ ОТКЛЮЧИТЬ ✖️' : '✔️ ВКЛЮЧИТЬ ✔️'}`, `${isEnable ? `#выключить ${type}` : `#включить ${type}`}`], ['👾 ГЛАВНОЕ МЕНЮ 👾', '#menu']], m)}
handler.help = ['вкл', 'выкл'].map(v => v + 'ючить <option>')
handler.tags = ['group', 'owner']
handler.command = /^((вк|вык)лючить|(tru|fals)e|(turn)?[01])$/i
export default handler
