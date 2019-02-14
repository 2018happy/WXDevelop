//逻辑层代码
Page({
  data:{
    'Array':[1,2,3,4,5,6],
    'Array1':[{'message':'1'},{'message':'2'}],
    'Item':{
      index:1,
      msg:'hi...',
      time:'2017-01-12'
    }
  },
  //1.关于事件处理函数的键值对绑定代码需要单独编写，不能将其
  //写在"data"键的绑定值中。
  //2.通过参数e来获取事件函数所绑定的视图组件的"data-{自定义名称}"属性值
  //(注意:获取该属性值的时候，指定的属性名称必须和视图组件的"data-{自定义名称}"属性名中
  //的"{自定义名称}"部分一致)
  MyTap: function (e) {
    console.log(e.target.dataset.name);

  }
});