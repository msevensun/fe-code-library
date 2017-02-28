Page({
    data: {
        windowHeight: 0,
        condition: false,
        content:[]
    },
    onLoad: function(options){
        var that = this;
        var docId = options.id;
        var pagedata = options.pagedata;
        console.log(pagedata)
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    windowHeight: res.windowHeight,
                    condition: pagedata
                });
            }
        });
        wx.request({
            url: 'http://app.emao.com/v1.9/?info={%22docId%22:%22'+docId+'%22,%22city%22:1,%22code%22:%221202%22}', //仅为示例，并非真实的接口地址
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                var contentCon = res.data.data;
                that.setData({
                    content : contentCon
                });
            }
        })
        // //获取本地存储
        // wx.getStorage({
        //     key: 'key',
        //     success: function(res) {
        //         var flag = res.data[0].flag;
        //         // console.log(res.data[0].flag)
        //         that.setData({
        //             condition: flag
        //         });
        //     } 
        // })
    }
})