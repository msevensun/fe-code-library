var object = require('../js/module.js');
$(function(){
    /*pinpai*/
    // 城市导航
    $('.city-list li').on('click',function(){
        var i = $(this).index();
        $(this).siblings().children('a').removeClass('cur');
        $(this).children().addClass('cur');
        $('.tejia-list').eq(i).show();
        $('.tejia-list').eq(i).siblings().hide();
        $('#giveCarBrandList').html('');
        $('#giveCarSeriesList').html('');
        $('#giveCarnextSeriesList').html('');
        $('.load-more').attr('page', 1);
        $('.brand-con .ad-wrap').show();
        $('.back-btn').hide();
        if($(this).attr('citybranda') == ''){
            $('.ad-wrap.a1').hide();
            $('.ad-wrap.a2').hide();
        }else{
            $('.ad-wrap.a1').show();
            $('.ad-wrap.a2').show();
            $('.ad-wrap.a1').attr('src','/huodong/double-twelve/m161212/images/ad/'+$(this).attr('cityname')+'1.jpg');
            $('.ad-wrap.a2').attr('src','/huodong/double-twelve/m161212/images/ad/'+$(this).attr('cityname')+'2.jpg');
            $('.ad-wrap.a1').attr('cityname',$(this).attr('cityname'));
            $('.ad-wrap.a2').attr('cityname',$(this).attr('cityname'));
            $('.ad-wrap.a1').attr('brand',$(this).attr('citybranda'));
            $('.ad-wrap.a2').attr('brand',$(this).attr('citybrandb'));
        }
        getHomeBachelorDataInfo($(this).attr('cityname'), 0, 1, 20);
    });
    $(document).on('click', '.brand-list li', function(){
        $(this).siblings().children('a').removeClass('cur');
        $(this).children('a').addClass('cur');
        var cityName = $(this).attr('cityName');
        var brand = $(this).attr('brand');
        $('#giveCarSeriesList').html('');
        $('#giveCarnextSeriesList').html('');
        $('.brand-con .ad-wrap').hide();
        $('.back-btn').hide();
        getHomeBachelorDataInfo(cityName, brand, 1, 1000);
    });

    $(document).on('click','.model-ct .model-btn',function(){
        $('.presentMask').show();
        var model_btn = $(this);
        var data_brand = model_btn.attr('data-brand');
        var brand_name = model_btn.attr('brand-name');
        var data_serie = model_btn.attr('data-serie');
        var city_name = model_btn.attr('city_name');
        //加载数据
        var url = 'http://yuehui.emao.com/api/getHomeBachelorDataInfo/'+city_name+'/'+data_brand+'/'+1+'/'+100;
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'jsonp',
            jsonp:'callback',
            jsonpCallback:'cb',
            cache: true,
            success: function(data){
                //console.log(data);
                if(data.code == 0) {
                    var brchelorData = data.data;
                    setGiveCarAlert(brchelorData, brand_name, data_brand, city_name,data_serie, model_btn);
                } else {

                }
            },
            error: function(xhr, type){
                object.popInfo('抱歉，网络繁忙，请重试！');
            }
        });
        $('.tit-close').on('click',function(){
            $('.presentMask').hide();
        })
    })
    //调取品牌
    //getHomeBachelorDataInfo(cityName, 0, 1, 20);
    var _cityName = $('#_cityName').val();
    var _getBrand = $('#_getBrand').val();
    getHomeBachelorDataInfo(_cityName, _getBrand, 1, 20);
})

function setGiveCarAlert(brchelorData, brand_name, data_brand, city_name, data_serie, model_btn){
    var seriesList = brchelorData.seriesList;
    var seriesArr = brchelorData.seriesArr;
    var brandArr = brchelorData.brandArr;
    $('#give_brandId').attr('data-brand',data_brand);
    $('#give_brandId').text(brand_name);
    var cityList = $('#cityList').val();
    var jsonCityList = $.parseJSON(cityList);
    $.each(jsonCityList, function(i, item){
        if(item.py == city_name){
            $('#give_cityId').attr('data-cityid',i);
            $('#give_cityId').text(item.name);
        }
    });
    var seriesHtml = '<option>请选择车型</option>';
    $.each(seriesList, function(i, item){
        if(item.series == data_serie){
            curactive = 'selected';
        }else{
            curactive = '';
        }
        seriesHtml += '<option '+curactive+' value="'+item.series+'">'+item.seriesname+'</option>';
    });

    $('#give_serieId').html(seriesHtml);

}

function getHomeBachelorDataInfo(cityName, brand, page, pageSize){
    $('.load-more').hide();
    var url = 'http://yuehui.emao.com/api/getHomeBachelorDataInfo/'+cityName+'/'+brand+'/'+page+'/'+pageSize;
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'jsonp',
        jsonp:'callback',
        cache: true,
        beforeSend: function(){
            $('.loading-wrap').show();
        },
        success: function(data){
            //console.log(data);
            if(data.code == 0) {
                var brchelorData = data.data;
                $('.loading-wrap').hide();
                setBrands(brchelorData.seriesBrandList, brchelorData.brandArr, brand,cityName);
                setSeries(brchelorData, page, brand, cityName);
            } else {
                $('.loading-wrap').hide();
            }
        },
        error: function(xhr, type){
            $('.loading-wrap').hide();
            alert();
            object.popInfo('抱歉，网络繁忙，请重试！');
        }
    });
    return false;
}

function setBrands(seriesBrandList, brandArr, brand, cityName){
    var brandHtml = '';
    var brands = [];
    var curactive = '';
    $.each(seriesBrandList, function(i, item){
        if(brands[item.brand]){
            return true;
        }else{
            brands[item.brand] = item;
        }
        if(item.brand == brand){
            curactive = 'cur';
        }else{
            curactive = '';
        }
        var brand_id = item.brand;
        brandHtml += '<li cityName="'+cityName+'" brand = '+brands[item.brand].brand+'>'+
            '<a href="javascript:void(0);" class="'+curactive+'">'+
            '<img src="http://img.emao.net'+brandArr[item.brand].logo+'" alt="">'+
            '<div class="brand-name"><span>'+brandArr[item.brand].brandName+'</span></div>'+
            '</a>'+
            '</li>';
    });
    $('#giveCarBrandList').html(brandHtml);
}

function setSeries(brchelorData, page, brand, cityName){
    var seriesList = brchelorData.seriesList;
    var seriesArr = brchelorData.seriesArr;
    var brandArr = brchelorData.brandArr;
    var subBrand = brchelorData.subBrand;
    var seriesHtml = '';
    var nextseriesHtml = '';
    var jsonCityList = $.parseJSON($('#cityList').val());
    var cityCnName = '';
    var cityId = '';
    $.each(jsonCityList, function(i, item){
        if(item.py == cityName){
            cityCnName = item.name;
            cityId = i;
        }
    });
    $.each(seriesList, function(i, item){
        var commenHtml = '<li>'+
            '<a href="javascript:;" class="btnpop" data-type="23" brand-name ="'+item.brandname+'"  data-brand="'+item.brand+'" data-serie="'+item.series+'" city-py-name="'+cityName+'" city-name="'+cityCnName+'" city-id="'+cityId+'">'+
            '<div class="brand-logo">'+
            '<span><img src="http://img.emao.net'+brandArr[item.brand].logo+'" alt=""></span>'+
            '<span>'+subBrand[seriesArr[item.series].subBrandId].subBrandName+'</span>'+
            '</div>'+
            '<div class="brand-pic">'+
            '<img src="http://img.emao.net'+seriesArr[item.series].cover+'/64" alt="">'+
            '</div>'+
            '<h2>'+item.seriesname+'</h2>'+
            '<div class="price-bd">'+
            '<em>'+item.discount+'</em>'+
            '<span>'+seriesArr[item.series].minPrice+'万起</span>'+
            '</div>'+
            '<div class="gc-info">'+
            '<span>'+item.desc+'</span>'+
            '</div>'+
            '<span class="btn-booking bm"></span>'+
            '<p class="people-num">报名人数：<span>'+item.fadenumber+'</span>人</p>'+
            '</a>'+
            '</li>';
        if(i < 8 && page == 1 && brand == 0){
            seriesHtml += commenHtml;
        }else{
            nextseriesHtml += commenHtml;
        }

    });
    if(seriesList.length < 20){
        $('.load-more').hide();
    }else{
        page = parseInt(page) + 1;
        $('.load-more').attr('page', page);
        $('.load-more').attr('cityname', cityName);
        $('.load-more').show();
    }
    if(page > 1){
        $('.back-btn').show();
    }else{
        $('.back-btn').hide();
    }
    $('#giveCarSeriesList').append(seriesHtml);
    $('#giveCarnextSeriesList').append(nextseriesHtml);
}
$('.load-more').on('click', function(){
    var page = $(this).attr('page');
    var cityName = $(this).attr('cityname');
    var pagesize = $(this).attr('pagesize');
    getHomeBachelorDataInfo(cityName, 0, page, pagesize);
    ga('send', 'event', 'ymdoube12_wap', 'TBUjiazai');
});

$(document).on('click', '.ad-wrap img', function(){
    var cityName = $(this).attr('cityname');
    var brand = $(this).attr('brand');
    if(!$(this).attr('citybranda')){
        $('.ad-wrap.a1').hide();
        $('.ad-wrap.a2').hide();
    }
    $('#giveCarSeriesList').html('');
    $('#giveCarnextSeriesList').html('');
    getHomeBachelorDataInfo(cityName, brand, 1, 1000);
})