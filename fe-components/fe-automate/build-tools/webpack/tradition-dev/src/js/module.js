var object= {
    //状态提示弹窗
    popInfo: function (text,type){
        var $popAlert = $('.pop-status'),
            timer;
        $popAlert.show().addClass('bounceInDown').find('div.callback-info').html(text);
        if(type == false){
            return false;
        }else{
            timer = setTimeout(function(){
                $popAlert.hide();
            },3000)
        }
    },
    //设置报名cookie信息
    setApplyCookies: function (phone){
        $.fn.cookie('luckphone',phone,{expires:30});
    },
    // 验证手机号码
    validatePhone: function (val,type){
        var that = this;
        $.ajax({
            type:'GET',
            url:'http://zt.emao.com/shuang12/api/applyinfo/getApplyInfoByPhone',
            dataType:'jsonp',
            jsonp:'cb',
            data:{phone:val},
            success:function(data){
                if(data.code == 333 || data.code == -1){
                    object.popInfo('您的手机号已抽过奖，不可再次抽奖');
                    $('.btn-submit').attr('data-control','false');
                }else if(data.code == 222){
                    $('#lotteryInput').val(data.data.phone+','+data.data.sessionId);
                    that.setApplyCookies(val);
                    $('.btn-submit').attr('data-control','true');
                    if(type==false){
                        object.popInfo('您已报过名，可直接抽奖');
                    }else{
                        that.lotteryInfo();
                    }
                }else{
                    $('.btn-submit').attr('data-control','true');
                }
            }
        })
    }
}
module.exports = object;