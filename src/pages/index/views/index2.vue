<template lang="pug">
  div
    h1 首页2
    ul
      li(v-for="item in init") {{ item.aaa }}
</template>

<script>
  export default {
    name: 'index2',
    vuex: {
      getters: {
        init: state => state.init,
        newList: state => state.newList
      }
    }
  }
</script>
