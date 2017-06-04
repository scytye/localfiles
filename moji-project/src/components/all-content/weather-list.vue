<template>
  <section class="weather-con">
    <section class="slide-top" :style="{height: message +'px'}">
      <weather_info></weather_info>
      <weather_days></weather_days>
    </section>
    <weather_hours></weather_hours>
    <weather_weeks></weather_weeks>
    <weather_exponent></weather_exponent>
    <weather_news></weather_news>
  </section>
</template>

<script>
  import weather_info from '../weather-component/weather-info';
  import weather_days from '../weather-component/weather-days';
  import weather_hours from '../weather-component/weather-hours';
  import weather_weeks from '../weather-component/weather-weeks';
  import weather_exponent from '../weather-component/weather-exponent';
  import weather_news from '../weather-component/weather-news';
  export default {
    name: 'weather_con',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    props:['message'],
    components:{
        weather_days,
        weather_hours,
        weather_weeks,
        weather_exponent,
        weather_news,
        weather_info
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .weather-con{
    width: 100%;
    min-height: 100%;
  }
  .slide-top{
    position: relative;
  }
  .scrollBar{
    width: 4px;
    background-color: rgba(255,255,255,0.4);
    position: absolute;
    right: 0;
    top: 0;
    opacity:0;
    transition:0.3s
  }
</style>
