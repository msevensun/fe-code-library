var object = require('../js/module.js');

// 秒杀报名区域
// function seckillAjax(timing,moment,userName,mobilePhone,province,city,dealer){
//     var utmid = $.fn.cookie('utmid');
//     $.ajax({
//         headers: {
//             'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
//         },
//         type:'POST',
//         url:'http://zt.m.emao.com/bachelorapi/seckillApplyOrKill',
//         dateType:'jsonp',
//         jsonp:'callback',
//         jsonpCallback:'cb',
//         data:{
//             timing : timing,
//             moment : moment,
//             userName : userName,
//             mobilePhone : mobilePhone,
//             province : province,
//             city : city,
//             dealer : dealer,
//             origin: 2,
//             utmid : utmid
//         },
//         success:function(data){
//             $.fn.cookie('bachelor_'+timing+'_'+moment,timing+'-'+moment+'-'+mobilePhone);
//             hidePop();
//             object.popInfo(data.msg);
//             ga('send', 'event', 'ymdoube11_wap', 'txms',mobilePhone);//秒杀
//         },
//         error:function() {
//             object.popInfo('抱歉，网络繁忙，请重试！');
//         }
//     });
// };