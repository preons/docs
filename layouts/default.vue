<template>
  <div class="bg-black ff-raleway white">
    <div class="fixed t0 l0 w-100 h-100">
      <img
        class="absolute t0 l0 w-100 h-100 of-cover z-1"
        src="https://images.unsplash.com/photo-1578543880803-fb570c1df1f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80"
      />
      <!-- Image overlay -->
      <span class="bg-hotpink absolute t0 l0 w-100 h-100 o-10 z-1"></span>
    </div>
    <navigation class="df justify-between items-center pa1 pl2-m pr2-m z-2 fixed t0 w-100">
      <a href="/" class="white tdx relative"><h1>Preons</h1></a>

      <a href="https://github.com/preons/preons" class="tdx hotpink ml-au mr1 relative"
        ><span>GitHub</span></a
      >

      <span v-on:click="showSearch" class="relative">
        <img src="/icons/search-white.svg" height="24" width="24" />
      </span>
    </navigation>

    <!-- Padder -->
    <span class="h8 h12-m h-xbig-l dt w-100"></span>

    <!-- Search form -->
    <div v-if="search" class="pl1 pr1 relative">
      <div class="align-center pa1 bsa-solid bwa1 bca-white bra4 mw-xxsuper ml-au mr-au">
        <input
          class="db bg-transparent white bwa0 w-100"
          type="text"
          placeholder="Search references..."
        />
      </div>
    </div>

    <nuxt v-if="!search" />
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
