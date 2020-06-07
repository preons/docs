<template>
  <div :class="[spaceBg ? '' : 'fixed z-1 w-100 t0 l0']">
    <div 
        v-if="spaceBg" class="fixed t0 l0 w-100 h-100">
      <img
        class="absolute t0 l0 w-100 h-100 of-cover z-1"
        alt="Image of space in the background of the screen"
        src="/images/space.jpeg"
      />
      <!-- Image overlay -->
      <span
        v-if="spaceBg"
        class="bg-hotpink absolute t0 l0 w-100 h-100 o-10 z-1"
      ></span>
    </div>
    <div :class="['df-m w-100 justify-between relative z-1', spaceBg ? '' : 'bg-neutrald-m']">
      <nav class="df items-center justify-between bg-neutrald bg-transparent-m items-center-m z-2 fixed relative-m w-100 w-au-m">
          <h1 class="pa1 pt-xsmall pb-xsmall fs1 neutrall lh0 ff-josefin pl2-m">
            <nuxt-link class="tdx light lh0 lh1-m dib" to="/">Preons</nuxt-link>
          </h1>

          <nuxt-link to="/search" title="Search functional css classes and their related css properties" class="mr1 dn-m relative mr-xxsmall ml-au">
              <img alt="Search button" src="/icons/search-white.svg" height="30" width="30">
          </nuxt-link>
          
          <div class="dn-m pr1" v-on:click="showMenu">
              <span v-if="!menu" class="h-thin w-icon bg-neutrall db mb-xxxsmall"></span>
              <span class="h-thin w-icon bg-neutrall db mb-xxxsmall"></span>
              <span v-if="!menu" class="h-thin w-icon bg-neutrall db"></span>
          </div>
      </nav>
      <ul :class="[menu ? 'db' : 'dn', 'fixed relative-m', 'w-100', 'h-100', 't0', 'pt5 pt0-m', 'db', 'bg-dark', 'df-m', 'bg-transparent-m', 'pr1-m', 'z-1', 'w-au-m']">
          <li>
              <nuxt-link to="/learn" class="lh0 lh1-m fs0 pa1 pt-xsmall pb-xsmall db tdx active ff-josefin tfu center">
                  Learn
              </nuxt-link>
              <span class="bg-layout bra1 h-thin ml-au mr-au w2 db dn-m"></span>
          </li>
          <li>
              <nuxt-link to="/articles" class="lh0 lh1-m fs0 pa1 pt-xsmall pb-xsmall db tdx active ff-josefin tfu center">
                  Articles
              </nuxt-link>
              <span class="bg-layout bra1 h-thin ml-au mr-au w2 db dn-m"></span>
          </li>
          <li>
              <nuxt-link to="/search" class="lh0 lh1-m fs0 pa1 pt-xsmall pb-xsmall db tdx active ff-josefin tfu center">
                  Reference
              </nuxt-link>
              <span class="bg-layout bra1 h-thin ml-au mr-au w2 db dn-m"></span>
          </li>
          <li>
              <a href="https://github.com/preons/preons" class="lh0 lh1-m fs0 pa1 pt-xsmall pb-xsmall db tdx active ff-josefin tfu center">
                  GitHub
              </a>
              <span class="bg-layout bra1 h-thin ml-au mr-au w2 db dn-m"></span>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['spaceBg'],
  watch: {
    $route(app) {
      this.menu = false
    }
  },
  data() {
    return {
      menu: false,
      css: {
        color: this.spaceBg ? 'white' : 'greyd'
      }
    }
  },
  methods: {
    showMenu() {
      this.menu = !this.menu
    },
    hideMenu() {
      this.menu = false
    }
  }
}
</script>
