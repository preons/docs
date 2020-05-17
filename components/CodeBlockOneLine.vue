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
      html: this.value || '',
      classType: this.type || 'html'
    }
  },
  async mounted() {
    this.html = hljs.highlightAuto(stripIndent(this.html)).value
  }
}
</script>
