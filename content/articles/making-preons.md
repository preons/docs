---
title: Making Preons
date: May 24, 2020
---

## 2 years and 4 iterations

\_in progress-

In this article, I'll share with you how I went from using Tachyons to using YAML files to generate functional CSS libraries. You'll see the accidental iterative process, example projects, the dependencies and some of the tools that helped. Hopefully you'll see how simple it is to generate your own library, and then how to build a functional CSS system.

If anything, I hope also to prove that popular best practices are just that. And I've had to get better at choosing when to apply them and when to abandon them.

### Iteration 1 - Tachyons

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

#### Framework or library

Updating Tachyons felt like I was using it as a framework rather than as a dependency. I'd rather generate my own library if I couldn't extend it easily. And I can understand why extending Tachyons because of the priority issue meant changing it.

#### Difference in class conventions

Some of the classes I didn't like were redeclaring rules for the same property. For example, paddings could be overridden by `aspect-ratio`. Instead, I'd rather see `pv-aspect-ratio--16x9`. Then I could override that with a traditional aspect ratio if I wanted to. You might think what use case could there be for that, but it's an examp.e

The other thing I didn't want was for a class to represent to CSS properties. Yes, it'd mean my html would be more verbose.

```html
<!-- Instead of doing this -->
<img src="some.jpg" class="hv-auto" />

<!-- I'd do this -->
<img src="some.jpg" class="hl-auto hr-auto" />
```

I felt it was more explicit and easier to compose modules together.

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

Here's Preonize the function.

```
@mixin preonize($name, $prop, $map, $breakpoints) {
  @each $label, $value in $map {
    .#{$name}#{$label} {
      #{$prop}: $value;
    }
  }

  @each $breakpoint, $breakpoint-value in $breakpoints {
    @media #{$breakpoint-value} {
      @each $label, $value in $map {
        .#{$name}#{$label}-#{$breakpoint} {
          #{$prop}: $value;
        }
      }
    }
  }
}
```

It literally takes a collection of sass maps and applies it to a property at every breakpoint.

I was now generating an entire functional CSS library. Minor changes were now trivial. Update the sass maps; compile to css.

#### Project - Pixelex Aspect

One of the great

![](/images/pixelexaspect.jpg)

Iteration 3 - A CLI

After 2 years, it's taken less than a few weeks to build the css, the cli, the reference guide, npm package and docs.
