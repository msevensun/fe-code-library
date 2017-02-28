官网：http://zeptojs.com/

github: https://github.com/madrobby/zepto#readme

	Zepto是一个轻量级的针对现代高级浏览器的JavaScript库， 它与jquery有着类似的api。 如果你会用jquery，那么你也会用zepto。

文档声明：
    此处版本为Zepto.js v1.2.0;
	Zepto.js (1.1.6)文档请移步http://www.css88.com/doc/zeptojs-1.1.6_api/;


浏览器支持
初级 (100% 支持)
	
	Safari 6+ (Mac)
	
	Chrome 30+ (Windows, Mac, Android, iOS, Linux, Chrome OS)
	
	Firefox 24+ (Windows, Mac, Android, Linux, Firefox OS)
	
	iOS 5+ Safari
	
	Android 2.3+ Browser
	
	Internet Explorer 10+ (Windows, Windows Phone)

次要目标（完全或大部分支持）

	iOS 3+ Safari

	Chrome <30

	Firefox 4+

	Safari <6

	Android Browser 2.2

	Opera 10+

	webOS 1.4.5+ Browser

	BlackBerry Tablet OS 1.0.7+ Browser

	Amazon Silk 1.0+

	Other WebKit-based browsers/runtimes

	需要注意的是Zepto的一些可选功能是专门针对移动端浏览器的；因为它的最初目标在移动端提供一个精简的类似jquery的js库。

总之，Zepto希望在所有的现代浏览器中作为一种基础环境来使用。Zepto不支持旧版本的Internet Explorer浏览器(<10)。

手动建立Zepto
	zepto.js和zepto.min.js提供以上使用方式。 然而，为了更好的程序效果和自由性，可以在使用Zepto源码构建Zepto.js和zepto.min.js的时候选择模块并作测试， 使用UglifyJS根据你的需要来生成(当服务端开启gzipped后，最精简的代码)代码。