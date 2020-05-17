<template>
  <div class="relative greyd bg-white s-article df-m">
    <div class="dn db-m w-xxbig-m pa2-m relative">
      <ul>
        <li>
          <a href>Guide</a>
        </li>
        <li>
          <a href>What is Preons</a>
        </li>
        <li>
          <a href>Get started</a>
        </li>
        <li>
          <a href>Quick setup</a>
        </li>
      </ul>
    </div>
    <div class="pa1 pt2 pl2-m pr2-m pb2-m relative maxw-xsuper">
      <h1>Guide</h1>
      <h2>What is Preons</h2>
      <p>It is two main things:</p>
      <ul>
        <li>
          A
          <strong>functional css library</strong> and <strong>theme</strong> so
          you can start building your UIs quickly
        </li>
        <li>
          A
          <strong>CLI tool</strong> to help build and make it easier to work
          with your own functional CSS libraries and create
          <strong>unique interfaces</strong> over and over again
        </li>
      </ul>
      <h3>What do the classes look like</h3>
      <p>
        Each functional css class represents a
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference"
          >css property</a
        >. You compose these properties together, except instead of in the
        stylesheet, you do it directly in the browser using css classes.
        Eventually you can build
        <a target="_blank" href="https://github.com/preons/preons#-examples"
          >entire UIs</a
        >.
      </p>
      <p>
        <mark>.ml2</mark>
        <br /><br /><mark>.bg-grey</mark>
      </p>
      <h2>Build the UI</h2>
      <h3>Try it</h3>
      <p>
        The fastest way to try Preons is to 1) create a quick
        <mark>html</mark> file and add the snippet below or 2) have a play using
        <a target="_blank" href="https://repl.it/@gemmadlou/Preons">repl.it</a>.
      </p>
      <CodeBlock value="get-started" type="html" />
      <h2>Installation</h2>
      <p>
        There are several ways to install Preons to start building. You can
        directly use css or scss packages. If you prefer npm, you can install it
        that way also.
      </p>
      <h3>CDN</h3>
      <p>
        You can install the latest package but it is recommended you use
        versioned packages to prevent breaking builds affecting your website.
      </p>
      <p>
        <a target="_blank" href="https://unpkg.com/preons/dist/preons.css"
          >preons.css</a
        >
        <br />
        <a target="_blank" href="https://unpkg.com/preons/dist/preons.scss"
          >preons.scss</a
        >
      </p>
      <h3>npm</h3>
      <pre class="bg-black">
        <code v-html="`npm install preons`" class="bash"></code>
      </pre>
      <h3>yarn</h3>
      <pre class="bg-black">
        <code v-html="`yarn add preons`" class="bash"></code>
      </pre>
      <h3>Import scss</h3>
      <CodeBlock value="import-scss" type="scss" />
      <h3>Look up the css classes</h3>
      <p>
        When you are starting, you may find the class names like
        <mark>pa2</mark> or <mark>ml1</mark> quite crypti. Whilst there is a
        convention with the preons theme, you can look up all classes
        <nuxt-link title="Preons reference" to="/search">here</nuxt-link>. If a
        class is missing, find out what classes were not included on purpose
        <a href="/learn/principles">here</a>, or generate and customise your own
        <a href="#the-cli">functional css library</a>.
      </p>
      <img
        class="w-100 h-au mb2"
        src="/images/page-reference.png"
        alt="Reference page screenshot"
      />
      <h2 id="the-cli">The CLI: Create your own library</h2>
      <p>Coming soon</p>
      <h2>How-tos</h2>
      <h3>Create a component: The Card</h3>
    </div>
  </div>
</template>

<script>
const stripIndent = require('strip-indent')
const Entities = require('html-entities').AllHtmlEntities

const entities = new Entities()
import CodeBlock from '../../components/CodeBlock.vue'

export default {
  layout: 'simple',
  components: {
    CodeBlock
  }
}
</script>
