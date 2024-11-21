const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348065747405";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_13_11_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg5LFxuICAgICAgICA3NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgODcsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDcwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDksXG4gICAgICAgIDExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NixcbiAgICAgICAgMjI3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NixcbiAgICAgICAgMjA1LFxuICAgICAgICA3NixcbiAgICAgICAgMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg2LFxuICAgICAgICA1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDg2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDgzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIklDNVM1Mm1obDNMV3Rkd1Y2a055cWJiY0psQjZNMFVUMFpTcE9QZ1YwckE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFVYzBkcmdLUnRxaGpsX2M2UDU4ZWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWNjMTY3NWUtYjNkZi00MDNkLWI2MDAtMDU2NjZhZmZhZjM3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDI4LFxuICAgICAgMTIzLFxuICAgICAgMjU0LFxuICAgICAgNDEsXG4gICAgICAyLFxuICAgICAgOTIsXG4gICAgICAxMTQsXG4gICAgICA4MixcbiAgICAgIDY2LFxuICAgICAgOTksXG4gICAgICAyNDUsXG4gICAgICAxMDIsXG4gICAgICAyMzMsXG4gICAgICAxNjIsXG4gICAgICAxOSxcbiAgICAgIDEyNSxcbiAgICAgIDIzOSxcbiAgICAgIDEzMyxcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICA0NyxcbiAgICAgIDI0OSxcbiAgICAgIDE1LFxuICAgICAgMjE4LFxuICAgICAgMTgyLFxuICAgICAgMTAyLFxuICAgICAgMTg3LFxuICAgICAgMjIyLFxuICAgICAgMTUzLFxuICAgICAgNDksXG4gICAgICAzNSxcbiAgICAgIDQ5LFxuICAgICAgMTUyLFxuICAgICAgMTI2LFxuICAgICAgOCxcbiAgICAgIDEyMixcbiAgICAgIDIwOSxcbiAgICAgIDExOCxcbiAgICAgIDc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpIMU0zOUM4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY1NzQ3NDA1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUdWhhbmFzIEtpdGNoZW4gQW5kIFNjZW50XCIsXG4gICAgXCJsaWRcIjogXCIxMjgzNDY2NzU1Mjc3NDY6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPZnBrTlVERUpXQS9ia0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZzT3FnSVUwUHBLUTE4a0Q2bnRaODBXNHJ1VlZwYjdEUExzMmJpalduRUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVSs1M01aYXR5OGtoSWZwU282LzhiMlJJbkdwN1U2M1VDUDVHT1hpSU1IUS9rRTBZTkc0azUwamFJcTVBbjJlRFhQc0ppeVhaMVdibTVTb0dIYU9DQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibEY3emMwcWFBekxTbThjbUhYWVZqZllTZGFhRWcvenJiNjhma3Fab3BEOXhsRkV5b0E3N3hQZ3hPc1l3RWlPYVlTNXYwVkVmMlV1ajFaYUpzemtwamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2NTc0NzQwNTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMTk4NDI2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWlBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNaUEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVbjJBL0hsQkdQU0pkY2FoNVNiTFptVjlHS0ZDOVpkcmwrK3ZKZElJbjFZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk4MzgzOTk3NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI3NjEyMDMxMDc3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
