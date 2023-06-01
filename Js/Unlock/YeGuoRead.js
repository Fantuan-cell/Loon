/*

http-response ^https:\/\/yeguo\.236api\.com\/v1\/my\/info$  requires-body=true,script-path=https://raw.githubusercontent.com/Fantuan-cell/Loon/main/Js/Unlock/YeGuoRead.js

*/
url = $response.url;
host = ""
var body = $response.body;;

var hack = /vip_end_date":\d+/g;

body = body.replace(hack,'vip_end_date":99999999');
if(url =="https:\/\/yeguo.236api.com\/v1\/my\/info"){
    var name = /nickname":".*?",/g;
    body = body.replace(name,`nickname":"Mny",`);
}
$done({
    body:JSON.stringify(body)
});

