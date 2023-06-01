/**
#loon
[Script]
http-request ^
https:\/\/www\.zztuku\.com\/user-signin\.html  requires-body=true,script-path=https://raw.githubusercontent.com/Fantuan-cell/Loon/main/Js/zzsc/zzsc_cookie.js

[MITM]
hostname = ztuku.com 

*/
GetZzscCookie();
function GetZzscCookie(){
    const HeaderRaw = $request.headers;
    const RawCookies = HeaderRaw.cookie;

    if(RawCookies != undefined){

        if($persistentStore.write(RawCookies,'ZzscCookie')){
            console.log("站长素材Cookie写入成功:\n"+RawCookies);
            $notification.post("站长素材-Cookie","","写入Cookie成功");
        }else{
            console.log("站长素材Cookie写入失败:");
            $notification.post("站长素材-Cookie","","写入Cookie失败"); 
        }
    
    }else{
        console.log("站长素材Cookie写入失败:");
        $notification.post("站长素材-Cookie","","写入Cookie失败"); 
    }

}

