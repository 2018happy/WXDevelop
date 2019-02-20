var Code;
var Self;
// pages/Index02/Index02.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  Login:function(){
    Self = this;
    //'wx.login'函数：获取用户登陆凭证(返回Json对象中的code属性；其实该函数的目的是为了后续根据'用户登陆凭证'
    //来获取登陆用户的唯一标识(openid)
  wx.login({
    success:function(res1){     
    //console.log(res);
    res1.code;
    wx.getUserInfo({
      success:function(res2){
      //console.log(res2);
      Self.setData({'NickName':res2.userInfo.nickName});
      Self.setData({'PicUrl':res2.userInfo.avatarUrl});
      }
    })
    }
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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

  }
})