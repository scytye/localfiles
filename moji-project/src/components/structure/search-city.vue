<template>
  <transition name="slide-fade">
      <div class="search-page">
      <div class="page-hd">
        <h3 class="title-hd">世界,一个触碰的距离</h3>
        <div class="search-con">
          <p><input type="text" placeholder="请输入要搜索的城市" @input="input" ref="inputValue"></p>
          <span>搜索<i class="ico_search"></i></span>
        </div>
        <span class="ico_close" @click="back({path:'/'})">&#xe6d1;</span>
      </div>
      <dl class="hot-city" v-if="hotCity">
        <dt>热门城市</dt>
        <dd><em>北京</em><em>天津</em><em>上海</em></dd>
        <dd><em>重庆</em><em>沈阳</em><em>大连</em></dd>
        <dd><em>郑州</em><em>武汉</em><em>长沙</em></dd>
        <dd><em>广州</em><em>深圳</em><em>南京</em></dd>
      </dl>
      <div class="city-list-con" v-if="!hotCity">
        <ul>
          <li :class="[searchClass ? '' : noResult]"></li>
        </ul>
      </div>
    </div>
  </transition>

</template>
<script>
  export default {
    name: 'search-city',
    data () {
      return {
        hotCity: true,
        searchClass: false,
        noResult:'no_result'
      }
    },
    mounted(){
      console.log(this.$props)
    },
    methods:{
      back () {
        if (this.$router) {
          this.$router.back()
        }
      },
      input(){
        var s = this.$refs.inputValue.value;
      	if(s){
      		this.noResult= 'no_result';
      		this.hotCity = false;
        }else{
      		this.noResult = 'no_value';
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../common/css/search-city";
  .slide-fade-enter-active {
    transition: all .4s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s linear;
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translate3d(0px,1000px,0);
  }
</style>
