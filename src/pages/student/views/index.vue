<template lang="pug">
  div
    h1.aaa student1
    left
    right
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

  export default {
    name: 'index',
    components: {
      left,
      right
    }
  }
</script>
