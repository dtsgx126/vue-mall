<template>
  <div class="commodity">
    <header>
      <img class="header-ico" src="@/assets/icos/feneli_search@2x.png" alt="">
      <input type="text" placeholder="中老年羊奶粉">
    </header>
    <side-nav class='nav'></side-nav>
    <router-view class='area'></router-view>
  </div>
</template>
<script>
import '@/assets/styles/iconfont.css'
import Area from '@/pages/Index/components/Classify/components/Area.vue'
import Area1 from '@/pages/Index/components/Classify/components/Area1.vue'
import SideNav from '@/pages/Index/components/Classify/components/SideNav.vue'
export default{
  name: 'IndexCommodity',
  components: {
    Area,
    SideNav
  }
}
</script>
<style lang='stylus' scoped>
.commodity
  header
    background: #fff
    font-size: 18px
    position: relative
    padding:1.5vw 4vw
    box-sizing: border-box
    input
      background: #f8f8f8
      width: 100%
      height: 10vw
      box-sizing: border-box
      border-radius: 5px
      padding-left: 11.7vw
      border:1px solid #979797
    .header-ico
      position: absolute
      left: 6.4vw
      top: 50%
      transform: translateY(-50%)
      width: 20px
</style>
