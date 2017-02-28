var seriesUrl = 'http://auto.emao.com/api/getSerieByBrand';
setSerie($(".wish-list #brandID"),$(".wish-list #chexiID"));

function setSerie(ele1,ele2){
    var serie = ele2,
        eleVal =ele1.val();
    ele1.on('change',function () {
        $brandid = $(this).val();
        var sreies;
        $.ajax({
            type:'get',
            dataType:'jsonp',
            url:seriesUrl+'/'+$brandid,
            jsonp:'cb',
            success:function(data) {
                if(data.code == 0){
                    series = data.data.list;
                    var options = createOption(series);
                    serie.empty().append(options);
                }
            }
        });
    });
}
/**
 *
 * @param data
 * @returns {*}
 */
function createOption(data){
    var options = '<option value="0">请选择车型</option>';
    for (var i = 0;i < data.length;i ++){
        options += '<option value="'+data[i].id+'">'+data[i].serieName+'</option>';
    }
    return options;
}


