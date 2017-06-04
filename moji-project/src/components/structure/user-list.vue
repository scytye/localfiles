<template>
  <div id="wrap" ref="H123">
      <div class="weather-section">
        <weather_list :message="wrapH"></weather_list>
        <app_end></app_end>
      </div>
  </div>
</template>

<script>
  import weather_list from '../all-content/weather-list';
  import app_end from './app-end';
  export default {
    name: 'wrap',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        wrapH:''
      }
    },
    components:{
      weather_list,
      app_end
    },
    mounted (){
    	console.log(this.$refs.H123.clientHeight,this.$props);
    	this.wrapH = this.$refs.H123.clientHeight;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #wrap{
    position: absolute;
    top: 80px;
    bottom: 80px;
    left: 0;
    right:0;
    overflow: hidden;
    overflow-y: auto;
  }
  .weather-section{
    transform: translate3d(0,0,0);
  }
  .move-enter-active, .move-leave-active{
    transition: all 0.2s linear;
    transform: translate3d(0, 0, 0)
  }
  .move-enter, .move-leave-active{
    transform: translate3d(100%, 0, 0)
  }
</style>
