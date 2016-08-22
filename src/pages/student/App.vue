<template lang="pug">
  div
    h1 头部
    a(v-link="{ name: 'index' }") student首页
    a(v-link="{ name: 'index2' }") student首页2
    a(href="/") 去首页

    ul
      li(v-for="item in oldList") {{ item.aaa }}
      

    router-view(keep-alive)

    h1 尾部
</template>

<style lang="stylus" src="../../stylus/test.styl"></style>

<script>

  import store from '../../vuex/store.js'

  export default {
    name: 'app',

    store,

  }
</script>
