<template>
  <div class="bg-light ff-martel neutrald">
    <navigation />

    <span class="dt" style="height: 5rem;"></span>

    <nuxt />
  </div>
</template>

<script>
import navigation from '../components/Navigation'

export default {
  watch: {
    $route(app) {
      this.spaceBg =
        this.$route.name === 'index' || this.$route.name === 'search'
      this.menu = false
    }
  },
  mounted() {
    this.spaceBg = this.$route.name === 'index' || this.$route.name === 'search'
  },
  components: {
    navigation
  },
  data() {
    return {
      menu: false,
      spaceBg: true
    }
  },
  methods: {
    showMenu() {
      this.menu = true
    },
    hideMenu() {
      this.menu = false
    }
  }
}
</script>
