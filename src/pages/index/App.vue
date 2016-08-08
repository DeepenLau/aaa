<template lang="pug">
  div
    h1 头部
    a(v-link="{ name: 'index' }") 首页
    a(v-link="{ name: 'index2' }") 首页2
    a(href="/student") 去 student 首页

    router-view(keep-alive)

    h1 尾部
</template>

<style lang="stylus" src="../../stylus/test.styl"></style>

<script>
  export default {
    name: 'app'
  }
</script>
