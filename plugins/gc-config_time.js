/* Creditos a https://github.com/ALBERTO9883/NyanCatBot-MD */

let handler = async (m, { conn, isAdmin, isOwner, args, usedPrefix, command }) => {
  if (!(isAdmin || isOwner)) {
	  global.dfail('admin', m, conn)
          throw false
  }
  let isзакрыть = {
	  'открыть': 'not_announcement',
	  'buka': 'not_announcement',
      'on': 'not_announcement',
	  '1': 'not_announcement',
	  'закрыть': 'announcement',
	  'tutup': 'announcement',
      'off': 'announcement',
      '0': 'announcement',
  }[(args[0] || '')]
  if (isзакрыть === undefined) {
	  let caption = `
*• Ejemplo:*
*${usedPrefix + command} открыть 1*
*${usedPrefix + command} закрыть 1*
📌 *_Ejemplo de uso:_* *${usedPrefix + command} закрыть 1* 
*_🌿 Закрыть группу на час._*
`
      m.reply(caption)
	  throw false
  }
  let timeoutset = 86400000 * args[1] / 24
  await conn.groupSettingUpdate(m.chat, isзакрыть).then(async _=> {
	  m.reply(`⚠️ *_Grupo ${isзакрыть == 'announcement' ? 'cerrado' : 'abierto'} ${args[1] ? `durante *${clockString(timeoutset)}_*` : ''}`)
  })
  if (args[1]) {
	 setTimeout(async () => {
            await conn.groupSettingUpdate(m.chat, `${isзакрыть == 'announcement' ? 'not_announcement' : 'announcement'}`).then(async _=>{
		    conn.reply(m.chat, `${isзакрыть == 'not_announcement' ? '*El grupo ha sido cerrado, ¡ahora solo los administradores pueden enviar mensajes!*' : '*El grupo se ha abierto, ¡ahora todos los miembros pueden enviar mensajes!*'}!`)
	    })
        }, timeoutset)
  }
  }
handler.help = ['групповое время *<открыть/закрыть>* *<номер>*']
handler.tags = ['group']
handler.command = /^(групповое время|gctime)$/i

handler.botAdmin = true
handler.group = true 

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
