let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
//https://api.lolhuman.xyz/api/random/ppcouple?apikey=RFK-Rey
m.reply(wait)

let res = await fetch(global.API('lol', `/api/random/ppcouple?`, {}, 'apikey'))
let json = await res.json()

conn.sendFile(m.chat, json.result.male, 'ppcowo.png', 'Cowok', m, false,{ contextInfo: { forwardingScore: 999, isForwarded: true }})

conn.sendFile(m.chat, json.result.female, 'ppcewe.png', 'Cewek', m,false, { contextInfo: { forwardingScore: 999, isForwarded: true }})

conn.sendButton(m.chat, 'Klik Button Di Bawah Untuk Dapat Kan Foto Nya', '© Ziv San', 'Get Again', '.ppcp', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['internet', 'anime']
handler.command = /^(pp(cp|couple))$/i
handler.limit = true

module.exports = handler
