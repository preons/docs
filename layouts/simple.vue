<template>
  <div class="bg-light ff-martel dark">
    <navigation />

    <!-- <div class="fixed pa-xxsmall pt-xxxsmall pb-xxxsmall bg-active t3 l0 z-2 dn-m">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path fill="#302a61" d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
      </svg>
    </div> -->

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
