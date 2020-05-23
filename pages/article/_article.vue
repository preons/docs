<template>
  <div class="relative greyd bg-white s-article df-m">
    <div class="dn db-m w-xxbig-m pa2-m relative">
      <ul>
        <li>
          <a href="#">{{ page.title }}</a>
        </li>
        <li>
          <a href="#what-is-preons">What is Preons</a>
        </li>
        <li>
          <a href="#build-the-ui">Build the UI</a>
        </li>
        <li>
          <a href="#the-cli">The CLI</a>
        </li>
      </ul>
    </div>
    <div class="pa1 pt2 pl2-m pr2-m pb2-m relative maxw-xsuper">
      <h1>{{ page.title }}</h1>

      <nuxt-content :document="page" />
    </div>
  </div>
</template>

<script>
import CodeBlock from '../../components/CodeBlock.vue'
import CodeBlockOneLine from '../../components/CodeBlockOneLine.vue'
export default {
  layout: 'simple',
  components: {
    CodeBlock,
    CodeBlockOneLine
  },
  async asyncData({ $content, params }) {
    const page = await $content('articles', params.article).fetch()

    return {
      page
    }
  }
}
</script>
