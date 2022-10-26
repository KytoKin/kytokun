let handler = async (m, { conn, text, usedPrefix, command }) => {
	let nimek = await neonimesearch(text)
	let rows = []
	for (var z of nimek) {
		let klik = {
        title: z.title,
		    description: z.episode,
	 	    rowId: z.url
		}
		rows.push(klik)
		}
	let button = {
		buttonText: 'LIST STORE',
		description: 'Berikut daftar Menu yg Ada di List store...',
		footerText: wm
	}
	conn.sendListM(m.chat, button, rows, m)
}
handler.help = ['lilst'].map(v => v + ' <pencarian>')
handler.tags = ['admin']
handler.command = /^(lilst)$/i

module.exports = handler

let axios = require('axios') 
let cheerio = require('cheerio')
async function neonimesearch(text) {
		return new Promise(async(resolve) => {
			try{
				const {data} = await axios.get(`https://neonime.cloud/page/1/?s=${text}`)
				const $ = cheerio.load(data)
				const result = []
				$('#contenedor').find('div.item_1.items > div').each(function(){
					result.push({
						title: $(this).find('a > div > span').text(),
						episode: $(this).find('div.fixyear > h2').text(),
						url: $(this).find('a').attr('href')
					})
				})
				const filter = result.filter(p => p.title && p.episode.includes('Episode'))
				resolve(filter != '' ? {
					status: true,
					author,
					query,
					page,
					result: filter
				} : {
					status: false,
					author,
					query,
					page,
					message: 'not found'
				})
			}catch(e){
				resolve({
					status: 404,
					query,
					page,
					message: 'Page not found!'
				})
			}
		})
	}
