var object = require("../js/module.js");
// 抽奖
var lottery={
	index:-1,	//当前转动到哪个位置，起点位置
	count:0,	//总共有多少个位置
	timer:0,	//setTimeout的ID，用clearTimeout清除
	speed:20,	//初始转动速度
	times:0,	//转动次数
	cycle:50,	//转动基本次数：即至少需要转动多少次再进入抽奖环节
	prize:-1,	//中奖位置
	stopNum:0, //中奖位置
	infoCt:'',//中奖内容
	init:function(id){
		if ($("#"+id).find(".lottery-unit").length>0) {
			$lottery = $("#"+id);
			$units = $lottery.find(".lottery-unit");
			this.obj = $lottery;
			this.count = $units.length;
			$lottery.find(".lottery-unit-"+this.index).addClass("active");
		};
	},
	roll:function(){
		var index = this.index;
		var count = this.count;
		var lottery = this.obj;
		$(lottery).find(".lottery-unit-"+index).removeClass("active");
		index += 1;
		if (index>count-1) {
			index = 0;
		};
		$(lottery).find(".lottery-unit-"+index).addClass("active");
		this.index=index;
		return false;
	},
	stop:function(index){
		this.prize=index;
		return false;
	}
};

function roll(){
	lottery.times += 1;
	lottery.roll();
	if (lottery.times > lottery.cycle+10 && lottery.prize==lottery.index) {
		clearTimeout(lottery.timer);
		lottery.prize=-1;
		lottery.times=0;
		popInfo(lottery.infoCt,false);
		// click=false;
	}else{
		if (lottery.times<lottery.cycle) {
			lottery.speed -= 10;
		}else if(lottery.times==lottery.cycle) {
			lottery.prize = lottery.stopNum;		
		}else{
			if (lottery.times > lottery.cycle+10 && ((lottery.prize==0 && lottery.index==7) || lottery.prize==lottery.index+1)) {
				lottery.speed += 110;
			}else{
				lottery.speed += 20;
			}
		}
		if (lottery.speed<40) {
			lottery.speed=40;
		};
		//console.log(lottery.times+'^^^^^^'+lottery.speed+'^^^^^^^'+lottery.prize);
		lottery.timer = setTimeout(roll,lottery.speed);
	}
	return false;
}

// var click=false;

window.onload=function(){
	lottery.init('lottery');
	var $btnSubmit = $('.btn-submit');
	$("#lottery a").click(function(){
		var cookiePhone = $.fn.cookie('luckphone');
		if(cookiePhone){
			// if (click) {
			// 	return false;
			// }else{
				object.validatePhone(cookiePhone);
				// click=true;
				return false;
			// }
		}else{
			var dataType = 2,
				startScrollY = $(window).scrollTop();
			//监听遮罩层和弹窗
			object.shadeBox();
			$btnSubmit.attr('data-type',dataType);
			$('input').val('');
			$('.pop-apply').show().addClass('bounceInDown').animate({'position':'absolute','top': startScrollY});
			// 失去焦点验证手机号
			// $('#phoneID').on('blur',function(){
			// 	if($btnSubmit.attr('data-type') == dataType){
			// 		formValidate(3);
			// 	}
			// 	return false;
			// });
		}
		
	});
};
// 抽奖信息
    function lotteryInfo (){
        var lotteryInput = $('#lotteryInput').val().split(',');
        var phone = lotteryInput[0];
        var sessionId = lotteryInput[1];
        // $('.luckMask').hide();
            $.ajax({
                type: 'GET',
                url: 'http://zt.emao.com/bachelor/api/lottery/handle',
                data: {phone: phone, sessionId: sessionId},
                dataType:'jsonp',
                jsonp:'cb',
                success:function(res) {
                    if (res.code == 0) {
                        if (res.data.prizeType == 1) {
                            lottery.infoCt='恭喜您，抽中'+res.data.prizeName+'，客服会在3个工作日与您联系。中奖信息会下发到您的手机上，请查收。如有疑问请咨询：010-85659216。';
                        } else {
                            lottery.infoCt='恭喜您，抽中'+res.data.prizeName+'。中奖信息会下发到您的手机上，请查收。如有疑问请咨询：010-85659216。';
                        }
                        lottery.speed=200;
                        lottery.stopNum=res.data.prizePosition;
                        roll();
                        // click=true;
                        return false;
                    } else {
                         lottery.infoCt='奖品没有出来，请咨询010-85659216。';
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    object.popInfo('抱歉，网络繁忙，请重试！');
                    //错误
                }
            });
    }