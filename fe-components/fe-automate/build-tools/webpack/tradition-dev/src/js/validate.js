var object = require('../js/module.js');
// data-id：不同的验证方式 0:默认 1：热销 抽奖 2：半价
// data-type：不同区域类型
//提交报名信息
$('.btn-submit').on('click', function() {
	var eleId = $(this).attr('data-id'),
		datatype = $(this).attr('data-type');
	formValidate(eleId,datatype);
	return false;
});
function handler(event) {
  event.preventDefault();
}


//提交报名数据
function postFormData(gname,gphone,gcity,gbrandid,gseriesid,sex,source){
	var utmid = $.fn.cookie('utmid');
	$.ajax({
		type: 'GET',
		url: 'http://zt.emao.com/shuang12/api/applyinfo/postApplyInfo',
		dataType:'jsonp',
		jsonp:'cb',
		jsonpCallback: 'cb',
		data:{
			name:gname,
			phone:gphone,
			city:gcity,
			brandid:gbrandid,
			seriesid:gseriesid,
            sex:sex,
			times: 4,
			utmid:utmid,
			origin: 2,
			source : source
		},
		success: function(data){
			if(data.code==0){
				object.setApplyCookies(gphone);
				object.hidePop();
				object.popInfo('报名成功，可去抽奖区进行抽奖！');
				if(source == 6){//零利率
					ga('send', 'event', 'ymdoube12_wap', 'EBUljqgjr',gphone);
				}else if(source == 7){//第二件半价
					ga('send', 'event', 'ymdoube12_wap', 'EBUljqg',gphone);
				}else if(source == 23){//立即报名
					ga('send', 'event', 'ymdoube12_wap', 'TBUljqg',gphone);
				}else if(source == 2){//立即抽奖
				 	ga('send', 'event', 'ymdoube12_wap', 'choujiang',gphone);
				}else if(source == 25){//购车愿望
				 	ga('send', 'event', 'ymdoube12_wap', 'wish',gphone);
				}
			}else if(data.code == 1131){
				object.setApplyCookies(gphone);
				object.hidePop();
				object.popInfo('您已报名超过最大次数！');
			}else if(data.code == 1132){
				object.setApplyCookies(gphone);
				object.hidePop();
                object.popInfo('您已报过此车型，不可再次报名！');
            }else if(data.code == 1102){
            	object.setApplyCookies(gphone);
				object.hidePop();
                object.popInfo('您已报过此车型，不可再次报名！');
            }else{
            	object.hidePop();
            }
		},
		error: function(xhr, type){
			object.popInfo('网络缓慢，请刷新页面后，重新提交！');
		}
	});
}
//验证手机号
function isPhone(phone){
	var pattern = /^1[3|4|5|7|8]\d{9}$/;
	return pattern.test(phone);
}
//验证函数
function formValidate(eleId,datatype){
	var $name = $('input[name="username"]').eq(eleId),
		$phone = $('input[name="phoneID"]').eq(eleId),
		phoneVal = $phone.val(),
		dataControl = $('.btn-submit').attr('data-control');
	//判断购车人
	if($name.val().length == 0){
		$name.siblings().show(100);
		return false;
	}else{
		$name.siblings().hide(100);
	}
	//判断手机号
	if(phoneVal.length == 0){
		$phone.siblings().show(100);
		return false;
	}else{
		if(isPhone(phoneVal) == false){
			$phone.siblings().show(100);
			return false;
		}else{
			$phone.siblings().hide(100);
		}
	}
	if(eleId == 0){
		// 报名
		var $brand = $('select[name="brandID"]').eq(eleId),
		$chexi = $('select[name="chexiID"]').eq(eleId);	
			//选择品牌
			if($brand.val() == 0 || $brand.val() == '请选择品牌'){
				$brand.siblings('span').show(100);
				return false;
			}else{
				$brand.siblings('span').hide(100);
			}
			//选择车系
			if($chexi.val() == 0 || $chexi.val() == '请选择车型'){

				$chexi.siblings('span').show(100);
				return false;
			}else{
				$chexi.siblings('span').hide(100);
			}
			var city = $('#cityID').val();
			name = $name.val();
			var phone = $phone.val();
			var brandid = $brand.val();
			var seriesid = $chexi.val();
	        var sex = $("select[name='sex']").eq(eleId).val();
			postFormData(name,phone,city,brandid,seriesid,sex,datatype);
		
	}else if(eleId == 1){
		var $brand = $('select[name="brandID"]').eq(eleId),
		$chexi = $('select[name="chexiID"]').eq(eleId);
		// 2016热销榜
		//选择品牌
		if($brand.val() == 0 || $brand.val() == '请选择品牌'){
			$brand.siblings('span').show(100);
			return false;
		}else{
			$brand.siblings('span').hide(100);
		}
		//选择车系
		if($chexi.val() == 0 || $chexi.val() == '请选择车型'){

			$chexi.siblings('span').show(100);
			return false;
		}else{
			$chexi.siblings('span').hide(100);
		}
		var city = $('#cityID').val();
		name = $name.val();
		var phone = $phone.val();
		var brandid = $brand.val();
		var seriesid = $chexi.val();
        var sex = $("select[name='sex']").eq(eleId).val();
		postFormData(name,phone,city,brandid,seriesid,sex,datatype);
	}else if(eleId == 2){
		if(datatype == 6){//零利率
			name = $name.val();
			var phone = $phone.val();
			var seriesid = $('#defaultCheXi').attr('data-serie');
			postFormData(name,phone,city,brandid,seriesid,sex,datatype);
		}else if(datatype == 7){//半价
			name = $name.val();
			var phone = $phone.val();
			var seriesid = $('#defaultCheXi').attr('data-serie');
			postFormData(name,phone,city,brandid,seriesid,sex,datatype);
		}
	}else{
		$('.shade-box,.pop-box').hide();
	}
}
