let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { antiToxic, antiTraba, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `*「 ИНФОРМАЦИЯ О ГРУППЕ 」*\n группа для развлечения и общения, хуйню не кидаем (порно видео,политика,любое насилие ЗАПРЕЩЕННО)
*𝙸𝙳𝙴𝙽𝚃𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾:* 
${groupMetadata.id}

*ОПИСАНИЕ:* 
${groupMetadata.subject}

*𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* 
${groupMetadata.desc?.toString() || '𝚂𝙸𝙽 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽'}

*𝚃𝙾𝚃𝙰𝙻 𝙳𝙴 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴𝚂:*
${participants.length} Participantes

*𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾:* 
@${owner.split('@')[0]}

*АДМИНЫ ГРУППЫ:*
${listAdmin}

*𝙾𝙿𝙲𝙸𝙾𝙽𝙴𝚂 𝙰𝚄𝚃𝙾𝙼𝙰𝚃𝙸𝙲𝙰𝚂:*
—◉ ПРИВЕТСТВИЕ: ${приветствие ? '✅' : '❌'}
—◉ ОБНОРУЖЕНИЕ: ${обноруженние ? '✅' : '❌'} 
—◉ АНТИССЫЛКА: ${антиссылка ? '✅' : '❌'} 
—◉ АНТИССЫЛКА 2: ${антиссылка ? '✅' : '❌'} 
—◉ РЕЖИМ: ${ режим ? '✅' : '❌'} 
—◉ : ${autosticker ? '✅' : '❌'} 
—◉ АУДИО: ${аудио ? '✅' : '❌'} 
—◉ 𝙰𝙽𝚃𝙸𝚅𝙸𝙴𝚆𝙾𝙽𝙲𝙴: ${antiviewonce ? '✅' : '❌'} 
—◉ 𝙰𝙽𝚃𝙸𝚃𝙾𝚇𝙸𝙲: ${antiToxic ? '✅' : '❌'} 
—◉ 𝙰𝙽𝚃𝙸𝚃𝚁𝙰𝙱𝙰: ${antiTraba ? '✅' : '❌'} 
—◉ ТОЛЬКОАДМИНЫ: ${толькоадмины ? '✅' : '❌'} 
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(инфогруппы|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
