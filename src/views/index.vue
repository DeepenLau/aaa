<template lang="pug">
  div
    h1 首页
    left
    right
</template>

<style lang="stylus" scoped>

  h1
    background: red
    transition: 1s

</style>

<script>
  import left from '../components/left.vue';
  import right from '../components/right.vue';

  export default {
    name: 'index',
    components: {
      left,
      right
    }
  }
</script>
