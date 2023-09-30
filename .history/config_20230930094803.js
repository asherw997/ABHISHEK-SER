import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['916909082969', 'HIM', true],
  [''],
  [''] 
] //Number of owners

global.mods = ['916909082969','201206222558'] 
global.prems = ['918700904760', '201014504589', '919080896537', '919002370263', '917398829969', '919934939700', '916909082969']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'Homosexual Bot'
global.premium = 'true'
global.packname = 'Zeus Bitchless' 
global.author = 'Naruto Dickless' 
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/ethan_unholy\n' 
global.dygp = 'https://chat.whatsapp.com/x'
global.fgsc = 'https://github.com/x/x' 
global.fgyt = 'https://youtube.com/x'
global.fgpyp = 'https://youtube.com/x'
global.fglog = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f3f9bd9-0673-4276-bb34-71ece2a5820e/dg3f5b8-269303dd-e0ef-4247-b64e-81a80971b5ee.png/v1/fit/w_828,h_1104,q_70,strp/nami__ai_art__by_3d1viner_dg3f5b8-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2MCIsInBhdGgiOiJcL2ZcLzlmM2Y5YmQ5LTA2NzMtNDI3Ni1iYjM0LTcxZWNlMmE1ODIwZVwvZGczZjViOC0yNjkzMDNkZC1lMGVmLTQyNDctYjY0ZS04MWE4MDk3MWI1ZWUucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.F8_W5Hj5OUUbZM1e8lLsD-6CpwYhIPw9r2wOQZnD2nQ' 

//imagen
global.imagen1 = fs.readFileSync('./src/Abhi.jpg')

//Dont Edit Danger Zone⚠️
global.wait = '*⌛ _Please Wait..._*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.mlc = '📃'
global.sdc = '🎶'
global.xmoji = '🔥' 
global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
