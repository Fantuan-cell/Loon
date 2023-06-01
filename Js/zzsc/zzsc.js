/*
站长素材每日签到脚本

更新时间: 2023年6月1日21:21:14

*/
const date = new Date();
const Cookie = $persistentStore.read(["ZzscCookie"]);

function ZzscCheck(){
if(Cookie ==undefined){
    console.log("站长素材Cookie关键授权字段缺失, 需重新获取!");
    $notification.post("站长素材","","Cookie关键授权字段缺失, 需重新获取!")
    $done();
};
const Headers = {
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "X-Requested-With":"XMLHttpRequest",
    "Referer":"https://www.zztuku.com",
    "Cookie":Cookie
}
var params = {
    url:"https://www.zztuku.com/user-signin.html",
    headers:Headers

}
$httpClient.post(params,function(error, response, data){
    if(response.status !=200){
        console.log(response.status);
        $notification.post("站长素材每日签到失败","",msg);
        $done();
    }else{
        console.log(data);
        data=JSON.parse(data);
        msg = data["msg"];
        $notification.post("站长素材每日签到","",msg);
    }
    $done();
});
}

ZzscCheck();
