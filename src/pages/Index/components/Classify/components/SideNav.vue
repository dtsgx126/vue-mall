<template>
  <div class="wrap">
    <router-link class="btn border-bottom" to='/classify/area'>新品</router-link>
    <router-link class="btn border-bottom" to='/classify/area1'>1段奶粉</router-link>
    <router-link class="btn border-bottom" to='area'>2段奶粉</router-link>
    <router-link class="btn border-bottom" to='area'>3段奶粉</router-link>
    <router-link class="btn border-bottom" to='area'>4段奶粉</router-link>
    <router-link class="btn border-bottom" to='area'>青少年奶粉</router-link>
    <router-link class="btn border-bottom" to='area'>中老年段奶粉</router-link>
  </div>
</template>
<script>
import '@/assets/styles/iconfont.css'
export default{
  name: 'SideNav'
}
</script>
<style lang='stylus' scoped>
.wrap
  display: flex
  position: absolute
  left: 0
  top : 10vw
  width: 2rem
  flex-direction: column
  justify-content: space-between
  align-items: center
  .btn
    margin:.7rem auto
</style>
