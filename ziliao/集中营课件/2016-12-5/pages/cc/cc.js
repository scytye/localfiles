Page({
  data:{

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

  },
  onReady:function(){
    // 页面渲染完成
    wx.getSystemInfo({
      success: function(res) {
        var W = res.windowWidth;
        var H = res.windowHeight;

        var ctx = wx.createContext();

        // ctx.moveTo(50, 50);
        // ctx.lineTo(200, 300);
        // ctx.stroke();
        //
        // wx.drawCanvas({
        //   canvasId:'1',
        //   actions:ctx.getActions()
        // })

        var n = W * H / 3000;

        //console.log(n);
        var ps = [];
        for(var i=0; i<n; i++){
          var p = new Particle(W,H);
          ps.push(p);
        }

        function render(){
          ctx.clearRect(0, 0, W, H);
          ps.forEach(function(item){
            item.move(W,H).draw(ctx);

          });
          wx.drawCanvas({
            canvasId:'1',
            actions:ctx.getActions()
          })
          requestAnimationFrame(render);
        }

        render()




      }
    })
  }
})

class Particle {
  constructor(W,H){
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.r = 3;
    this.reset(W,H)
    return this;
  }
  reset(W,H){
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.vx = (Math.random() - 0.5);
    this.vy = Math.random() * 0.5 + 0.2
    return this;
  }
  move(W,H){
    this.x += this.vx;
    this.y += this.vy;
    if(this.x + this.r < 0 || this.x - this.r > W){
      this.x = Math.random() * W;
      this.y = 0;
    }
    if(this.y - this.r > H){
      this.x = Math.random() * W;
      this.y = 0;
    }
    return this;
  }
  draw(ctx){
    ctx.save();
    ctx.setFillStyle("#ffffff");
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, 2*Math.PI);
    ctx.fill();
    ctx.restore();
    return this;
  }
}
