<template>
  <div class="wrap">
    <router-link :class='{active: isActive}' @click.native='addClass' class="btn" to='/classify/area'>新品</router-link>
    <router-link :class='{active: isActive}' class="btn" to='/classify/area1'>1段奶粉</router-link>
    <router-link @click='addClass' class="btn" to='area'>2段奶粉</router-link>
    <router-link @click='addClass' class="btn" to='area'>3段奶粉</router-link>
    <router-link @click='addClass' class="btn" to='area'>4段奶粉</router-link>
    <router-link @click='addClass' class="btn" to='area'>青少年奶粉</router-link>
    <router-link @click='addClass' class="btn" to='area'>中老年段奶粉</router-link>
  </div>
</template>
<script>
import '@/assets/styles/iconfont.css'
export default{
  name: 'SideNav',
  data: function (argument) {
    return {
      isActive: false
    }
  },
  methods:{
    addClass (e) {
      // var list=e.target.classList
      // console.log(typeof e.target.classList)
      // if(list.indexOf('active') > -1){
      //   isActive=false
      // }
      // isActive= true
      return ''
    }

  }
}
</script>
<style lang='stylus' scoped>
.wrap
  display: flex
  position: absolute
  left: 0
  top : 13vw
  width: 21.6vw
  flex-direction: column
  justify-content: space-between
  align-items: center
  .btn
    margin:4vw auto
    text-align: center
    color: black
  .active
    color: #f8c066
</style>
