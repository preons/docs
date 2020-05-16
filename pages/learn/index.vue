<template>
  <div class="relative greyd bg-white s-article df-m">
    <div class="dn db-m w-xxbig-m pa2-m relative">
      <ul>
        <li><a href="">Guide</a></li>
        <li><a href="">What is Preons</a></li>
        <li><a href="">Get started</a></li>
        <li><a href="">Quick setup</a></li>
      </ul>
    </div>
    <div class="pa1 pt2 pl2-m pr2-m pb2-m relative">
      <h1>Guide</h1>
      <h2>What is Preons</h2>
      <p>
        It is two main things:
      </p>
      <ul>
        <li>
          A functional css library theme so you can start building your UIs
          quickly
        </li>
        <li>
          A CLI tool to help build and make it easier to work with your own
          functional CSS libraries and create unique interfaces over and over
          again
        </li>
      </ul>
      <h2>Get started</h2>
      <h3>Quick setup</h3>
      <pre>
        <code v-html="html" class="html"></code>
      </pre>
      <h2>Installation</h2>
      <h3>CDN</h3>
      <p>
        <a target="_blank" href="https://unpkg.com/preons/dist/preons.css"
          >preons.css</a
        >
      </p>
      <p>
        <a target="_blank" href="https://unpkg.com/preons/dist/preons.scss"
          >preons.scss</a
        >
      </p>
      <h3>npm</h3>
      <pre class="bg-black">
        <code v-html="html2" class="bash"></code>
      </pre>
    </div>
  </div>
</template>

<script>
const stripIndent = require('strip-indent')
const Entities = require('html-entities').AllHtmlEntities

const entities = new Entities()

export default {
  data() {
    return {
      html: entities.encode(
        stripIndent(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
        <meta charset="utf-8" />
        <title>Preons docs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/preons/dist/reset.css" rel="stylesheet" />
        <link href="https://unpkg.com/preons/dist/preons.css" rel="stylesheet" />
      </head>
      <body class="bg-grey">
        <div class="pa3 ff-raleway fwn lh1 fs1 wrap black">
          <h1 class="ff-dosis fs4 lh3 mb2">Preons</h1>
          <ul class="">
            <li><a href="./examples/components/avatars.html" class="tdx hotpink">Avatars</a></li>
            <li><a href="./examples/components/buttons.html" class="tdx hotpink">Buttons</a></li>
            <li><a href="./examples/components/cards.html" class="tdx hotpink">Cards</a></li>
          </ul>
        </div>
      </body>
    </html>
    `)
      ),
      html2: entities.encode(
        stripIndent(`
          npm install preons
          yarn add preons
        `)
      )
    }
  }
}
</script>
