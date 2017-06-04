<template>
  <div class="weather">
    <app_header></app_header>
    <app_con></app_con>
    <app_footer></app_footer>
  </div>
</template>

<script>
  import app_header from "./structure/app-header"
  import app_con from "./structure/user-list"
  import app_footer from './structure/app-footer'
export default {
  name: 'weather',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
      app_header,
      app_con,
      app_footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../assets/bg/bg_fog_night.jpg") no-repeat;
}
</style>
