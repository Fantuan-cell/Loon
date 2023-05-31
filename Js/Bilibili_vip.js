/*
引用地址：https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/bilibili/bili.js
*/
// 2023-05-19 14:48

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);


if (url.includes("/x/v2/account/myinfo")) {
  // 会员清晰度
  if (obj.data.vip.status === 1) {
    $done({});
  } else {
    obj.data.vip.type = 2;
    obj.data.vip.status = 1;
    obj.data.vip.vip_pay_type = 1;
    obj.data.vip.due_date = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
    obj.data.vip.role = 3;
  }
}

$done({ body: JSON.stringify(obj) });

// 修复pos
function fixPos(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].pos = i + 1;
  }
}
