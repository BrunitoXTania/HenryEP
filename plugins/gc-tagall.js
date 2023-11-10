let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐢𝐭𝐬.𝐛𝐫𝐮𝐧𝐢𝐭𝐨𝐩: ${pesan}`

let teks = `𝐷𝑒𝑠𝑝𝑖𝑒𝑟𝑡𝑒𝑛, 𝑃𝑟𝑜𝑠𝑝𝑒𝑐𝑡𝑜𝑠 🇵🇪 \n\n❏ ${oi}\n❏ 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `💪🏻@${mem.id.split('@')[0]}\n`}
teks += `
➥ 𝐁𝐫𝐮𝐧𝐢𝐭𝐨𝐗𝐓𝐚𝐧𝐢𝐚`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
