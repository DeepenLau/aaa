<template lang="pug">
  div
    h1 头部

    router-view(keep-alive)

    h1 尾部
</template>

<script>
  export default {
    name: 'app'
  }
</script>
