<template>
  <div class="bg-black ff-raleway white h-100vh">
    <navigation spaceBg="true" />
    <!-- Padder -->
    <span class="h8 h12-m h-xbig-l dt w-100"></span>

    <nuxt />
  </div>
</template>

<script>
import navigation from '../components/Navigation'
export default {
  watch: {
    $route(app) {
      this.menu = false
    }
  },
  data() {
    return {
      menu: false,
      spaceBg: true
    }
  },
  components: {
    navigation
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
@import '~preons/dist/reset';
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

    &:first-child {
      @extend .pt0;
    }
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
    @extend .mr4-m;
  }

  ul {
    @extend .lst-disc;
  }

  ol {
    list-style: decimal;
  }

  a {
    @extend .tdx;
    @extend .hotpink;
  }

  pre {
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
    @extend .mb1;
    @extend .w-100;
    overflow-x: hidden;
  }
}
</style>
