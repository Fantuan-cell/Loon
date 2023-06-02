/*
站长素材每日签到脚本

更新时间: 2023年6月2日10:53:46

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
    }else if(data.indexOf("<script")!=-1){
        
        result = data.match(/Success\('(.*?)'[\s|\S]+msg":"(签到.*?)",/);
        msg = result[1]+"\n"+result[2];
        console.log(msg);
        $notification.post("站长素材每日签到\n","",msg);
    }
    else{
        data=JSON.parse(data);
        msg = data["msg"];
        console.log(msg);
        $notification.post("站长素材每日签到","",msg);
    }
    $done();
});
}

ZzscCheck();
