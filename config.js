import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.owner = [
  ['201016948771', '👑 𝒎𝒂𝒉𝒎𝒐𝒖𝒅 - 𝒕𝒂𝒓𝒃𝒐𝒐 👑', true],
  ['201016948771', '💫 𝑀𝐴𝐻𝑀𝑂𝑈𝐷 - 𝐾𝐿𝐸𝑉𝐸𝑅 💫', true],
  ['201016948771', '💫 ᗰᗩⴼᗰσᵿƊ - 𝐓𝐀𝐑𝐁𝐎𝐎⃤ 💫', true],
  ['201016948771', '💫 𝒎𝒂𝒉𝒎𝒐𝒖𝒅 - ᴷᴸᴱᵛᴱᴿ 💫', true],
  ['201016948771', '💫 𝑀𝐴𝐻𝑀𝑂𝑈𝐷 - 𝒕𝒂𝒓𝒃𝒐𝒐 💫', true],
  ['201016948771', '💫 𝒎𝒂𝒉𝒎𝒐𝒖𝒅 - • ᏦᏝᏋᏉᏋᏒ 💫', true],  
  ['201016948771', '💫 ┇𝑇𝐴𝑅𝐵𝑂𝑂  ⁽͢͢💕⇣ ˓ -', true],
  ['201016948771', '💫 ⊰ ₭ŁＥѵＥᏒ ،⁞ ²⁰⁰² 😻❤️⇣˓', false],
  ['201016948771'],
  ['201016948771'],
  ['201016948771'],
  ['201016948771'],	
  ['201016948771'],
  ['201016948771'],
  ['201016948771']
] 

global.suittag = ['201016948771'] 
global.prems = ['201016948771'] 

global.packname = '(☞ﾟ∀ﾟ)☞'
global.author = '┇𝑇𝐴𝑅𝐵𝑂𝑂 - 𝙱𝚘𝚝★'
global.wm = '┋𝐊𝐋𝐄𝐕𝐄𝐑┋- 𝙱𝚘𝚝★'
global.igfg = '𝑀𝐴𝐻𝑀𝑂𝑈𝐷 - 𝙱𝚘𝚝★'
global.wait = '*[❗] استني...*'

global.imagen1 = fs.readFileSync('./Menu2.jpg')
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png')
global.imagen4 = fs.readFileSync('./Menu.png')

global.mods = [] 

//********Tiempo***************
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('es', { month: 'long' })
global.año = d.toLocaleDateString('es', { year: 'numeric' })
global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
//*****************************
global.wm2 = `▸ ${dia} ${fecha}\n▸ 𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝`
global.gt = '⁽♔₎┋𝐊𝐋𝐄𝐕𝐄𝐑 ┋: - 𝙱𝚘𝚝★'
global.mysticbot = '⁽♔₎┋𝐊𝐋𝐄𝐕𝐄𝐑 ┋: - 𝙱𝚘𝚝★'
global.md = 'https://github.com/BotKleverX/Klever_X_Bot_WhatsApp'
global.mysticbot = 'https://github.com/BotKleverX/Klever_X_Bot_WhatsApp'
global.waitt = '*[❗] استني...*'
global.waittt = '*[❗] استني...*'
global.waitttt = '*[❗] استني...*'
global.nomorown = '201016948771'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']
global.cmenut = '❖––––––『'
global.cmenub = '┊✦ '
global.cmenuf = '╰━═┅═━––––––๑\n'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.dmenut = '*❖─┅──┅〈*'
global.dmenub = '*┊»*'
global.dmenub2 = '*┊*'
global.dmenuf = '*╰┅────────┅✦*'
global.htjava = '⫹⫺'
global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'
global.comienzo = '• • ◕◕════'
global.fin = '════◕◕ • •'
global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}` //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {key: { participant : '0@s.whatsapp.net'}, message: { "videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}}
global.multiplier = 99
//*************************

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)})
