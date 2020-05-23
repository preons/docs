---
title: Making Preons
---

## A functional CSS system for building user interfaces

Custom user interfaces don't build themselves.

Days, if not weeks can go into a single site build. They aren’t a grab-and-go thing. But for friends or potential clients that ask for a website, I point them to WordPress or Wix or Squarespace or Shopify because it's sufficient and a lot cheaper.

But some clients want something unique. Something a little bit more tailored, a little bit more involved.

So the designer creates this work of beauty. They go backwards and forwards over everything from gutter widths to line-heights, colors to gradients. It starts in Photoshop, Illustrator or Sketch. Finally, its gets handed to the developer who now handcodes the CSS because the design is unique. What can be cut-and-pasted when it's unique?

### Custom design and the developement takes time.

Here's one troll video as proof:

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

## Can we go faster

I wanted to design and build beautiful websites in hours, or at a maximum days, not weeks. And I'm not a designer, so I needed a system. A library like Bootstrap is great, but then, everything built with it looks the same without customization.

### But do we want to go faster

Less time doing the same things on each project means more time spent on innovation, writing libraries, building products, improving processes, or building more beautiful websites.

### And is a website really unique

I think my statement above was wrong, or at least, not entirely accurate. Yes. A website is unique, like a person is unique. But there are things that make up a person that aren't unique. Everyone has a heart, bones, muscle, skin. We have eyes and ears, a mouth and a nose.

A website is no different. It has the same components. Most of them do anyways. They have a navbar, a footer, a copyright section. Cards and grids. Buttons and links. Can't we design from the same components, and just change the parts that really are unique?

## So I created Preons

In this article, I share how I made Preons, the accidental iterative process; the dependencies, some of the tools that helped and the principles I leaned on. Hopefully you'll see how simple it is to generate your own library, and then how to build a functional CSS system.

## 2 years and 4 iterations

### Iteration 1: Tachyons

It was this very library that changed my thinking about stylesheets; how it should be written. I was doing BEM, handcrafting styles and then updating HTML in a never-ending cycle. Tachyons was about writing a stylesheet once, then building the interface with it.

<blockquote>
    Checkout Tachyons ->
    <a href="https://tachyons.io/docs/" target="_blank"
        >https://tachyons.io/docs/</a
    >
</blockquote>

So I read the blurb.

> **Built for designing.**
>
> Create fast loading, highly readable, and 100% responsive interfaces with as little css as possible.
>
> Modules can be altered, extended, or changed to meet your design needs. You shouldn't need to write css everytime you want to build a new ui component. By learning the composable building blocks in tachyons, you can quickly start to build out interfaces while writing little to no css.

5 minutes later, I copy-pasted up a nice looking user interface. No CSS written. The hard work went solely into finding components that looked good. A nice header. A fancy footer. And something in between.

This is what I mocked up again (circa 2020). The original didn't look exactly like this:

[![Tachyons in 5 minutes](/images/tachyons-quick-example.jpg)](https://tachyons--gemmadlou.repl.co/)

> [edit](https://repl.it/@gemmadlou/Tachyons#index.html) on repl.it.

You can change paddings. Add margins. Increase font sizes right there in the browser.

```html
<footer class="pa4 pa5-l black-70 bt b--black-10"></footer>
```

The only thing was, I wanted a different font. A Google font to be exact. And then the colors weren't what I liked. Yes, I wanted slight changes at different breakpoints that didn't come with Tachyons.

Being able to make these little customisations were important. Not every project has the same vertical rhythm. Not every project needs certain CSS properties.

So I did the easiest thing. I hardcoded classes into a stylesheet that extended the Tachyons library. But there was a priority problem. Can you spot it?

```css
/** 
 * In tachyons.css
 */

@media screen and (min-width: 60em) {
  .aspect-ratio-l {
    height: 0;
    position: relative;
  }

  .aspect-ratio--16x9-l {
    padding-bottom: 56.25%;
  }

  .aspect-ratio--9x16-l {
    padding-bottom: 177.77%;
  }
}

/**
 * Then...in a custom .css
 */

.aspect-ratio--4-3 {
  padding-bottom: 75%;
}
```

So what happens if I try to have apply different aspect ratios at different breakpoints.

```html
<div class="aspect-ratio--4-3 aspect-ratio--16x9-l hidden">
  <img src="some-image.png" />
</div>
```

### Iteration 2 - Preonize

**Found the issue in the above?** The media queries above will be ignored and the last rule is always applied because they are all classes. They all have the same specificity.

The priority problem reared its head very quickly. Just to explain, it's not the [CSS specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) issue, where IDs have precedence over classes and classes over elements. Working with BEM already solved that. Everything was a class. No `!important` needed.

The [priority](https://css-tricks.com/precedence-css-order-css-matters/) problem is just a page order issue. The CSS lower down the stylesheet overrides the CSS above it.

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

Then I thought, instead of modifying and customising Tachyons, could I just generate it. What if I defined all my rules using sass maps like this:

```scss
$colors: (
  'blue': #365e86,
  'white': #ffffff,
  'grey': #eef0ee,
  'grey-dark': #89969d
);
```

Then apply them to a css property background-color and end up with this:

```css
.bg-blue {
  background-color: #365e86;
}

.bg-white {
  background-color: #ffffff;
}

.bg-grey {
  background-color: #eef0ee;
}

.bg-grey-dark {
  background-color: #89969d;
}
```

The icing on the cake is solving the priority problem at different breakpoints.

```css
.bg-blue {
  background-color: #365e86;
}

@media screen and (min-width: 40em) {
  .bg-blue-m {
    background-color: #365e86;
  }
}

@media screen and (min-width: 60em) {
  .bg-blue-l {
    background-color: #365e86;
  }
}
```

Here's Preonize the function. It literally takes a collection of sass maps and applies it to a property at every breakpoint.

```
@mixin preonize($name, $prop, $map, $breakpoints) {
  @each $label, $value in $map {
    .#{$name}#{$label} {
      #{$prop}: $value;
    }
  }
}
```
