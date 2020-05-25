<template>
  <div class="relative greyd bg-white s-article df-m">
    <div class="dn db-m w-xxbig-m pa2-m relative">
      <ul>
        <li>
          <a href="#">Guide</a>
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
      <h1>Guide</h1>
      <h2 id="what-is-preons">What is Preons</h2>
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
      </p>
      <CodeBlock value="button-example.html" />
      <p>
        Eventually you can build
        <a target="_blank" href="https://github.com/preons/preons#-examples"
          >entire UIs</a
        >
        with very little or no additional css.
      </p>
      <h2 id="build-the-ui">Build the UI</h2>
      <h3>Try it</h3>
      <p>
        The fastest way to try Preons is to 1) create a quick
        <mark>html</mark> file and add the snippet below or 2) have a play using
        <a target="_blank" href="https://repl.it/@gemmadlou/Preons">repl.it</a>.
      </p>
      <CodeBlock value="get-started.html" type="html" />
      <h2>Installation</h2>
      <p>
        There are several ways to install Preons. You can directly use css or
        scss packages or import styles as a dependency using npm.
      </p>
      <h3>CDN</h3>
      <p>
        Great for quickly prototyping. It is recommended you use
        <a href="https://www.npmjs.com/package/preons">versioned</a>
        packages to prevent breaking changes.
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
      <CodeBlockOneLine value="npm install preons" type="bash" />
      <h3>yarn</h3>
      <CodeBlockOneLine value="yarn add preons" type="bash" />
      <h3>Import scss</h3>
      <CodeBlockOneLine value='@import "~preons/dist/preons";' type="scss" />
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
        src="/images/page-reference.jpg"
        alt="Reference page screenshot"
      />
      <h3>Use the reset css</h3>
      <p>
        The reset css is based on Eric Meyer's reset with a few additions
        <a target="_blank" href="https://unpkg.com/preons/dist/reset.css"
          >preons.css</a
        >, such as <mark>10px</mark> body font reset and form input color
        inheritance. Feel free to choose
        <a
          target="_blank"
          href="https://css-tricks.com/poll-results-what-css-reset-do-you-use/"
          >your own reset.css</a
        >
        library if you even want one at all.
      </p>
      <h2 id="the-cli">The CLI: Create your own library</h2>
      <p>
        The Preons cli along with the preons.yaml allows you to customise your
        own functional css library. Maybe you prefer a different typescale for
        your fonts. Your website will need different colors or even additional
        colours than the one in the default preons theme. Maybe there are
        additional css properties that your project needs like
        <mark>filter</mark>, <mark>transitions</mark> and <mark>css grid</mark>.
      </p>
      <h2>Get started</h2>
      <p>Install the Preons cli globally.</p>
      <CodeBlockOneLine value="npm i preons -g" type="bash" />
      <p>
        Run the following command to generate the stylesheet from the default
        yaml file that comes with Preons.
      </p>
      <CodeBlockOneLine value="preons stylesheet" type="bash" />
      <p>
        You will see the entire css printed out.
      </p>
      <blockquote>
        You can create a scss version using the <mark>-s</mark> flag.
      </blockquote>
      <p>
        But now you will want to customise your own file. To do that, grab a
        copy of the
        <a
          target="_blank"
          href="https://raw.githubusercontent.com/preons/preons/master/config/preons.yaml"
          >preons.yaml</a
        >. It should start like this:
      </p>
      <CodeBlock value="preons-example.yaml" type="yaml" />
      <p>Point it to your stylesheet and run:</p>
      <CodeBlockOneLine
        value="preons stylesheet -i your.yaml > your.css"
        type="bash"
      />
      <h2>How-tos</h2>
      <h3>Create a component: The Card</h3>
      <p>
        Cards can be found on many websites. It's a good example to use to have
        a deeper understanding of both Preons and functional css.
      </p>
      <img
        class="maxw-xxbig"
        src="/images/card.jpg"
        alt="Website card component"
      />
      <p>
        So in this how-to, we'll be creating a
        <strong>simple card component</strong>. First, create the container.
        Setting <mark>.maxw-xxxbig</mark> will limit the size of the card to
        <mark>32rem</mark>. Setting <mark>.bg-white</mark> will ensure the card
        background color i white against of the body's grey background.
      </p>

      <p>
        The image also needs to be flushed against the edges of the container.
      </p>
      <blockquote>
        <mark>.w-100</mark> means 100% width and <mark>.h-au</mark> is height:
        auto.
      </blockquote>

      <CodeBlock value="card-component-1.html" />

      <p>
        The paragraph shouldn't be flushed against the edges, but have padding.
      </p>

      <CodeBlock value="card-component-2.html" />

      <p>
        Finally, the button is also going to be flushed. Notice, that the
        border-width is 0. The reset css with Preons doesn't remove borders on
        buttons. The background is <mark>hotpink</mark> but the font color is
        white. The height is set to <mark>h4</mark> which is 4rem. And the
        padding is added either side of the button text separately.
      </p>

      <CodeBlock value="card-component-3.html" />

      <p>All together, the card component code should look like this:</p>

      <CodeBlock value="card-component-4.html" />

      <p>
        You can probably think of ways to tweak the card component. Maybe you'd
        rather have padding around the image. Maybe there should be padding
        around the button also. Maybe the button should have a border-radius.
        You can make these changes in the browser without compiling any css
        again.
      </p>

      <h3>Articles: Extending functional css</h3>
      <blockquote>Coming soon</blockquote>

      <h3>Responsive UIs</h3>
      <blockquote>Coming soon</blockquote>
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
  }
}
</script>