<template>
  <div>
    {{message}}
    <div>
      <button @click="increase">increase</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Hello vue.js---home',
      }
    },
    methods: {
      increase() {
        this.$store.dispatch('increase')
      },
    },
  }
</script>

<style lang="stylus" scoped>
@import './index.styl'
div
  background-color: #999
  button
    width: 200px
    height: 30px
</style>


