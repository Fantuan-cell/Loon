#!name = Bilibili去广告
#!desc = 过滤Bilibili广告、移除青少年模式弹窗和交互式弹幕、移除无用功能。


[Script]
# 解锁4K画质及1080P高码率 //app.bilibili.com
http-response ^https:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\? script-path = https://raw.githubusercontent.com/Fantuan-cell/Loon/main/Js/Bilibili_vip.js, requires-body = true, tag = 画质解锁


[MITM]
hostname = app.bilibili.com
