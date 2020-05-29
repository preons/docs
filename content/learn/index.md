---
title: What is Preons
blurb: Introduction to Preons, a functional css library
author: Gemma Black
---

It is two main things:

- A functional css library and theme so you can start building your UIs quickly
- A CLI tool to help build and make it easier to work with your own functional CSS libraries and create unique interfaces over and over again

## What do the classes look like

Each functional css class represents a [css property](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference). You compose these properties together, except instead of in the stylesheet, you do it directly in the browser using css classes.

```
<button class="bwa0 bg-hotpink white h4 pl3 pr3 db w-100">
    Sign up
</button>
```

Eventually you can build [entire UIs](https://github.com/preons/preons#-examples) with very little or no additional css.

## Try it

There are two ways to try it quickly:

1. Play with the live code [repl](https://repl.it/@gemmadlou/Preons#index.html)

2. Copy-paste the code below into your editor

```html
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
  <body class="ff-raleway lh1 fs0 fs1-m">
    <div class="w-100 df items-center justify-between pa2 black">
      <h1 class="fs3 fs4-m">Preons</h1>
      <ul class="df">
        <li><a href="" class="tdx hotpink ml1">About us</a></li>
        <li><a href="" class="dn dib-m tdx hotpink ml1">The Team</a></li>
        <li><a href="" class="tdx hotpink ml1">Products</a></li>
      </ul>
    </div>
    <div class="pa2">
      <h2 class="mb2">My Store</h2>
      <p>
        Look up other classes in the
        <a class="hotpink tdx" href="https://preons.co/search/"
          >reference sheet</a
        >.
      </p>
    </div>
  </body>
</html>
```

## The Reference

Functional css will seem cryptic, at least at first. Use the [reference](/search) to know what to create.
