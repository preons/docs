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
      class="df justify-between justify-end-m items-center pa1 pl2-m pr2-m z-2 absolute t0 w-100"
    >
      <a href="/" class="white tdx relative mr-au">
        <h1>Preons</h1>
      </a>

      <nuxt-link to="/articles" class="dn dib-m tdx mr1 white relative">
        Articles
      </nuxt-link>

      <nuxt-link to="/learn" class="dn dib-m tdx white mr1 relative">
        Learn
      </nuxt-link>

      <nuxt-link to="/search" class="dn dib-m tdx white mr1 relative">
        Reference
      </nuxt-link>

      <a
        href="https://github.com/preons/preons"
        class="dn dib-m tdx hotpink mr1 relative"
      >
        GitHub
      </a>

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
        class=" pa1 df justify-between items-center relative lh0 z-1 bca-greyll bsa-solid bwb1"
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
    @extend .pl1;
    @extend .pr1;
    @extend .mb2;
    @extend .mt2;
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
}

.hljs {
  spadding: 0;
}

.hljs,
.hljs-subst,
.hljs-meta {
  color: inherit;
}

.sh .hljs-attribute,
.bash .hljs-attribute {
  font-weight: normal;
}
/*
 * Copyright (c) 2017-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2017-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord highlight.js
 * Version:    0.1.0
 * Repository: https://github.com/arcticicestudio/nord-highlightjs
 * License:    MIT
 * References:
 *   https://github.com/arcticicestudio/nord
 */
pre {
  background: #2e3440;
}

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #2e3440;
}

.hljs,
.hljs-subst {
  color: #d8dee9;
}

.hljs-selector-tag {
  color: #81a1c1;
}

.hljs-selector-id {
  color: #8fbcbb;
  font-weight: bold;
}

.hljs-selector-class {
  color: #8fbcbb;
}

.hljs-selector-attr {
  color: #8fbcbb;
}

.hljs-selector-pseudo {
  color: #88c0d0;
}

.hljs-addition {
  background-color: rgba(163, 190, 140, 0.5);
}

.hljs-deletion {
  background-color: rgba(191, 97, 106, 0.5);
}

.hljs-built_in,
.hljs-type {
  color: #8fbcbb;
}

.hljs-class {
  color: #8fbcbb;
}

.hljs-function {
  color: #88c0d0;
}

.hljs-function > .hljs-title {
  color: #88c0d0;
}

.hljs-keyword,
.hljs-literal,
.hljs-symbol {
  color: #81a1c1;
}

.hljs-number {
  color: #b48ead;
}

.hljs-regexp {
  color: #ebcb8b;
}

.hljs-string {
  color: #a3be8c;
}

.hljs-title {
  color: #8fbcbb;
}

.hljs-params {
  color: #d8dee9;
}

.hljs-bullet {
  color: #81a1c1;
}

.hljs-code {
  color: #8fbcbb;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-formula {
  color: #8fbcbb;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-link:hover {
  text-decoration: underline;
}

.hljs-quote {
  color: #4c566a;
}

.hljs-comment {
  color: #4c566a;
}

.hljs-doctag {
  color: #8fbcbb;
}

.hljs-meta,
.hljs-meta-keyword {
  color: #5e81ac;
}

.hljs-meta-string {
  color: #a3be8c;
}

.hljs-attr {
  color: #8fbcbb;
}

.hljs-attribute {
  color: #d8dee9;
}

.hljs-builtin-name {
  color: #81a1c1;
}

.hljs-name {
  color: #81a1c1;
}

.hljs-section {
  color: #88c0d0;
}

.hljs-tag {
  color: #81a1c1;
}

.hljs-variable {
  color: #d8dee9;
}

.hljs-template-variable {
  color: #d8dee9;
}

.hljs-template-tag {
  color: #5e81ac;
}

.abnf .hljs-attribute {
  color: #88c0d0;
}

.abnf .hljs-symbol {
  color: #ebcb8b;
}

.apache .hljs-attribute {
  color: #88c0d0;
}

.apache .hljs-section {
  color: #81a1c1;
}

.arduino .hljs-built_in {
  color: #88c0d0;
}

.aspectj .hljs-meta {
  color: #d08770;
}

.aspectj > .hljs-title {
  color: #88c0d0;
}

.bnf .hljs-attribute {
  color: #8fbcbb;
}

.clojure .hljs-name {
  color: #88c0d0;
}

.clojure .hljs-symbol {
  color: #ebcb8b;
}

.coq .hljs-built_in {
  color: #88c0d0;
}

.cpp .hljs-meta-string {
  color: #8fbcbb;
}

.css .hljs-built_in {
  color: #88c0d0;
}

.css .hljs-keyword {
  color: #d08770;
}

.diff .hljs-meta {
  color: #8fbcbb;
}

.ebnf .hljs-attribute {
  color: #8fbcbb;
}

.glsl .hljs-built_in {
  color: #88c0d0;
}

.groovy .hljs-meta:not(:first-child) {
  color: #d08770;
}

.haxe .hljs-meta {
  color: #d08770;
}

.java .hljs-meta {
  color: #d08770;
}

.ldif .hljs-attribute {
  color: #8fbcbb;
}

.lisp .hljs-name {
  color: #88c0d0;
}

.lua .hljs-built_in {
  color: #88c0d0;
}

.moonscript .hljs-built_in {
  color: #88c0d0;
}

.nginx .hljs-attribute {
  color: #88c0d0;
}

.nginx .hljs-section {
  color: #5e81ac;
}

.pf .hljs-built_in {
  color: #88c0d0;
}

.processing .hljs-built_in {
  color: #88c0d0;
}

.scss .hljs-keyword {
  color: #81a1c1;
}

.stylus .hljs-keyword {
  color: #81a1c1;
}

.swift .hljs-meta {
  color: #d08770;
}

.vim .hljs-built_in {
  color: #88c0d0;
  font-style: italic;
}

.yaml .hljs-meta {
  color: #d08770;
}
</style>
