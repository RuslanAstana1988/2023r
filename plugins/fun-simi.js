import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❗] ЧЁ НАДО,БЕЗДЕЛЬНИК*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} привет бот*`
try {
let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
let json = await res.json()
m.reply(json.success)
} catch {
let res2 = await fetch(`https://api.phamvandien.xyz/sim?type=ask&ask=${text}`)  
let json2 = await res2.json()
let result = json2.answer  
/*let res2 = await fetch(`https://violetics.pw/api/utility/simsimi?apikey=beta&text=${text}`)  
let json2 = await res2.json()
let result = json2.result*/
let lol = await translate(`${result}`, { to: 'es', autoCorrect: true })
m.reply(lol.text)
}}
handler.help = ['simi', 'bot'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|бот|alexa|cortana)$/i
export default handler
