(function(_0x2c8d6f,_0x440f50){const _0x11ee88=_0x5755,_0xcff08b=_0x2c8d6f();while(!![]){try{const _0x5b0186=parseInt(_0x11ee88(0xaa))/0x1*(-parseInt(_0x11ee88(0xa3))/0x2)+parseInt(_0x11ee88(0xac))/0x3+parseInt(_0x11ee88(0xa0))/0x4*(-parseInt(_0x11ee88(0xa1))/0x5)+parseInt(_0x11ee88(0x90))/0x6+parseInt(_0x11ee88(0x8d))/0x7*(parseInt(_0x11ee88(0x8a))/0x8)+parseInt(_0x11ee88(0x92))/0x9*(-parseInt(_0x11ee88(0x8f))/0xa)+-parseInt(_0x11ee88(0xa8))/0xb;if(_0x5b0186===_0x440f50)break;else _0xcff08b['push'](_0xcff08b['shift']());}catch(_0x39487e){_0xcff08b['push'](_0xcff08b['shift']());}}}(_0x2e9e,0x44491));function _0x5755(_0x2a8a79,_0x4e7f9b){const _0x2e9e82=_0x2e9e();return _0x5755=function(_0x5755b0,_0x75b89b){_0x5755b0=_0x5755b0-0x85;let _0x57fe2b=_0x2e9e82[_0x5755b0];return _0x57fe2b;},_0x5755(_0x2a8a79,_0x4e7f9b);}import{logDebug}from'@/common/utils/log';import{NTQQUserApi}from'./user';import{selfInfo}from'../data';import{RequestUtil}from'@/common/utils/request';function _0x2e9e(){const _0x2124d2=['CQpFH','7tLXsUC','kiRrT','4981160WZblnc','364290UqbbUp','title','9lrfJki','p_skey','&ark=','tag','replace','HttpGetJson','signed_ark','JIWwG','bhmvW','tianxuan.imgJumpArk','jwipJ','oDcJc','eRNpy','preview','16ZEfBzT','37585BavLwB','ppRBA','83924tTMtop','sourcelogo','\x5c/\x5c/','CLqte','https://h5.qzone.qq.com/v2/vip/tx/trpc/ark-share/GenNewSignedArk?g_tk=','238007nWbniH','source','3iPmSpk','LHoyZ','1138272QoYysG','com.tencent.miniapp.lua','stringify','p_skey=','skey','tqwMb','normal','jumpUrl','data','NnACD','dzOpO','MiniApp\x20JSON\x20消息生成失败','miniapp','getQzoneCookies','4122120zPiWuK','uin'];_0x2e9e=function(){return _0x2124d2;};return _0x2e9e();}import{WebApi}from'./webapi';export async function SignMiniApp(_0x4dd77b){const _0x203dbd=_0x5755,_0x192040={'CLqte':_0x203dbd(0xad),'CQpFH':_0x203dbd(0x88),'LHoyZ':_0x203dbd(0xb2),'tqwMb':_0x203dbd(0xa5),'eRNpy':function(_0x27ee0e,_0x56469d){return _0x27ee0e+_0x56469d;},'oDcJc':_0x203dbd(0xaf),'JIWwG':';\x20skey=','jwipJ':';\x20p_uin=o','bhmvW':function(_0x874fd2,_0x6dff72){return _0x874fd2+_0x6dff72;},'ppRBA':function(_0x25ec77,_0x4ffa64){return _0x25ec77+_0x4ffa64;},'dzOpO':_0x203dbd(0xa7),'NnACD':function(_0x35fe97,_0x323653){return _0x35fe97(_0x323653);},'vBeOp':'GET','kiRrT':function(_0x43c052,_0x28a0fa,_0x5a2526){return _0x43c052(_0x28a0fa,_0x5a2526);}};let _0x29cb78={'app':_0x192040[_0x203dbd(0xa6)],'bizsrc':_0x203dbd(0x9b),'view':_0x192040[_0x203dbd(0x8c)],'prompt':_0x4dd77b['prompt'],'config':{'type':_0x192040[_0x203dbd(0xab)],'forward':0x1,'autosize':0x0},'meta':{'miniapp':{'title':_0x4dd77b[_0x203dbd(0x91)],'preview':_0x4dd77b[_0x203dbd(0x9f)][_0x203dbd(0x96)](/\\/g,_0x192040[_0x203dbd(0xb1)]),'jumpUrl':_0x4dd77b[_0x203dbd(0xb3)][_0x203dbd(0x96)](/\\/g,_0x192040[_0x203dbd(0xb1)]),'tag':_0x4dd77b[_0x203dbd(0x95)],'tagIcon':_0x4dd77b['tagIcon'][_0x203dbd(0x96)](/\\/g,_0x192040[_0x203dbd(0xb1)]),'source':_0x4dd77b[_0x203dbd(0xa9)],'sourcelogo':_0x4dd77b[_0x203dbd(0xa4)][_0x203dbd(0x96)](/\\/g,_0x203dbd(0xa5))}}};const _0x4ce407=await NTQQUserApi['getSkey']();let _0x16da73=await NTQQUserApi[_0x203dbd(0x89)]();const _0x50116f=WebApi['genBkn'](_0x16da73[_0x203dbd(0x93)]),_0x3daeb0=_0x192040[_0x203dbd(0x9e)](_0x192040[_0x203dbd(0x9e)](_0x192040[_0x203dbd(0x9e)](_0x192040['eRNpy'](_0x192040[_0x203dbd(0x9d)],_0x16da73['p_skey']),_0x192040[_0x203dbd(0x99)])+_0x16da73[_0x203dbd(0xb0)],_0x192040[_0x203dbd(0x9c)])+selfInfo[_0x203dbd(0x8b)],';\x20uin=o')+selfInfo[_0x203dbd(0x8b)];let _0x363aac=_0x192040[_0x203dbd(0x9e)](_0x192040[_0x203dbd(0x9a)](_0x192040[_0x203dbd(0xa2)](_0x192040[_0x203dbd(0x86)],_0x50116f),_0x203dbd(0x94)),_0x192040[_0x203dbd(0x85)](encodeURIComponent,JSON[_0x203dbd(0xae)](_0x29cb78))),_0x30550a='';try{let _0x1aff91=await RequestUtil[_0x203dbd(0x97)](_0x363aac,_0x192040['vBeOp'],undefined,{'Cookie':_0x3daeb0});_0x30550a=_0x1aff91[_0x203dbd(0xb4)][_0x203dbd(0x98)];}catch(_0x59731c){_0x192040[_0x203dbd(0x8e)](logDebug,_0x203dbd(0x87),_0x59731c);}return _0x30550a;}