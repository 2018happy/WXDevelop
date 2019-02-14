//微信小程序已经将index.js文件和index.wxml视图文件关联起来了。也就是
//说无需另外在index.wxml文件中通过标记语言显式引入该js文件
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'name':'www.baidu.com',
    'Flag':true,
    'Age1':26,
    'Age2':29,
    'Array':['1','2']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //getApp函数用于获取微信小程序全局配置信息对应的实例(对象))
   var app=getApp();
   this.setData({'Version':app.globalData.Version});
   app.Test();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏：其作用是当视图页面
   * 隐藏的时候，自动执行该函数。
   */
  onHide: function () {
    //通过setData函数将视图页面相对应名字的变量赋值，
    //同时改变data键对应的json对象中名字对应的键所
    //指向的值
    this.setData({'name':'www.hao69.com'});
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  Request1:function(){
   wx.request({
     url: 'http://localhost:52581/',
     method:'GET',
    
     success:function(res){
     console.log(res.data);
     },
     fail:function(){
       console.log('fail');
     },
     complete:function(){
       console.log('Complete');
     }
   }
   )
  },
  Request2: function () {
    wx.request({
         url:'http://localhost:52581/UserInfo/ReciveJsonData/',
      method: 'POST',
      data: {
        'a': JSON.stringify({ Name: '张三', Job: '学生' }),
        'b': JSON.stringify({ Name: '李明', Job: '程序员' })
      } ,
      dataType:'json',
      success: function (res) {
        console.log(res.data);
      },
      fail: function () {
        console.log('fail');
      },
      complete: function () {
        console.log('Complete');
      },

    }
    )
  }
})



