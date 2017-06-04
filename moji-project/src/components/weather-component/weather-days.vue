  <template>
  <div class="days">
    <div class="single">
      <div>
        <em>今天</em>
        <b>-5 / 4°</b>
      </div>
      <div>
        <strong>霾</strong>
        <span><img src="http://php.weather.sina.com.cn/images/yb3/78_78/qing_0.png"></span>
      </div>
    </div>
    <div class="single">
      <div>
        <em>明天</em>
        <b>-2 / 4°</b>
      </div>
      <div>
        <strong>霾</strong>
        <span><img src="http://php.weather.sina.com.cn/images/yb3/78_78/qing_0.png"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        daysH:""
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../common/css/weather-days";
</style>
