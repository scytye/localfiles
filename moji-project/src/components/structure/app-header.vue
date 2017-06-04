<template>
  <header class="header">
    <div class="search" @click="jump({path:'/search'})">
      <span class = "search-btn"></span>
      <span class="city">北京市</span>
    </div>
    <div class="city-note">
      <em class="white"></em>
      <em></em>
      <em></em>
      <em></em>
      <em></em>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        searchShow:false
      }
    },
    methods:{
    	clickdown(){
        this.searchShow = true;
        console.log(this.$router)
      },
      jump (to) {
        if (this.$router) {
          this.$router.push(to)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../../common/css/app-header";
</style>
