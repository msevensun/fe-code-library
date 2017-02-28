var ensure= {
    //监听遮罩层和弹窗
    shadeBox: function (){
        var $shadeBox = $('.shade-box'),
            documentHeight =  $(document).height();
        $shadeBox.show().css({'height':documentHeight});
        $(window).scroll(function(){
            if($shadeBox.css('display') != 'none'){
                var documentHeight =  $(document).height();
                $shadeBox.show().css({'height':documentHeight});
            }
        });
    },
    //隐藏弹窗
    hidePop: function (){
        // 解绑事件
        // document.removeEventListener('touchmove', handler, false);
        $('.shade-box').hide();
        $('.pop-box').hide().css({'top':'0'}).removeClass('bounceInDown');
        $('.scheme-wrap').hide();
        $('.pop-status').hide();
    }
}
module.exports = ensure;