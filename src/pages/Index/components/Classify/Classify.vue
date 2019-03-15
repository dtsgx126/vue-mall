<template>
  <div class="commodity">
    <header>
      <input type="text">
    </header>
    <side-nav class='nav'></side-nav>
    <router-view class='area'></router-view>
    <!-- <router-link to='/detail' class='link'>看商品的详情</router-link> -->
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
  display: flex
  flex-direction: column
  align-items: center
  .area
    float: right
  header
    width: 100%
    height: 10vw
    line-height: 10vw
    background: #eee
    text-align: center
    font-size: .5rem
    .header-ico
      position: absolute
      left: 1vw
      font-size: 30px
  .link
    font-size: 30px
    border:1px solid #333
    margin: 0 auto

</style>
