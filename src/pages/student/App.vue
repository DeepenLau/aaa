<template lang="pug">
  div
    h1 头部
    a(v-link="{ name: 'index' }") student首页
    a(v-link="{ name: 'index2' }") student首页2
    a(href="/") 去首页

    router-view(keep-alive)

    h1 尾部
</template>

<style lang="stylus" src="../../stylus/test.styl"></style>

<script>
  export default {
    name: 'app'
  }
</script>
