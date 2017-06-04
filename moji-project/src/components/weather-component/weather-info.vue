<template>
  <div class="info-box">
    <div class="info">
      <div class ="info-weather">
        <a href="javascript:;">
          <em class="tem">21</em>
          <em class="ico_temp">&#xe650;</em>
          <em class="ico-wea">雾</em>
        </a>
      </div>
      <div class="info-about">
        <ul>
          <li>
            <i class="ico_water"></i>
            <i class="text">77%</i>
            <i class="ico_wind"></i>
            <i class="text">1级</i>
          </li>
          <li class="info-aqi">
            <a href="javascript:;">
              <span class='info-warn warn-3'></span>
              <strong>
                <i style=" font-weight: 400;">104</i>
                <i>严重</i>
              </strong>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="weather-announcer">
      <div class="tips">天气阴冷，穿暖和点吧！</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'info-box',
    props:["numH","daysH"],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../common/css/weather-info";
</style>
