<template>
  <div>
    <button @click="getAsync">Get Async</button>
    {{ $store.state.data }}
  </div>
</template>

<script>
  export default {
    name: 'AsyncButton',

    methods: {
      getAsync () {
        this.$store.dispatch('getAsync')
      }
    }
  }
</script>

<style scoped>
</style>
