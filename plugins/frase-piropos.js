/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

let handler = async (m, { conn, text}) => {

m.reply(`*╔═══════════════════════════*\n➢ *"${pickRandom(global.piropo)}"*\n*╚═══════════════════════════*`)
}
handler.tags = ['frases']
handler.command = ['piropo']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.piropo = ["Я хотел бы быть бумагой, чтобы иметь возможность обернуть этот шоколад.", "Ты как вайфай без пароля, тебя все ищут", "Я хотел бы автобусом, чтобы пройти по изгибам твоего сердца.", "Я хотел бы быть маслом, чтобы скользить по твоему телу.", "Если бы красота была грехом, ты бы уже была в аду..", "Я хотел бы быть котом, чтобы провести 7 жизней рядом с тобой.", "Воровать нехорошо, но поцелуй из твоих губ украл бы у тебя.", "Как прекрасно небо, когда оно чистое, но еще прекраснее любовь, когда ты рядом со мной."]
