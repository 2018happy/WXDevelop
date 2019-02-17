//AppSecret密钥:ace1909fa14f47966a07c276785c3fde
//APPID:wx72808370c1393af8
//{"access_token":"18_ojAJ95LdMtVfjliDGSxwOaG-j8hsHOTEQWf1KmHO_5VNjX4_TdVtybL32ozWNAT7Ulo1d2QsCNrWTr0oQvSDdtUsbpQRArYMJhvZqA3Bc-lXdbXgTq0qgeCZ-7rUsl3bIyeVabaZtWn_iEUFXEKgAGASZF","expires_in":7200}
//666666
var Pg;
// pages/Index01/Index01.js
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Pg=this;
    //开始下拉刷新动作
    wx.startPullDownRefresh();
    GetList()
  },
  onReachBottom:function(){
    GetList();
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function(){
    GetList();
  }

});

var Arr=[];
//'wx.request'函数:微信小程序平台提供的'接入函数'
function GetList(){
  //显示导航条加载动画
  wx.showNavigationBarLoading();
  wx.request({
    url: 'http://localhost:52581/',
    method:'GET',
    success:function(res){
    //console.log(res.data);
      Arr = Arr.concat(res.data.split('--'));
    console.log(Arr);
    Pg.setData({'lists':Arr});
    },
    complete:function(){
      //隐藏导航条加载动画
      wx.hideNavigationBarLoading();
      //结束下拉刷新动作
      wx.stopPullDownRefresh();
    }
  })
}
