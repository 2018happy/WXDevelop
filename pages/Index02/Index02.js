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
    //'wx.login'函数：获取用户登陆凭证(用户登陆凭证存储在返回的Json对象的code属性中，'用户登陆凭证信息'有效期'
    //为5分钟，超出有效期需要重新获取；'获取用户登陆凭证'的最终目的是为了后续根据'用户登陆凭证'来获取登陆用户的
    //唯一标识。(openid)
  wx.login({
    success:function(res1){     
    Code=res1.code;
    console.log(Code);
    wx.getUserInfo({
      success:function(res2){
      //console.log(res2);
      Self.setData({'NickName':res2.userInfo.nickName});
      Self.setData({'PicUrl':res2.userInfo.avatarUrl});
      //访问后台服务器获取
      //访问后台服务器获取当前用户的APPID
    wx.request({
      url:'http://localhost:52581/UserInfo/GetOpenID',
      data: {Code:Code},
      method:'POST',
      success:function(Res3){
      
      }
    })
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