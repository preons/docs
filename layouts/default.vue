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
  @extend .lh1;
  @extend .fs0;
  @extend .dark;

  li,
  p {
    @extend .mb1;
  }

  h1 {
    @extend .fs2;
    @extend .lh2;
    @extend .mb2;
    @extend .fwb;
    @extend .ff-josefin;
    @extend .neutrald;
  }

  h2 {
    @extend .fs1;
    @extend .lh2;
    @extend .pt2;
    @extend .mb1;
    @extend .fwb;
    @extend .bwb1;
    @extend .bsb-solid;
    @extend .bca-greyl;
    @extend .lh4-m;
    @extend .ff-josefin;
    @extend .neutrald;

    &:first-child {
      @extend .pt0;
    }
  }

  h3 {
    @extend .fs0;
    @extend .mb1;
    @extend .fwb;
    @extend .ff-josefin;
    @extend .neutrald;
  }

  h4,
  h5,
  h6 {
    @extend .fs0;
    @extend .lh1;
    @extend .mb1;
    @extend .tdu;
    @extend .ff-josefin;
    @extend .neutrald;
  }

  li {
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
    @extend .ff-roboto-mono;
  }

  mark {
    @extend .bg-activel;
    @extend .dib;
    @extend .black;
    @extend .pa-thin;
  }

  blockquote {
    @extend .bg-white;
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
    @extend .bg-neutrall;
    @extend .pa1;
    @extend .pa2-m;
  }

  img[src*='#boxed-dark'] {
    @extend .bg-dark;
    @extend .pa1;
    @extend .pa2-m;
  }

  i,
  em {
    @extend .fxi;
  }

  ul,
  ol,
  li,
  p {
    code {
      @extend .pa-xxsmall;
      @extend .pl-small;
      @extend .pr-small;
      @extend .bg-light;
      @extend .ff-roboto-mono;
      @extend .fs-1;
    }

    > code {
      @extend .bg-activexl;
    }
  }

  .nuxt-content-highlight {
    @extend .mb1;
    @extend .w-100;
    overflow-x: hidden;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    @extend .bg-white;
  }
}
</style>
