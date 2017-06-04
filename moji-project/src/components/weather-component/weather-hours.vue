<template>
  <div class="hours-temp" style="border-width:1px;">
    <div class="tabs clearfix">
      <strong style="display:block">日落 16:50</strong>
      <em class="btn">
        <span class="word">24小时预报</span>
        <span class="ico_close"></span>
      </em>
    </div>
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
  @import "../../common/css/weather-hours";
</style>
