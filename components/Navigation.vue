<template>
  <div>
    <div class="fixed t0 l0 w-100 h-100">
      <img
        v-if="spaceBg"
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
    <div
      class="df justify-between justify-end-m items-center pa1 pl2-m pr2-m z-2 absolute t0 w-100"
    >
      <a href="/" :class="[css.color, 'tdx', 'relative', 'mr-au']">
        <h1>🛰 Preons</h1>
      </a>

      <nuxt-link
        to="/learn"
        :class="['dn', 'dib-m', 'tdx', 'mr1', css.color, 'relative']"
        >Learn</nuxt-link
      >

      <nuxt-link
        to="/articles"
        :class="['dn', 'dib-m', 'tdx', 'mr1', css.color, 'relative']"
        >Articles</nuxt-link
      >

      <nuxt-link
        to="/search"
        :class="['dn', 'dib-m', 'tdx', 'mr1', css.color, 'relative']"
        >Reference</nuxt-link
      >

      <a
        href="https://github.com/preons/preons"
        class="dn dib-m tdx hotpink mr1 relative"
        >GitHub</a
      >

      <nuxt-link
        to="/search"
        class="dn-m relative mr-xxsmall ml-au ml0-m"
        title="Search functional css classes and their related css properties"
      >
        <img
          alt="Search button"
          src="/icons/search-white.svg"
          height="24"
          width="24"
        />
      </nuxt-link>

      <div class="dn-m" v-on:click="showMenu">
        <span class="h-wire w1 bg-hotpink db mb-xxxsmall"></span>
        <span class="h-wire w1 bg-hotpink db mb-xxxsmall"></span>
        <span class="h-wire w1 bg-hotpink db"></span>
      </div>
    </div>

    <div v-if="menu" class="fixed l0 t0 w-100 h-100 z-3">
      <span class="bg-white absolute t0 l0 w-100 h-100 o-100 z0"></span>

      <div
        class="pa1 df justify-between items-center relative lh0 z-1 bca-greyll bsa-solid bwb1"
      >
        <a href="/" class="hotpink tdx relative">
          <h1>🛰 Preons</h1>
        </a>

        <div class="dn-m" v-on:click="hideMenu">
          <span class="h-wire w1 bg-hotpink db o0 mb-xxxsmall"></span>
          <span class="h-wire w1 bg-hotpink db mb-xxxsmall"></span>
          <span class="h-wire w1 bg-hotpink db o0"></span>
        </div>
      </div>

      <ul class="greyd relative fwl ls1">
        <li>
          <nuxt-link
            class="pa1 bca-greyll bsa-solid bwb1 db greyd tdx"
            to="/learn"
            >Learn</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            class="pa1 bca-greyll bsa-solid bwb1 db greyd tdx"
            to="/articles"
            >Articles</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            class="pa1 bca-greyll bsa-solid bwb1 db greyd tdx"
            to="/search"
            >Reference</nuxt-link
          >
        </li>
        <li>
          <a
            class="pa1 bca-greyll bsa-solid bwb1 db hotpink tdx"
            href="https://github.com/preons/preons"
            >GitHub</a
          >
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
      this.menu = true
    },
    hideMenu() {
      this.menu = false
    }
  }
}
</script>
