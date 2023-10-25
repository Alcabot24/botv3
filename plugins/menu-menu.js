import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  let txt = `
┏━━━━━━━━━━━━━━━━┓
┣ *[  𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝙇𝘾𝘼 💀]*
┣* 𝘾𝙍𝙀𝘼𝘿𝙊𝙍* : *𝙰𝚕𝚌𝚊 𝚅𝚎𝚗𝚝𝚊𝚜*
┣* 𝘾𝙊𝙉𝙏𝘼𝘾𝙏𝙊* : *𝚠𝚊.𝚖𝚎/𝟻𝟸𝟾𝟸𝟺𝟷𝙾𝟻𝙾𝟸𝟸𝟾*
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┣*[ 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝘿𝙈𝙄𝙉𝙄𝙎𝙏𝙍𝘼𝘿𝙊𝙍𝙀𝙎 💀]*
┗━━━━━━━━━━━━━━━━┛
┣🏴‍☠️ _.𝚜𝚊𝚌𝚊𝚛 | 𝚋𝚊𝚗 | 𝚔𝚒𝚌𝚔_
┣🏴‍☠️ _.𝚐𝚛𝚞𝚙𝚘 *𝚊𝚋𝚛𝚒𝚛 : 𝚌𝚎𝚛𝚛𝚊𝚛*_
┣🏴‍☠️ _.𝚐𝚛𝚘𝚞𝚙 *𝚘𝚙𝚎𝚗 : 𝚌𝚕𝚘𝚜𝚎*_
┣🏴‍☠️ _.𝚍𝚊𝚛𝚊𝚍𝚖𝚒𝚗*@𝚝𝚊𝚐*_
┣🏴‍☠️ _.𝚚𝚞𝚒𝚝𝚊𝚛 *@𝚝𝚊𝚐*_
┣🏴‍☠️ _.𝚋𝚊𝚗𝚌𝚑𝚊𝚝_
┣🏴‍☠️ _.𝚞𝚗𝚋𝚊𝚗𝚌𝚑𝚊𝚝_
┣🏴‍☠️ _.𝚋𝚊𝚗𝚞𝚜𝚎𝚛 *@𝚝𝚊𝚐*_
┣🏴‍☠️ _.𝚊𝚍𝚖𝚒𝚗𝚜 *𝚝𝚎𝚡𝚝𝚘*_
┣🏴‍☠️ _.𝚒𝚗𝚟𝚘𝚌𝚊𝚛 *𝚝𝚎𝚡𝚝𝚘*_
┣🏴‍☠️ _.𝚗𝚎𝚠𝚍𝚎𝚜𝚌 *𝚝𝚎𝚡𝚝𝚘*_
┣🏴‍☠️ _.𝚋𝚒𝚎𝚗𝚟𝚎𝚗𝚒𝚍𝚊 *𝚝𝚎𝚡𝚝𝚘*_
┣🏴‍☠️ _.𝚍𝚎𝚜𝚙𝚎𝚍𝚒𝚍𝚊 *𝚝𝚎𝚡𝚝𝚘*_
┣🏴‍☠️ _.𝚎𝚗𝚊𝚋𝚕𝚎/𝚍𝚒𝚜𝚊𝚋𝚕𝚎 *𝚠𝚎𝚕𝚌𝚘𝚖𝚎*_
┣🏴‍☠️ _.𝚎𝚗𝚊𝚋𝚕𝚎/𝚍𝚒𝚜𝚊𝚋𝚕𝚎 *𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔*_
┣🏴‍☠️ _.𝚎𝚗𝚊𝚋𝚕𝚎/𝚍𝚒𝚜𝚊𝚋𝚕𝚎 *𝚖𝚘𝚍𝚘𝚊𝚍𝚖𝚒𝚗*_
┣🏴‍☠️ _.𝚎𝚗𝚊𝚋𝚕𝚎/𝚍𝚒𝚜𝚊𝚋𝚕𝚎 *𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝*_
┣🏴‍☠️ _.𝚎𝚗𝚊𝚋𝚕𝚎/𝚍𝚒𝚜𝚊𝚋𝚕𝚎 *𝚊𝚗𝚝𝚒𝚝𝚘𝚡𝚒𝚌*_
┏━━━━━━━━━━━━━━━━┓
┣*[ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎/𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 💀💀
┗━━━━━━━━━━━━━━━━┛
┣🏴‍☠️ _.𝚙𝚕𝚊𝚢 *𝚝𝚎𝚡𝚝𝚘*_
┣🏴‍☠️ _.𝚜𝚝𝚒𝚌𝚔𝚎𝚛 | 𝚜 *𝚒𝚖𝚊𝚐𝚎𝚗*_
┗━━━━━━━━━━━━━━━━┛
*⛔️𝙲𝚄𝙰𝙻𝚀𝚄𝙸𝙴𝚁 𝙳𝚄𝙳𝙰 𝙼𝙰𝙽𝙳𝙰𝚁 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙰𝙻 𝙿𝚁𝙸𝚅𝙰𝙳𝙾 𝙶𝚁𝚇*`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen4, "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: m});
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|comandos|menú|help|cmd)$/i;
export default handler;
