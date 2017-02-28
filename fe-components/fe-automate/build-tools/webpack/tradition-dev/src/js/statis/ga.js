;(function(){
         var referrer = document.referrer||'';
         var url = location.href;
         function atmYimao (url){
                   var matchList=url.match(/atm_yimao=([^&=?]+)/);
                   return matchList?matchList[1]:null;
         }
         if(atmYimao(url)!= 1&&atmYimao(referrer)!= 1&&!$.fn.cookie('atm_yimao')){
                   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                                     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                   })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
         }else{
                   $.fn.cookie('atm_yimao','1',{path:'/',domain: 'emao.com'});
                   window.ga=function(){};
         }
         ga('create', 'UA-48162221-6', 'auto');
         ga('send', 'pageview');
})()