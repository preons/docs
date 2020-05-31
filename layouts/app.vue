<template>
  <div class="ff-raleway h-100vh">
    <div v-on:click="toggleMenu" class="fixed h2 w2 bg-black b2 l0"></div>
    <div v-if="menu" class=""></div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false
    }
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu
    }
  }
}
</script>

<style lang="scss">
@import '~hamburgers/_sass/hamburgers/hamburgers';
</style>
