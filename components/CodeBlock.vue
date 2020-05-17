<template>
  <pre>
    <code ref="codeblock" v-html="html" v-bind:class="classType"></code>
  </pre>
</template>
<script>
const stripIndent = require('strip-indent')
const Entities = require('html-entities').AllHtmlEntities

const entities = new Entities()

export default {
  props: ['value', 'type'],
  data() {
    return {
      html: '',
      classType: 'html'
    }
  },
  async mounted() {
    let response = await this.$axios.get(
      `${window.location.origin}/content/html/${this.value}.html`
    )
    this.html = entities.encode(stripIndent(response.data))
    hljs.highlightBlock(this.$refs.codeblock)
  }
}
</script>
