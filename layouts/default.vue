<template>
  <div class="bg-black ff-raleway white">
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
      class="df justify-between items-center pa1 pl2-m pr2-m z-2 absolute t0 w-100"
    >
      <a href="/" class="white tdx relative">
        <h1>Preons</h1>
      </a>

      <a
        href="https://github.com/preons/preons"
        class="dn dib-m tdx hotpink ml-au mr1 relative"
      >
        <span>GitHub</span>
      </a>

      <nuxt-link
        to="/search"
        class="relative mr-xxsmall ml-au"
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
      <span class="bg-black absolute t0 l0 w-100 h-100 o-100 z0"></span>

      <div
        class="bg-greyd pa1 df justify-between items-center relative lh0 z-1"
      >
        <a href="/" class="hotpink tdx relative">
          <h1>Preons</h1>
        </a>

        <div class="dn-m" v-on:click="hideMenu">
          <span class="h-wire w1 bg-hotpink db o0 mb-xxxsmall"></span>
          <span class="h-wire w1 bg-hotpink db mb-xxxsmall"></span>
          <span class="h-wire w1 bg-hotpink db o0"></span>
        </div>
      </div>

      <ul class="greyl relative fwl ls1">
        <li>
          <nuxt-link
            class="pa1 bca-greyd bsa-solid bwb1 db greyl tdx"
            to="learn"
            >Learn</nuxt-link
          >
        </li>
        <li class="pa1 df items-center bca-greyd bsa-solid bwb1">Reference</li>
        <li class="pa1 df items-center bca-greyd bsa-solid bwb1">GitHub</li>
      </ul>
    </div>

    <!-- Padder -->
    <span class="h8 h12-m h-xbig-l dt w-100"></span>

    <nuxt />
  </div>
</template>

<script>
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

<style lang="scss">
@import '~preons/dist/preons';

.s-article {
  // Spacing after:
  li,
  p {
    @extend .mb1;
  }

  h1 {
    @extend .fs2;
    @extend .lh2;
    @extend .mb2;
    @extend .fwb;
  }

  h2 {
    @extend .fs1;
    @extend .lh1;
    @extend .mb1;
    @extend .fwb;
  }

  h3 {
    @extend .fs1;
    @extend .lh1;
  }

  p {
    @extend .lh0;
  }

  li {
    @extend .ml2;
    @extend .lst-disc;
  }
}
</style>
