<template>
  <div>
    <pre><code ref="codeblock" v-html="html" :class="[classType, 'hljs']"></code></pre>
  </div>
</template>
<script>
const stripIndent = require('strip-indent')
import hljs from 'highlight.js'

export default {
  props: ['value', 'type'],
  data() {
    return {
      html: '',
      classType: this.type || 'html'
    }
  },
  async mounted() {
    let response = await this.$axios.get(
      `${window.location.origin}/content/code-examples/${this.value}`
    )
    this.html = hljs.highlightAuto(stripIndent(response.data)).value
  }
}
</script>
