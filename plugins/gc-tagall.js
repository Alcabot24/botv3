const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝗠𝗘𝗡𝗦𝗔𝗝𝗘:* *𝗔𝗟𝗖𝗔𝗕𝗢𝗧²|𝗡𝗘𝗪*`;
  let teks = `*𝗠𝗘𝗡𝗖𝗜𝗢𝗡 𝗚𝗘𝗡𝗘𝗥𝗔𝗟*\n\n *𝗔𝗟𝗖𝗔𝗕𝗢𝗧²|𝗡𝗘𝗪✨* \n\n🫰🏻 *𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔𝗦:*\n`;
  for (const mem of participants) {
    teks += `👤 @${mem.id.split('@')[0]}\n`;
  }
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
