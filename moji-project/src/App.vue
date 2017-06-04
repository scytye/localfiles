<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import "common/css/reset";
@import "common/lib/animate.css";
body,html{
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
@font-face {
  font-family: 'iconfont';  /* project id 293875 */
  src: url('//at.alicdn.com/t/font_rt3jczhxgdvon7b9.eot');
  src: url('//at.alicdn.com/t/font_rt3jczhxgdvon7b9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_rt3jczhxgdvon7b9.woff') format('woff'),
  url('//at.alicdn.com/t/font_rt3jczhxgdvon7b9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_rt3jczhxgdvon7b9.svg#iconfont') format('svg');
}
a:visited{
  color: rgba(255, 255, 255, 0.4);
}
</style>
