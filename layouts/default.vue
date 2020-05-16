<template>
  <div class="bg-black ff-raleway white">
    <div class="fixed t0 l0 w-100 h-100">
      <img
        class="absolute t0 l0 w-100 h-100 of-cover z-1"
        alt="Image of space in the background of the screen"
        src="/images/space.jpeg"
      />
      <!-- Image overlay -->
      <span class="bg-hotpink absolute t0 l0 w-100 h-100 o-10 z-1"></span>
    </div>
    <div class="df justify-between items-center pa1 pl2-m pr2-m z-2 absolute t0 w-100">
      <a href="/" class="white tdx relative">
        <h1>Preons</h1>
      </a>

      <a href="https://github.com/preons/preons" class="tdx hotpink ml-au mr1 relative">
        <span>GitHub</span>
      </a>

      <nuxt-link
        to="/search"
        class="relative"
        title="Search functional css classes and their related css properties"
      >
        <img alt="Search button" src="/icons/search-white.svg" height="24" width="24" />
      </nuxt-link>
    </div>

    <!-- Padder -->
    <span class="h8 h12-m h-xbig-l dt w-100"></span>

    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: false
    }
  },
  methods: {
    showSearch() {
      this.search = !this.search
    }
  }
}
</script>
