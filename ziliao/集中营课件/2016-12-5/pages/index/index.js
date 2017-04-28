Page({
  data:{
    message: '开启小程序之旅',
    img: '../../image/111.jpg',
    n:3,
    array:[
      {message:1},
      {message:2},
      {message:3}
    ],
    imgs:[
      "/image/1.jpg",
      "/image/2.jpg",
      "/image/3.jpg"
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('onload');
    this.setData({
      message: 'daklsdjkl'
    })
  },
  onReady:function(){
    // 页面渲染完成
    console.log('onready');
  },
  onShow:function(){
    // 页面显示
    console.log('onShow');
  },
  onHide:function(){
    // 页面隐藏
    console.log('onhide');
  },
  onUnload:function(){
    // 页面关闭
    console.log('unload');
  },
  click (){
    console.log('1111aaaaaasadasd');
  },
  text (){
    console.log('22222222222');
  }
})
