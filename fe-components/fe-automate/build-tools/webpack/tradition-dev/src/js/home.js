// var object = require("../js/module.js");
// dataJudge秒杀判断条件
//dataControl控制提交表单
// webpack Code Splitting
	// 查看活动规则页介绍
	$('.hdrule-btn').click(function(){
		require.ensure([],function(){
			var  object = require('./require.ensure/ensure.js');
			object.shadeBox();
		},'ensure');
		dataOriginal('lazy');
		$('.shade-box').show();
		$('.pop-rule').show().addClass('bounceInDown');
	});
	// 关闭弹窗和遮罩层
	$('.btn-close,.shade-box').tap(function(e){
		require.ensure([],function(){
			var  object = require('./require.ensure/ensure.js');
			object.hidePop();
		},'ensure');
	});
//判断横竖屏状态刷新页面
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
		window.location.reload();
    }); 
//自动滚动
var $element = $('.name');
setTime();
// 查看活动详情页介绍
$('.btn-check').click(function(){
	object.shadeBox();
	dataOriginal('lazy');
	$('.shade-box').show();
	$('.scheme-wrap').show().addClass('bounceInDown');
	ga('send', 'event', 'ymdoube12_wap', 'EBUchakan');
});

//特价车型数据监测
$('.tejia-list .btn-booking').on('click',function(){
	var goodsId = $(this).attr('data-goodid');
	ga('send', 'event', 'ymdoube12_wap', 'gospy', goodsId);
});
// 买车记数据监测
$('.mcj-list a').on('click',function(){
	ga('send', 'event', 'ymdoube12_wap', 'gomcj');
});
// 弹窗
$(document).on('tap','.btnpop',function(){
	var datatype = $(this).attr('data-type'),
		startScrollY = $(window).scrollTop();
	$('.shade-box').show();
	// $('.linkage,.qxhide').hide();
	$('.btn-submit').attr('data-type',datatype);
	//监听遮罩层和弹窗
	object.shadeBox();
	// 绑定取消touchmove事件
	// document.addEventListener('touchmove', handler, false);
	if(datatype == 23){
		$('.pop-apply').show().addClass('bounceInDown').animate({'position':'absolute','top': startScrollY});
		//热销车
		var dataCityID = $(this).attr('city-id'),
			dataBrandID = $(this).attr('data-brand'),
			dataChexiID = $(this).attr('data-serie');
			$('#brandID option[value="'+ dataBrandID +'"]').prop('selected',true);
			$('.wish-list #brandID').trigger('change');
			setTimeout(function(){
				$('#chexiID option[value="'+ dataChexiID +'"]').prop('selected',true);
			},1000);
			$('#cityID option[value="'+ dataCityID +'"]').prop('selected',true);
	}else if(datatype == 6){
		$('.pop-booking').show().addClass('bounceInDown').animate({'position':'absolute','top': startScrollY});
		//低首付零利率
		var dataBrand = $(this).attr('data-brand');
		$('#defaultCheXi').val(dataBrand);
		$('#defaultCheXi').attr('data-serie',$(this).attr('data-serie'));
		// $('.wish-list li:nth-child(n+3)').hide();
		// $('.cx-default').show();
	}else if(datatype == 7){
		$('.pop-booking').show().addClass('bounceInDown').animate({'position':'absolute','top': startScrollY});
		//低首付零利率
		var dataBrand = $(this).attr('data-brand');
		$('#defaultCheXi').val(dataBrand);
		$('#defaultCheXi').attr('data-serie',$(this).attr('data-serie'));
		// $('.wish-list li:nth-child(n+3)').hide();
		// $('.cx-default').show();
	}
});


// 中奖信息滚动
function autoRoll(){
	var ulH = $element.css('margin-top'),
		liH = $element.children().css('height'),
		len = $element.children().length;
	if(len > 1){
		$element.animate({
			'marginTop' : parseInt(ulH) - parseInt(liH)
		},function(){
			var abc = Math.abs(parseInt(ulH));
			$(this).find('li:first-child').appendTo($(this));
			$element.css('margin-top',0)
		});
	}else{
		clearTimeout(timer)
	}
}
function setTime(){
	timer = setTimeout(function(){
		setTime();
		autoRoll();
	}, 5000);
}
//替换src的值
function dataOriginal(className){
	$('.'+className).each(function(i){
		var attrVal = $(this).attr('src');
		var attrDataVal = $(this).attr('data-original');
		if(attrVal != attrDataVal){
			$(this).attr('src',attrDataVal);
		}
	});
}

// 浮动菜单
$.fn.smartFloat = function(){
	var defaluts = {
		loclele: $('.today-best'),//相对元素
		floors: $('.floors')//楼层元素
	}
	var position = function(element,options){
		var opts = $.extend({},defaluts,options);//使用$.extend 覆盖插件默认参数
		var loctop = opts.loclele.offset().top;//获取相对元素在文档中与顶部的距离
		var loch = opts.loclele.height();//获取相对元素的高度
		var h = loctop + loch;//相对元素底部到顶部的距离
		$(window).scroll(function(){//滚动鼠标事件
			var scrolltop = $(this).scrollTop();//滚动条到顶部的距离
			var winH = $(window).height();//可视窗口的高度
			if(scrolltop >= h){
				element.show().removeClass('fadeOutUp').addClass('fadeInDown');
				opts.floors.each(function(e){
					if(winH+scrolltop - $(this).offset().top > winH-50){
						element.find('a').removeClass('cur').eq(e).addClass('cur');
					}
				});
			}else{
				element.removeClass('fadeInDown').addClass('fadeOutUp');
			}		
		});
		element.find('li').click(function(){
			$(this).siblings().find('a').removeClass('cur');
			$(this).children('a').addClass('cur');
			if($(this).index()!=element.find('li').length-1){
				window.scrollTo(0,opts.floors.eq($(this).index()).offset().top);
			}
		});
	}
	return $(this).each(function() { 
        position($(this));                          
    });
}
$(function(){ 
    $('.fixed-wrap').smartFloat(); 
}); 