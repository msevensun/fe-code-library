//index.js
var page =1;

// 获取数据的方法，具体怎么获取列表数据大家自行发挥
var GetList = function(that){
    var url = "http://news.emao.com/api/getNewsListByClassId/all/"+page
    that.setData({
        hidden:false
    });
    wx.request({
        url:url,
        data:{
            page : page
        },
        success:function(res){
            var list = that.data.infolist;
            for(var i = 0; i < res.data.data.length; i++){
              // console.log(res.data.data[i]);
                list.push(res.data.data[i]);
            }
            that.setData({
                infolist : list
            });
            page ++;
            that.setData({
                hidden:true
            });
        }
    });
}
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'emao',
    userInfo: {},
    indicatorDots: true,
    swiperCurrent: 0,
    autoplay: true,
    interval: 3000,
    duration: 500,
    circular: true,
    windowHeight: 0,
    hidden:true,
    list:[],
    scrollTop : 0,
    scrollHeight:0,
    "banner_list": [
      {
        "banner": [
          {
            "pic_url": "//img.emao.net/news/nc/bcn/idqs-640x290.jpg",
            "title": "便宜20万配置还不差 这款7系是假的吗吗？"
          },
          {
            "pic_url": "//img.emao.net/news/nc/bcn/bvpx-640x290.jpg",
             "title": "便宜20万配置还不差 这款7系是假的吗吗？"
          },
          {
            "pic_url": "//img.emao.net/news/nc/bcn/kehk-640x290.jpg",
             "title": "便宜20万配置还不差 这款7系是假的吗吗？"
          },
          {
            "pic_url": "//img.emao.net/news/nc/bcn/dtk-640x290.jpg",
             "title": "便宜20万配置还不差 这款7系是假的吗吗？"
          },
          {
            "pic_url": "//img.emao.net/news/nc/bcn/exbg-640x290.jpg",
             "title": "便宜20万配置还不差 这款7系是假的吗吗？"
          }
        ]
      }
    ],
    infolist: [
      {
            "id": 1165850,
            "accountId": 559,
            "adminId": 1,
            "sourceTime": 1487037232,
            "classTagId": 0,
            "status": 1,
            "type": 3,
            "title": "软质中控台/全景天窗 新款长安CS75谍照",
            "sourceTitle": "原创  新款长安CS75谍照 软质中控台/全景天窗",
            "sourceTitleMd5": "c614cc0c084dc5b157e2fd90ea8e586c",
            "coverImg": "/news/nc/bcn/lsnt-323x186.jpg",
            "sourceUrl": "http://www.pcauto.com.cn/nation/947/9475391.html",
            "createTime": "2017-02-14 01:53:52",
            "updateTime": "2017-02-14 12:27:42",
            "deleteTime": null,
            "classId": 102,
            "classId2": 109,
            "description": "新款长安CS75车型陆续到店，新车组显著的变化在于配备了全景天窗，中控台增加了软质材料包裹。4S给出的1.5T手动挡中高配车型的报价分别为11.98万及12.68万元。",
            "isHomePage": 1,
            "isNewsPage": 1,
            "shortTitle": "新款长安CS75谍照曝光",
            "indexThumb": "/news/nc/bcn/eyvy-326x183.jpg",
            "upAdmin": "ouyanheng204@emao.com",
            "publishTime": "4小时前",
            "isCheck": 4,
            "className": "新车",
            "statusName": "上线",
            "mediaName": "太平洋汽车",
            "mediaSourceUrl": "http://www.pcauto.com.cn/",
            "mediaType": 3,
            "content": "",
            "thumb": "http://img.emao.net/news/nc/bcn/lsnt-323x186.jpg",
            "newsId": 1165850,
            "newsUrl": "http://news.emao.com/news/201702/1165850.html",
            "url": "http://news.emao.com/news/201702/1165850.html",
            "murl": "http://news.m.emao.com/news/201702/1165850.html",
            "commentUrl": "http://news.emao.com/news/201702/1165850.html#comment_list",
            "m_commentUrl": "http://news.emao.com/news/201702/1165850.html#comment_list",
            "is_news_index": 1,
            "author": "太平洋汽车",
            "index_thumb": "http://img.emao.net/news/nc/bcn/eyvy-326x183.jpg",
            "comments": 0
      },
      {
        "id": 1165850,
            "accountId": 559,
            "adminId": 1,
            "sourceTime": 1487037232,
            "classTagId": 0,
            "status": 1,
            "type": 3,
            "title": "软质中控台/全景天窗 新款长安CS75谍照",
            "sourceTitle": "原创  新款长安CS75谍照 软质中控台/全景天窗",
            "sourceTitleMd5": "c614cc0c084dc5b157e2fd90ea8e586c",
            "coverImg": "/news/nc/bcn/lsnt-323x186.jpg",
            "sourceUrl": "http://www.pcauto.com.cn/nation/947/9475391.html",
            "createTime": "2017-02-14 01:53:52",
            "updateTime": "2017-02-14 12:27:42",
            "deleteTime": null,
            "classId": 102,
            "classId2": 109,
            "description": "新款长安CS75车型陆续到店，新车组显著的变化在于配备了全景天窗，中控台增加了软质材料包裹。4S给出的1.5T手动挡中高配车型的报价分别为11.98万及12.68万元。",
            "isHomePage": 1,
            "isNewsPage": 1,
            "shortTitle": "新款长安CS75谍照曝光",
            "indexThumb": "/news/nc/bcn/eyvy-326x183.jpg",
            "upAdmin": "ouyanheng204@emao.com",
            "publishTime": "4小时前",
            "isCheck": 4,
            "className": "新车",
            "statusName": "上线",
            "mediaName": "太平洋汽车",
            "mediaSourceUrl": "http://www.pcauto.com.cn/",
            "mediaType": 3,
            "content": "",
            "thumb": "http://img.emao.net/news/nc/bcn/lsnt-323x186.jpg",
            "newsId": 1165850,
            "newsUrl": "http://news.emao.com/news/201702/1165850.html",
            "url": "http://news.emao.com/news/201702/1165850.html",
            "murl": "http://news.m.emao.com/news/201702/1165850.html",
            "commentUrl": "http://news.emao.com/news/201702/1165850.html#comment_list",
            "m_commentUrl": "http://news.emao.com/news/201702/1165850.html#comment_list",
            "is_news_index": 1,
            "author": "太平洋汽车",
            "index_thumb": "http://img.emao.net/news/nc/bcn/eyvy-326x183.jpg",
            "comments": 0
      },
      {
        "id": 1165850,
            "accountId": 559,
            "adminId": 1,
            "sourceTime": 1487037232,
            "classTagId": 0,
            "status": 1,
            "type": 3,
            "title": "软质中控台/全景天窗 新款长安CS75谍照",
            "sourceTitle": "原创  新款长安CS75谍照 软质中控台/全景天窗",
            "sourceTitleMd5": "c614cc0c084dc5b157e2fd90ea8e586c",
            "coverImg": "/news/nc/bcn/lsnt-323x186.jpg",
            "sourceUrl": "http://www.pcauto.com.cn/nation/947/9475391.html",
            "createTime": "2017-02-14 01:53:52",
            "updateTime": "2017-02-14 12:27:42",
            "deleteTime": null,
            "classId": 102,
            "classId2": 109,
            "description": "新款长安CS75车型陆续到店，新车组显著的变化在于配备了全景天窗，中控台增加了软质材料包裹。4S给出的1.5T手动挡中高配车型的报价分别为11.98万及12.68万元。",
            "isHomePage": 1,
            "isNewsPage": 1,
            "shortTitle": "新款长安CS75谍照曝光",
            "indexThumb": "/news/nc/bcn/eyvy-326x183.jpg",
            "upAdmin": "ouyanheng204@emao.com",
            "publishTime": "4小时前",
            "isCheck": 4,
            "className": "新车",
            "statusName": "上线",
            "mediaName": "太平洋汽车",
            "mediaSourceUrl": "http://www.pcauto.com.cn/",
            "mediaType": 3,
            "content": "",
            "thumb": "http://img.emao.net/news/nc/bcn/lsnt-323x186.jpg",
            "newsId": 1165850,
            "newsUrl": "http://news.emao.com/news/201702/1165850.html",
            "url": "http://news.emao.com/news/201702/1165850.html",
            "murl": "http://news.m.emao.com/news/201702/1165850.html",
            "commentUrl": "http://news.emao.com/news/201702/1165850.html#comment_list",
            "m_commentUrl": "http://news.emao.com/news/201702/1165850.html#comment_list",
            "is_news_index": 1,
            "author": "太平洋汽车",
            "index_thumb": "http://img.emao.net/news/nc/bcn/eyvy-326x183.jpg",
            "comments": 0
      },
      {
        "id": 1165850,
            "accountId": 559,
            "adminId": 1,
            "sourceTime": 1487037232,
            "classTagId": 0,
            "status": 1,
            "type": 3,
            "title": "软质中控台/全景天窗 新款长安CS75谍照",
            "sourceTitle": "原创  新款长安CS75谍照 软质中控台/全景天窗",
            "sourceTitleMd5": "c614cc0c084dc5b157e2fd90ea8e586c",
            "coverImg": "/news/nc/bcn/lsnt-323x186.jpg",
            "sourceUrl": "http://www.pcauto.com.cn/nation/947/9475391.html",
            "createTime": "2017-02-14 01:53:52",
            "updateTime": "2017-02-14 12:27:42",
            "deleteTime": null,
            "classId": 102,
            "classId2": 109,
            "description": "新款长安CS75车型陆续到店，新车组显著的变化在于配备了全景天窗，中控台增加了软质材料包裹。4S给出的1.5T手动挡中高配车型的报价分别为11.98万及12.68万元。",
            "isHomePage": 1,
            "isNewsPage": 1,
            "shortTitle": "新款长安CS75谍照曝光",
            "indexThumb": "/news/nc/bcn/eyvy-326x183.jpg",
            "upAdmin": "ouyanheng204@emao.com",
            "publishTime": "4小时前",
            "isCheck": 4,
            "className": "新车",
            "statusName": "上线",
            "mediaName": "太平洋汽车",
            "mediaSourceUrl": "http://www.pcauto.com.cn/",
            "mediaType": 3,
            "content": "",
            "thumb": "http://img.emao.net/news/nc/bcn/lsnt-323x186.jpg",
            "newsId": 1165850,
            "newsUrl": "http://news.emao.com/news/201702/1165850.html",
            "url": "http://news.emao.com/news/201702/1165850.html",
            "murl": "http://news.m.emao.com/news/201702/1165850.html",
            "commentUrl": "http://news.emao.com/news/201702/1165850.html#comment_list",
            "m_commentUrl": "http://news.emao.com/news/201702/1165850.html#comment_list",
            "is_news_index": 1,
            "author": "太平洋汽车",
            "index_thumb": "http://img.emao.net/news/nc/bcn/eyvy-326x183.jpg",
            "comments": 0
      },
      {
        "id": 1165850,
            "accountId": 559,
            "adminId": 1,
            "sourceTime": 1487037232,
            "classTagId": 0,
            "status": 1,
            "type": 3,
            "title": "软质中控台/全景天窗 新款长安CS75谍照",
            "sourceTitle": "原创  新款长安CS75谍照 软质中控台/全景天窗",
            "sourceTitleMd5": "c614cc0c084dc5b157e2fd90ea8e586c",
            "coverImg": "/news/nc/bcn/lsnt-323x186.jpg",
            "sourceUrl": "http://www.pcauto.com.cn/nation/947/9475391.html",
            "createTime": "2017-02-14 01:53:52",
            "updateTime": "2017-02-14 12:27:42",
            "deleteTime": null,
            "classId": 102,
            "classId2": 109,
            "description": "新款长安CS75车型陆续到店，新车组显著的变化在于配备了全景天窗，中控台增加了软质材料包裹。4S给出的1.5T手动挡中高配车型的报价分别为11.98万及12.68万元。",
            "isHomePage": 1,
            "isNewsPage": 1,
            "shortTitle": "新款长安CS75谍照曝光",
            "indexThumb": "/news/nc/bcn/eyvy-326x183.jpg",
            "upAdmin": "ouyanheng204@emao.com",
            "publishTime": "4小时前",
            "isCheck": 4,
            "className": "新车",
            "statusName": "上线",
            "mediaName": "太平洋汽车",
            "mediaSourceUrl": "http://www.pcauto.com.cn/",
            "mediaType": 3,
            "content": "",
            "thumb": "http://img.emao.net/news/nc/bcn/lsnt-323x186.jpg",
            "newsId": 1165850,
            "newsUrl": "http://news.emao.com/news/201702/1165850.html",
            "url": "http://news.emao.com/news/201702/1165850.html",
            "murl": "http://news.m.emao.com/news/201702/1165850.html",
            "commentUrl": "http://news.emao.com/news/201702/1165850.html#comment_list",
            "m_commentUrl": "http://news.emao.com/news/201702/1165850.html#comment_list",
            "is_news_index": 1,
            "author": "太平洋汽车",
            "index_thumb": "http://img.emao.net/news/nc/bcn/eyvy-326x183.jpg",
            "comments": 0
      },
      {
        "id": 1165850,
            "accountId": 559,
            "adminId": 1,
            "sourceTime": 1487037232,
            "classTagId": 0,
            "status": 1,
            "type": 3,
            "title": "软质中控台/全景天窗 新款长安CS75谍照",
            "sourceTitle": "原创  新款长安CS75谍照 软质中控台/全景天窗",
            "sourceTitleMd5": "c614cc0c084dc5b157e2fd90ea8e586c",
            "coverImg": "/news/nc/bcn/lsnt-323x186.jpg",
            "sourceUrl": "http://www.pcauto.com.cn/nation/947/9475391.html",
            "createTime": "2017-02-14 01:53:52",
            "updateTime": "2017-02-14 12:27:42",
            "deleteTime": null,
            "classId": 102,
            "classId2": 109,
            "description": "新款长安CS75车型陆续到店，新车组显著的变化在于配备了全景天窗，中控台增加了软质材料包裹。4S给出的1.5T手动挡中高配车型的报价分别为11.98万及12.68万元。",
            "isHomePage": 1,
            "isNewsPage": 1,
            "shortTitle": "新款长安CS75谍照曝光",
            "indexThumb": "/news/nc/bcn/eyvy-326x183.jpg",
            "upAdmin": "ouyanheng204@emao.com",
            "publishTime": "4小时前",
            "isCheck": 4,
            "className": "新车",
            "statusName": "上线",
            "mediaName": "太平洋汽车",
            "mediaSourceUrl": "http://www.pcauto.com.cn/",
            "mediaType": 3,
            "content": "",
            "thumb": "http://img.emao.net/news/nc/bcn/lsnt-323x186.jpg",
            "newsId": 1165850,
            "newsUrl": "http://news.emao.com/news/201702/1165850.html",
            "url": "http://news.emao.com/news/201702/1165850.html",
            "murl": "http://news.m.emao.com/news/201702/1165850.html",
            "commentUrl": "http://news.emao.com/news/201702/1165850.html#comment_list",
            "m_commentUrl": "http://news.emao.com/news/201702/1165850.html#comment_list",
            "is_news_index": 1,
            "author": "太平洋汽车",
            "index_thumb": "http://img.emao.net/news/nc/bcn/eyvy-326x183.jpg",
            "comments": 0
      },
      {
        "id": 1165850,
            "accountId": 559,
            "adminId": 1,
            "sourceTime": 1487037232,
            "classTagId": 0,
            "status": 1,
            "type": 3,
            "title": "软质中控台/全景天窗 新款长安CS75谍照",
            "sourceTitle": "原创  新款长安CS75谍照 软质中控台/全景天窗",
            "sourceTitleMd5": "c614cc0c084dc5b157e2fd90ea8e586c",
            "coverImg": "/news/nc/bcn/lsnt-323x186.jpg",
            "sourceUrl": "http://www.pcauto.com.cn/nation/947/9475391.html",
            "createTime": "2017-02-14 01:53:52",
            "updateTime": "2017-02-14 12:27:42",
            "deleteTime": null,
            "classId": 102,
            "classId2": 109,
            "description": "新款长安CS75车型陆续到店，新车组显著的变化在于配备了全景天窗，中控台增加了软质材料包裹。4S给出的1.5T手动挡中高配车型的报价分别为11.98万及12.68万元。",
            "isHomePage": 1,
            "isNewsPage": 1,
            "shortTitle": "新款长安CS75谍照曝光",
            "indexThumb": "/news/nc/bcn/eyvy-326x183.jpg",
            "upAdmin": "ouyanheng204@emao.com",
            "publishTime": "4小时前",
            "isCheck": 4,
            "className": "新车",
            "statusName": "上线",
            "mediaName": "太平洋汽车",
            "mediaSourceUrl": "http://www.pcauto.com.cn/",
            "mediaType": 3,
            "content": "",
            "thumb": "http://img.emao.net/news/nc/bcn/lsnt-323x186.jpg",
            "newsId": 1165850,
            "newsUrl": "http://news.emao.com/news/201702/1165850.html",
            "url": "http://news.emao.com/news/201702/1165850.html",
            "murl": "http://news.m.emao.com/news/201702/1165850.html",
            "commentUrl": "http://news.emao.com/news/201702/1165850.html#comment_list",
            "m_commentUrl": "http://news.emao.com/news/201702/1165850.html#comment_list",
            "is_news_index": 1,
            "author": "太平洋汽车",
            "index_thumb": "http://img.emao.net/news/nc/bcn/eyvy-326x183.jpg",
            "comments": 0
      },
      {
        "id": 1165850,
            "accountId": 559,
            "adminId": 1,
            "sourceTime": 1487037232,
            "classTagId": 0,
            "status": 1,
            "type": 3,
            "title": "软质中控台/全景天窗 新款长安CS75谍照",
            "sourceTitle": "原创  新款长安CS75谍照 软质中控台/全景天窗",
            "sourceTitleMd5": "c614cc0c084dc5b157e2fd90ea8e586c",
            "coverImg": "/news/nc/bcn/lsnt-323x186.jpg",
            "sourceUrl": "http://www.pcauto.com.cn/nation/947/9475391.html",
            "createTime": "2017-02-14 01:53:52",
            "updateTime": "2017-02-14 12:27:42",
            "deleteTime": null,
            "classId": 102,
            "classId2": 109,
            "description": "新款长安CS75车型陆续到店，新车组显著的变化在于配备了全景天窗，中控台增加了软质材料包裹。4S给出的1.5T手动挡中高配车型的报价分别为11.98万及12.68万元。",
            "isHomePage": 1,
            "isNewsPage": 1,
            "shortTitle": "新款长安CS75谍照曝光",
            "indexThumb": "/news/nc/bcn/eyvy-326x183.jpg",
            "upAdmin": "ouyanheng204@emao.com",
            "publishTime": "4小时前",
            "isCheck": 4,
            "className": "新车",
            "statusName": "上线",
            "mediaName": "太平洋汽车",
            "mediaSourceUrl": "http://www.pcauto.com.cn/",
            "mediaType": 3,
            "content": "",
            "thumb": "http://img.emao.net/news/nc/bcn/lsnt-323x186.jpg",
            "newsId": 1165850,
            "newsUrl": "http://news.emao.com/news/201702/1165850.html",
            "url": "http://news.emao.com/news/201702/1165850.html",
            "murl": "http://news.m.emao.com/news/201702/1165850.html",
            "commentUrl": "http://news.emao.com/news/201702/1165850.html#comment_list",
            "m_commentUrl": "http://news.emao.com/news/201702/1165850.html#comment_list",
            "is_news_index": 1,
            "author": "太平洋汽车",
            "index_thumb": "http://img.emao.net/news/nc/bcn/eyvy-326x183.jpg",
            "comments": 0
      }
    ]
  },
  //模拟面板指示点
  swiperChange: function(e){
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //事件处理函数
  bindViewTap: function () {
    // wx.navigateTo({
    //   // url: '../logs/logs'
    // })
  },
  onLoad: function () {
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          windowHeight: res.windowHeight
        });
      }
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      that.update()
    })
    // //本地存储数据
    //   wx.setStorage({
    //     key:"key",
    //     data:[{
    //       flag: false
    //     }]
    //   })
  },
  onShow:function(){
    //   在页面展示之后先获取一次数据
    // console.log(page);
  },
  bindDownLoad:function(){
    var that = this
    GetList(that);
  },
  onShareAppMessage: function(){
    return {
      title: '一猫汽车网',
      path: '/'
    }
  }
})


