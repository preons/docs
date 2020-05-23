<template>
  <div class="relative greyd bg-white s-article df-m">
    <div class="dn db-m w-xxbig-m pa2-m relative">
      <ul>
        <li>
          <a href="#">Making Preons</a>
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
      <h1>Making Preons</h1>

      <h2>A functional CSS system for building user interfaces</h2>

      <p>Custom user interfaces don't build themselves.</p>
      <p>
        Days, if not weeks can go into a single site build. They aren’t a
        grab-and-go thing. But for friends or potential clients that ask for a
        website, I point them to WordPress or Wix or Squarespace or Shopify
        because it's sufficient and a lot cheaper.
      </p>
      <p>
        But some clients want something unique. Something a little bit more
        tailored, a little bit more involved.
      </p>
      <p>
        So the designer creates this work of beauty. They go backwards and
        forwards over everything from gutter widths to line-heights, colors to
        gradients. It starts in Photoshop, Illustrator or Sketch. Finally, its
        gets handed to the developer who now handcodes the CSS because the
        design is unique. What can be cut-and-pasted when it's unique?
      </p>

      <h3>Custom design and the developement takes time.</h3>
      <p>
        Here's one troll video as proof:
      </p>

      <blockquote class="twitter-tweet">
        <p lang="en" dir="ltr">
          When a project has 1 designer and 1 engineer. 🤣
          <a href="https://t.co/MpJRaNS0k8">pic.twitter.com/MpJRaNS0k8</a>
        </p>
        &mdash; Ivor (@madebyivor)
        <a
          href="https://twitter.com/madebyivor/status/1261228317023354880?ref_src=twsrc%5Etfw"
          >May 15, 2020</a
        >
      </blockquote>

      <h2>Can we go faster?</h2>

      <p>
        I wanted to design and build beautiful websites in hours, or at a
        maximum days, not weeks. And I'm not a designer, so I needed a system. A
        library like Bootstrap is great, but then, everything built with it
        looks the same without customisation.
      </p>

      <h3>But do we want to go faster?</h3>

      <p>
        Less time doing the same things on each project means more time spent on
        innovation, writing libraries, building products, improving processes,
        or building more beautiful websites.
      </p>

      <h3>And is a website really unique?</h3>

      <p>
        I think my statement above was wrong, or at least, not entirely
        accurate. Yes. A website is unique, like a person is unique. But there
        are things that make up a person that aren't unique. Everyone has a
        heart, bones, muscle, skin. We have eyes and ears, a mouth and a nose.
      </p>

      <p>
        A website is no different. It has the same components. Most of them do
        anyways. They have a navbar, a footer, a copyright section. Cards and
        grids. Buttons and links. Can't we design from the same components, and
        just change the parts that really are unique?
      </p>

      <h2>So I created Preons</h2>

      <p>
        In this article, I share how I made Preons, the accidental iterative
        process; the dependencies, some of the tools that helped and the
        principles I leaned on. Hopefully you'll see how simple it is to
        generate your own library, and then how to build a functional CSS
        system.
      </p>

      <h2>2 years and 4 iterations</h2>
      <h3>Iteration 1: Tachyons</h3>
      <p>
        It was
        <strong>this</strong> very library that changed my thinking about
        stylesheets; how it should be written. I was doing BEM, handcrafting
        styles and then updating html in a never ending cycle. Tachyons was
        about writing a stylesheet once, then building the interface with it.
      </p>

      <blockquote>
        Checkout Tachyons ->
        <a href="https://tachyons.io/docs/" target="_blank"
          >https://tachyons.io/docs/</a
        >
      </blockquote>

      <p>So I read the blurb.</p>

      <blockquote>
        <h3>Built for designing.</h3>
        <p>
          Create fast loading, highly readable, and 100% responsive interfaces
          with as little css as possible.
        </p>
        <p>
          Modules can be altered, extended, or changed to meet your design
          needs. You shouldn't need to write css everytime you want to build a
          new ui component. By learning the composable building blocks in
          tachyons, you can quickly start to build out interfaces while writing
          little to no css.
        </p>
      </blockquote>

      <p>
        5 minutes later, I copy-pasted up a nice looking user interface. No CSS
        written. The hard work went solely into finding components that looked
        good. A nice header. A fancy footer. And something in between.
      </p>

      <p>
        This is what I mocked up again (circa 2020). The original didn't look
        exactly like this:
      </p>

      <a
        target="_blank"
        title="Tachyons fast 5 minute mockup"
        href="https://tachyons--gemmadlou.repl.co/"
      >
        <img
          class="pa2 bg-greyl"
          alt="Tachyons quick example"
          src="/images/tachyons-quick-example.jpg"
        />
      </a>

      <blockquote>
        You can
        <a target="_blank" href="https://repl.it/@gemmadlou/Tachyons#index.html"
          >edit</a
        >
        on repl.it.
      </blockquote>

      <p>
        You can change paddings. Add margins. Increase font sizes right there in
        the browser.
      </p>

      <code-block-one-line
        value="<footer class='pa4 pa5-l black-70 bt b--black-10'>"
      />

      <p>
        The only thing was, I wanted a different font. A Google font to be
        exact. And then the colors weren't what I liked. Yes, I wanted slight
        changes at different breakpoints that didn't come with Tachyons.
      </p>

      <p>
        Being able to make these little customisations were important. Not every
        project has the same vertical rhythm. Not every project needs certain
        CSS properties.
      </p>

      <p>
        So I did the easiest thing. I hardcoded classes into a stylesheet that
        extended the Tachyons library. But there was a priority problem. Can you
        spot it?
      </p>

      <code-block value="tachyons-css.css" type="css" />

      <p>
        So what happens if I try to have apply different aspect ratios at
        different breakpoints.
      </p>

      <code-block value="tachyons-diff-breakpoints.html" type="html" />

      <h3>Iteration 2 - Preonize</h3>

      <p>
        <strong>Found the issue in the above?</strong> The media queries above
        will be ignored and the last rule is always applied because they are all
        classes. They all have the same specificity.
      </p>

      <p>
        The priority problem reared its head very quickly. Just to explain, it's
        not the
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity "
          >CSS specificity</a
        >
        issue, where IDs have precedence over classes and classes over elements.
        Working with BEM already solved that. Everything was a class. No
        <mark>!important</mark> needed.
      </p>

      <p>
        The
        <a
          href="https://css-tricks.com/precedence-css-order-css-matters/"
          target="_blank"
          >priority</a
        >
        problem is just a page order issue. The CSS lower down the stylesheet
        overrides the CSS above it.
      </p>

      <div style="width:100%;height:0;padding-bottom:55%;position:relative;">
        <iframe
          src="https://giphy.com/embed/pvDp7Ewpzt0o8"
          width="100%"
          height="100%"
          style="position:absolute"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>

      <p>
        <a
          href="https://giphy.com/gifs/star-wars-yoda-the-empire-strikes-back-pvDp7Ewpzt0o8"
          >via GIPHY</a
        >
      </p>

      <p>
        Then I thought, instead of modifying and customising Tachyons, could I
        just generate it. What if I defined all my rules using sass maps like
        this:
      </p>

      <code-block value="sass-map.scss" type="scss" />

      <p>
        Then apply them to a css property <mark>background-color</mark> and end
        up with this:
      </p>

      <code-block value="sass-map.css" type="css" />

      <p>
        The icing on the cake is solving the priority problem at different
        breakpoints.
      </p>

      <code-block value="sass-map-bp.css" type="css" />
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
