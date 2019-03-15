<template>
  <div class="home">
    <header>
      <router-link to='/home' class='header-ico'>
        <span class="iconfont">&#xe624;</span>
      </router-link>
      首页的header
    </header>
    <div class="content">
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis placeat nihil esse, qui. Soluta ipsa, quo cum magni, a minus ipsam quidem asperiores temporibus deleniti nesciunt quis officiis reprehenderit vel.</div>

      <router-link to='/home/detail'>点击详情</router-link>
    </div>
  </div>
</template>
<script>
import '@/assets/styles/iconfont.css'
export default{
  name: 'IndexHome'
}
</script>
<style lang='stylus' scoped>
.home
  header
    height: 10vw
    line-height: 10vw
    background: #eee
    text-align: center
    font-size: .5rem
    .header-ico
      position: absolute
      left: 1vw
      width: 30px
      height: 30px
      font-size: 30px

  .content
    font-size: .5rem
    padding: 2vw
    text-indent: 1vw
  button
    display: block
    margin:0 auto
</style>
