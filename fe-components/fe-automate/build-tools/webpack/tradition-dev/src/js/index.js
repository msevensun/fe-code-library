// reference css
require('reset');
require('../css/home.css');
require('../css/swiper.min.css');

require('../js/plugin/swiper.min.js');
require('../js/plugin/picLazyLoad.js');
require('../js/home.js');
require('../js/lottery.js');
require('../js/validate.js');
require('../js/gift.js');
require('../js/http.js');

//热更新模式下懒加载路径
if(__DEVHRM__){
	var $lazyload = $('.lazyload');
	$.each($lazyload,function(k,v){
		var str = ""+$(this).attr('data-original');
		$(this).attr('data-original',str.replace('img/lazy-pic/',''));
	});
}

var cityName ='beijing';
var swiper1 = new Swiper('.best-wrap');
var swiper2 = new Swiper('.mcj-con', {
    slidesPerView: 2.5,
    spaceBetween: 10,
    freeMode: true
});
picLazyLoad({
    className: 'lazyload',
    callback: function(me){
        me.classList.add('fadeIn');
    }
})
