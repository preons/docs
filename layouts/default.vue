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
      <span v-if="spaceBg" class="bg-hotpink absolute t0 l0 w-100 h-100 o-10 z-1"></span>
    </div>
    <div
      class="df justify-between justify-end-m items-center pa1 pl2-m pr2-m z-2 absolute t0 w-100"
    >
      <a href="/" class="white tdx relative mr-au">
        <h1>Preons</h1>
      </a>

      <nuxt-link to="/articles" class="dn dib-m tdx mr1 white relative">Articles</nuxt-link>

      <nuxt-link to="/learn" class="dn dib-m tdx white mr1 relative">Learn</nuxt-link>

      <nuxt-link to="/search" class="dn dib-m tdx white mr1 relative">Reference</nuxt-link>

      <a href="https://github.com/preons/preons" class="dn dib-m tdx hotpink mr1 relative">GitHub</a>

      <nuxt-link
        to="/search"
        class="dn-m relative mr-xxsmall ml-au ml0-m"
        title="Search functional css classes and their related css properties"
      >
        <img alt="Search button" src="/icons/search-white.svg" height="24" width="24" />
      </nuxt-link>

      <div class="dn-m" v-on:click="showMenu">
        <span class="h-wire w1 bg-hotpink db mb-xxxsmall"></span>
        <span class="h-wire w1 bg-hotpink db mb-xxxsmall"></span>
        <span class="h-wire w1 bg-hotpink db"></span>
      </div>
    </div>

    <div v-if="menu" class="fixed l0 t0 w-100 h-100 z-3">
      <span class="bg-white absolute t0 l0 w-100 h-100 o-100 z0"></span>

      <div class="pa1 df justify-between items-center relative lh0 z-1 bca-greyll bsa-solid bwb1">
        <a href="/" class="hotpink tdx relative">
          <h1>Preons</h1>
        </a>

        <div class="dn-m" v-on:click="hideMenu">
          <span class="h-wire w1 bg-hotpink db o0 mb-xxxsmall"></span>
          <span class="h-wire w1 bg-hotpink db mb-xxxsmall"></span>
          <span class="h-wire w1 bg-hotpink db o0"></span>
        </div>
      </div>

      <ul class="greyd relative fwl ls1">
        <li>
          <nuxt-link class="pa1 bca-greyll bsa-solid bwb1 db greyd tdx" to="/learn">Learn</nuxt-link>
        </li>
        <li>
          <nuxt-link class="pa1 bca-greyll bsa-solid bwb1 db greyd tdx" to="/articles">Articles</nuxt-link>
        </li>
        <li>
          <nuxt-link class="pa1 bca-greyll bsa-solid bwb1 db greyd tdx" to="/search">Reference</nuxt-link>
        </li>
        <li>
          <a
            class="pa1 bca-greyll bsa-solid bwb1 db hotpink tdx"
            href="https://github.com/preons/preons"
          >GitHub</a>
        </li>
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

body {
  overflow-x: hidden;
  width: 100%;
}

.s-article {
  @extend .lh0;
  @extend .fs0;
  @extend .lh1-m;

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
    @extend .lh2;
    @extend .pt2;
    @extend .mb1;
    @extend .fwb;
    @extend .bwb1;
    @extend .bsb-solid;
    @extend .bca-greyll;
    @extend .lh4-m;
  }

  h3 {
    @extend .fs0;
    @extend .mb1;
    @extend .fwb;
  }

  h4 {
    @extend .fs0;
    @extend .lh1;
    @extend .mb1;
    @extend .tdu;
  }

  p {
    @extend .lh0;
  }

  li {
    @extend .lh0;
    @extend .ml2;
    @extend .mr2;
    @extend .lst-disc;
    @extend .mr4-m;
  }

  a {
    @extend .tdx;
    @extend .hotpink;
  }

  pre {
    // @extend .w-100;
    // @extend .pl1;
    // @extend .pr1;
    // @extend .mb2;
    // @extend .mt2;
    font-family: monospace;
  }

  mark {
    @extend .bg-greyll;
    @extend .dib;
    @extend .black;
    @extend .pa-thin;
  }

  blockquote {
    @extend .bg-greyll;
    @extend .pa2;
    @extend .pt1;
    @extend .pb1;
    @extend .mb2;
    @extend .fxi;

    p:last-child {
      @extend .mb0;
    }
  }

  img {
    @extend .mb1;
    @extend .w-100;
    @extend .h-au;
  }

  img[src*='#boxed'] {
    @extend .bg-greyll;
    @extend .pa1;
    @extend .pa2-m;
  }

  i,
  em {
    @extend .fxi;
  }

  ul,
  ol,
  p {
    code {
      @extend .pa-xxsmall;
      @extend .pl-small;
      @extend .pr-small;
      @extend .bg-greyll;
    }
  }

  .nuxt-content-highlight {
    @extend .w-100;
    overflow-x: hidden;
  }
}
</style>
