<template>
  <div class="exponent">
    <h3>生活指数</h3>
    <ul>
      <li>
        <span><img src="https://h5tq.moji.com/mtianqi/assets/images/script/0.png"></span>
        <em>较差</em>
        <em>空气指数</em>
      </li>
      <li>
        <span><img src="https://h5tq.moji.com/mtianqi/assets/images/script/7.png"></span>
        <em>保湿</em>
        <em>化妆</em>

      </li>
      <li>
        <span><img src="https://h5tq.moji.com/mtianqi/assets/images/script/12.png"></span>
        <em>极易发</em>
        <em>感冒</em>
      </li>
      <li>
        <span> <img src="https://h5tq.moji.com/mtianqi/assets/images/script/17.png"></span>
        <em>不宜</em>
        <em>洗车</em>
      </li>

      <li>
        <span><img src="https://h5tq.moji.com/mtianqi/assets/images/script/20.png"></span>
        <em>冷</em>
        <em>穿衣</em>
      </li>
      <li>
        <span><img src="https://h5tq.moji.com/mtianqi/assets/images/script/21.png"></span>
        <em> 最弱</em>
        <em>紫外线</em>
      </li>
      <li>
        <span><img src="https://h5tq.moji.com/mtianqi/assets/images/script/26.png"></span>
        <em>不适宜</em>
        <em>运动</em>
      </li>
      <li>
        <span><img src="https://h5tq.moji.com/mtianqi/assets/images/script/28.png"></span>
        <em>不适宜</em>
        <em>钓鱼</em>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../common/css/weather-exponent";
</style>
