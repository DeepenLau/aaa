<template lang="pug">
  div
    h1 头部
    a(v-link="{ name: 'index' }") 首页
    a(v-link="{ name: 'index2' }") 首页2
    a(href="/student/") 去 student 首页

    //- ul
    //-   li(v-for="item in init") {{ item.aaa }}
    //-
    //- ul(v-if="newList.length")
    //-   li(v-for="item in newList") {{ item }}

    //- button(@click="addList") 加新list
    //- button(@click="pushList") 追加list

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
