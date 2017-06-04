<template>
  <div class="week-weather clearfix">
    <h3>6天预报</h3>
    <canvas class="week-line" width="710" height="246"></canvas>
    <ul class="clearfix featureUl">
      <li data-high="4" data-low="-5">
        <em>周日</em>
        <dl class="weather-per">
          <dd>霾</dd>
          <dt><img src="https://h5tq.moji.com/mtianqi/assets/images/wea/w45.png" alt="" /></dt>
        </dl>
        <div></div>
        <dl class="weather-per">
          <dt><img src="https://h5tq.moji.com/mtianqi/assets/images/wea/w46.png" alt="" /></dt>
          <dd>霾</dd>
        </dl>
        <dl class="wind">
          <dd>南风</dd>
          <dd>3级</dd>
        </dl>
      </li>
      <li data-high="4" data-low="-2">
        <em>周一</em>
        <dl class="weather-per">
          <dd>霾</dd>
          <dt><img src="https://h5tq.moji.com/mtianqi/assets/images/wea/w45.png" alt="" /></dt>
        </dl>
        <div></div>
        <dl class="weather-per">
          <dt><img src="https://h5tq.moji.com/mtianqi/assets/images/wea/w46.png" alt="" /></dt>
          <dd>霾</dd>
        </dl>
        <dl class="wind">
          <dd>北风</dd>
          <dd>3级</dd>
        </dl>
      </li>
      <li data-high="3" data-low="-6">
        <em>周二</em>
        <dl class="weather-per">
          <dd>多云</dd>
          <dt><img src="https://h5tq.moji.com/mtianqi/assets/images/wea/w1.png" alt="" /></dt>
        </dl>
        <div></div>
        <dl class="weather-per">
          <dt><img src="https://h5tq.moji.com/mtianqi/assets/images/wea/w31.png" alt="" /></dt>
          <dd>多云</dd>
        </dl>
        <dl class="wind">
          <dd>北风</dd>
          <dd>3级</dd>
        </dl>
      </li>
      <li data-high="3" data-low="-5">
        <em>周三</em>
        <dl class="weather-per">
          <dd>晴</dd>
          <dt><img src="https://h5tq.moji.com/mtianqi/assets/images/wea/w0.png" alt="" /></dt>
        </dl>
        <div></div>
        <dl class="weather-per">
          <dt><img src="https://h5tq.moji.com/mtianqi/assets/images/wea/w30.png" alt="" /></dt>
          <dd>晴</dd>
        </dl>
        <dl class="wind">
          <dd>北风</dd>
          <dd>3级</dd>
        </dl>
      </li>
      <li data-high="6" data-low="-5">
        <em>周四</em>
        <dl class="weather-per">
          <dd>晴</dd>
          <dt><img src="https://h5tq.moji.com/mtianqi/assets/images/wea/w0.png" alt="" /></dt>
        </dl>
        <div></div>
        <dl class="weather-per">
          <dt><img src="https://h5tq.moji.com/mtianqi/assets/images/wea/w30.png" alt="" /></dt>
          <dd>晴</dd>
        </dl>
        <dl class="wind">
          <dd>北风</dd>
          <dd>3-4级</dd>
        </dl>
      </li>
      <li data-high="5" data-low="-5">
        <em>周五</em>
        <dl class="weather-per">
          <dd>晴</dd>
          <dt><img src="https://h5tq.moji.com/mtianqi/assets/images/wea/w0.png" alt="" /></dt>
        </dl>
        <div></div>
        <dl class="weather-per">
          <dt><img src="https://h5tq.moji.com/mtianqi/assets/images/wea/w30.png" alt="" /></dt>
          <dd>晴</dd>
        </dl>
        <dl class="wind">
          <dd>南风</dd>
          <dd>3级</dd>
        </dl>
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
  @import "../../common/css/weather-weeks";
</style>
