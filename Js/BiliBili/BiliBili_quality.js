#!name = Bilibili去广告


[Script]
# 解锁4K画质及1080P高码率 //app.bilibili.com
http-response ^https:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\? script-path = https://raw.githubusercontent.com/Fantuan-cell/Loon/main/Js/Bilibili_vip.js, requires-body = true,,timeout=30,tag=哔哩哔哩高画质, enabled=true


[MITM]
hostname = app.bilibili.com
