<template lang="pug">
  div
    h1.aaa 首sdafsd
    left
    right
    ul
      li(v-for="item in init") {{ item.aaa }}

    button(@click="addList") 加新list
    button(@click="pushList") 追加list
</template>

<style lang="stylus" scoped>
  h1
    background: pink
    transition: 2s
    display: flex

</style>

<script>
  import left from '../../../components/left.vue'
  import right from '../../../components/right.vue'

  import { addList, pushList, initList } from '../../../vuex/actions.js'

  export default {
    name: 'index',
    components: {
      left,
      right
    },
    route: {
      data({ to, next }) {
        this.initList();
        next();
      }
    },
    vuex: {
      actions: {
        initList,
        pushList,
        addList
      },
      getters: {
        init: state => state.init,
        newList: state => state.newList
      }
    }
  }
</script>
