let handler = async (m, { conn, args, usedPrefix, command }) => {
let isзакрыть = { // Switch Case Like :v
'открыть': 'not_announcement',
'закрыть': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'открыть': 'not_announcement',
'закрывать': 'announcement',
}[(args[0] || '')]
if (isзакрыть === undefined)
throw `
*[❗] 𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙴𝚁𝚁𝙾𝙽𝙴𝙾!!*

*┏━━━❲ ✨𝙴𝙹𝙴𝙼𝙿𝙻𝙾✨ ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} открыть*
*┠┉↯ ${usedPrefix + command} закрывать*
`.trim()
await conn.groupSettingUpdate(m.chat, isзакрыть)
{m.reply('*[ ✔ ] ГРУППА НАСТРОЕНА*')}
}
handler.help = ['group открыть / закрыть', 'группа открыта / закрывать']
handler.tags = ['group']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true
export default handler
