---
title: Making Preons
date: May 24, 2020
blurb: How Preons became a css generating system and principles I learned along the way.
author: Gemma Black
---

## The Story - 2 years and 4 iterations

I loved writing code. I still do.

In front of my laptop, I was studying yet another project. The design was beautiful as always. All I had to do was make the HTML. But here I was again, writing the navigation, the card elements, the buttons, the grid, the footer. Déjà vu or not, I knew there had to be a way of systemising the creation of websites.

All I wanted was to build beautiful user interfaces faster without rewriting the same code every time. So I created Preons.

In this article I share:

- The principles I learned along the way
- And how Preons became a css generating system

## Iteration 0 - Tachyons

### The story

It's a bit cheeky saying [Tachyons](https://tachyons.io/docs/) is the first iteration. I didn't build it. [Adam Morse](http://mrmrs.cc/) and co [did](https://github.com/tachyons-css/tachyons).

All I know is I [cottoned on to it](https://www.collinsdictionary.com/dictionary/english/cotton-on) either at the end of 2017 or the beginning of 2018.

But this very library changed my thinking about how stylesheets [could](https://www.thoughtworks.com/insights/blog/good-programer-avoid-being-one) be written. I was doing [BEM](http://getbem.com/). And there was a cycle. Every UI element needed both handwritten css and afterwards, HTML.

Tachyons was different. Tachyons was about writing a stylesheet once, then building the interface with that stylesheet right there in the DOM.

5 minutes later, I copy-pasted up a nice looking user interface. No CSS written. The hard work went solely into finding components that looked good. A nice header. A fancy footer. And something in between.

This is what I mocked up again (circa 2020):

[![Tachyons in 5 minutes](/images/tachyons-quick-example.jpg#boxed)](https://tachyons--gemmadlou.repl.co/)

> [edit](https://repl.it/@gemmadlou/Tachyons#index.html) on repl.it.

Change paddings. Add margins. Increase font sizes right there in the browser. Underneath the hood, it looks like this:

```html
<footer class="pa4 pa5-l black-70 bt b--black-10"></footer>
```

The only thing was, I wanted a different font. A Google font to be exact. And then the colours weren't what I liked. These were the things not in the stylesheet.

Being able to make these little customisations quickly and easily are important. Not every project has the same vertical rhythm. Not every project needs the same CSS properties let alone values.

So I did the easiest thing, but the wrong thing. I hardcoded classes into a new stylesheet that "extended" the Tachyons library. But there was a priority problem. Can you spot it?

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

So what happens if I try to have apply different aspect ratios at different breakpoints?

```html
<div class="aspect-ratio--4-3 aspect-ratio--16x9-l">
  <img src="some-image.png" />
</div>
```

### Lesson 1 - Framework or library

> **Library**
>
> When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library.
>
> **Framework**
>
> When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.
>
> \- [The Difference Between a Framework and a Library](https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/)

Updating Tachyons felt like I was using it as a framework rather than as a dependency. To prevent priority issues, you need to insert your new css classes at particular places inside the stylesheet. But then the line is blurred between what is mine and added, and what is Tachyons'.

Then I thought, maybe it's better instead, not to extend Tachyons, but generate it instead.

### Lesson 2 - Use what exists

As a developer, I must admit, there's always the temptation to write functionality from [scratch](https://qr.ae/pNycBu) instead of tweaking something that does a good job already. So I found a [tachyons-scss](https://github.com/tachyons-css/tachyons-sass) library. It was perfect! Except, I still felt like I was hard-coding styles.

<!-- prettier-ignore -->
```scss
.b--dotted { border-style: dotted; }
.b--dashed { border-style: dashed; }
.b--solid {  border-style: solid; }
.b--none {   border-style: none; }

@media #{$breakpoint-not-small} {
  .b--dotted-ns { border-style: dotted; }
  .b--dashed-ns { border-style: dashed; }
  .b--solid-ns {  border-style: solid; }
  .b--none-ns {   border-style: none; }
}
```

## Iteration 1 - Preonize

### Generate a library

What if I defined all my rules using sass maps like that:

```scss
$colors: (
  'blue': #365e86,
  'white': #ffffff,
  'grey': #eef0ee,
  'grey-dark': #89969d
);
```

Then applied them to a css property like `background-color` to get this:

<!-- prettier-ignore -->
```css
.bg-blue { background-color: #365e86; }
.bg-white { background-color: #ffffff; }
.bg-grey { background-color: #eef0ee; }
.bg-grey-dark { background-color: #89969d; }
```

The icing on the cake is having each rules at different breakpoints in the right order. Priority problem solved.

<!-- prettier-ignore -->
```css
.bg-blue { background-color: #365e86; }

@media screen and (min-width: 40em) {
  .bg-blue-m { background-color: #365e86; }
}

@media screen and (min-width: 60em) {
  .bg-blue-l { background-color: #365e86; }
}
```

And so I wrote the preonize function. And that was it. Almost.

```scss
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

All I had to do was define all my reusable rules, and apply them using `preonize`.

```scss
@include preonize('bg-', background-color, $colors, $breakpoints);
@include preonize('fill-', fill, $colors, $breakpoints);
@include preonize('', color, $colors, $breakpoints);

// etc
```

Preonize took 4 things:

- a class prefix like `bg-`
- a css property like `background-color`
- a sass map of rules like `$colors: (white: #ffffff, black: #000000)`
- and an array of breakpoints to apply those rules

I could generate an entire functional CSS library from a [base sass file](https://github.com/gemmadlou/Preon/blob/master/assets/scss/preon.scss). Minor changes were now trivial. Update the sass maps; compile to css.

If I left it at this, I'd be happy. I already built [carolblackmusic.co.uk](https://carolblackmusic.co.uk), [pixelexaspect.com](https://pixelexaspect.com) and [kammadata.com](https://kammadata.com) this way. But I had come across some issues.

### Lesson 3: Opinions and conventions

There are definitely wrong ways to do things, but usually there are no single right ways. But it's also true, that not having an opinion for a project will cause confusion eventually, even with one maintainer.

So some of the classes I didn't like were the ones that redeclared rules for the same css property, like `padding-bottom`. For example, padding-bottom could override a completely different class prefix `aspect-ratio`.

This causes the priority issue again.

I felt that there should be one class prefix for one css property.

The other thing I didn't want was for a class to represent two CSS properties. One example is margins. So instead of one class representing `margin-left` and `margin-right` at the same time, it's more explicit to just use two.

```html
<!-- Instead of doing this -->
<img src="some.jpg" class="hv-auto" />

<!-- I'd do this -->
<img src="some.jpg" class="hl-auto hr-auto" />
```

This decision would eventually help me to write simpler code generators for Preons, though at the time, I didn't know it.

### Lesson 4 - Eat your own dog food

I have [Gary Gale](https://twitter.com/vicchi) to thank for the phrase. All it means is, what you're giving others to use, are you using it yourself?

So it's all good building a CSS library but could _I_ use it? In fact, using it highlighted limitations of functional css in general very quickly.

1. Displaying user-generated articles
2. Hovers and animations

### Limitation 1 - Displaying user-generated articles

How could I expect a user to write an article and add margins to every paragraph?

```html
<p class="mb2">My wonderful article paragraph.</p>
<h2 class="fs1 fs2-m blue">Next headline</h2>
```

Doing so:

- would actually cause inconsistencies in the design
- make writing in WYSIWYGs difficult
- writing markdown would be no different from writing html
- just in general, the writing experience would be awful and take longer

So the solution to this is to create scoped article classes such as `s-article`, something I learned from working with [Milad Alizadeh](https://github.com/milad-alizadeh) and [Chris Boakes](https://github.com/chrisboakes).

Here's a snippet I use for this Preons' documentations website:

```scss
.s-article {
  @extend .lh0;
  @extend .fs0;
  @extend .lh1-m;

  li,
  p {
    @extend .mb1;
  }

  h1 {
    @extend .fs2;
    @extend .lh2;
    @extend .mb2;
    @extend .fwb;
  }

  h2 {
    @extend .fs1;
    @extend .lh2;
    @extend .pt2;
    @extend .mb1;
    @extend .fwb;
    @extend .bwb1;
    @extend .bsb-solid;
    @extend .bca-greyll;
    @extend .lh4-m;
  }
}
```

Then I apply it where it is needed so it doesn't affect the entire site:

```html
<div class="s-article">
  <nuxt-content :document="page" />
</div>
```

### Limitation 2 - Hovering and animations

Animations are the life-blood of interactive websites. At a minimum, we need to hover and change things like colours of text and backgrounds on buttons. Okay, it's not essential, but great for user experience. So a new preonize function would be needed.

```scss
@mixin preonize-hover($name, $prop, $map, $breakpoints) {
  @each $label, $value in $map {
    .#{$name}#{$label}:hover {
      #{$prop}: $value;
    }
  }

  @each $breakpoint, $breakpoint-value in $breakpoints {
    @media #{$breakpoint-value} {
      @each $label, $value in $map {
        .#{$name}#{$label}-#{$breakpoint}:hover {
          #{$prop}: $value;
        }
      }
    }
  }
}
```

## Iteration 2 - A CLI

### The Story

After building a few sites, I had a problem. There were differences in the class conventions I used between them. What was `max-width` again?

```css
.mw1 {
  max-width: 1rem;
}

/** or **/

.maxw1 {
  max-width: 1rem;
}
```

And what about the colours? What's the convention? The colour first, or the modifier first?

```css
.dark-grey {
  color: grey;
}

/** or **/

.grey-dark {
  color: grey;
}
```

I had very few conventions and was mainly inspired by Tachyons. But switching between projects I was forgetting what rule applied where.

Looking up classes wasn't easy using my sass file. I had to find the CSS class, then look up the corresponding global style.

I could look through the CSS, but then I thought, that's not great user experience. If I could config my rules in yaml or JSON, I could generate documentation.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Still my favorite <a href="https://twitter.com/hashtag/dev?src=hash&amp;ref_src=twsrc%5Etfw">#dev</a> discovery of the year. Cyrille&#39;s concepts on living documentation. <a href="https://t.co/psmtpI2czF">pic.twitter.com/psmtpI2czF</a></p>&mdash; Gemma Black (@GemmaBlackUK) <a href="https://twitter.com/GemmaBlackUK/status/1189968746800123905?ref_src=twsrc%5Etfw">October 31, 2019</a></blockquote>

It was reading [Cyrille Martraire's](https://twitter.com/cyriux?lang=en) book on [Living Documentation](https://www.amazon.co.uk/gp/customer-reviews/R1M97XQ5OMYLU9/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=0134689321) that cemented the idea of turning existing code into docs. And your code would always be in sync with your documentation. But it was a [Michael Bryzek video](https://youtu.be/j6ow-UemzBc?t=1190) that took the concept one step further, generating code from your config.

And he had a point.

With a config, I could generate styles themselves from a yaml config into any CSS style language I liked.

- Sass
- Postcss
- Less.

One single config would be the definition for both the library _and_ the documentation.
So `preons.yaml` was born.

```yaml
preons:
  baseline: 1.2rem;

  gutter: 2.5rem;

  rules:

  # Preon breakpoints
  breakpoints:

  # Preon classes
  classes:
    - label: bg-
      css-property: background-color
      rule:
        - color
    - label: bg-
      css-property: background-color
      rule:
        - color
```

Then I stopped working on the project...

For ages.

### Limitation 3 - Mixing and matching rules

For widths, I wanted to use gradations of both percentages and `rems`.

For margins, I wanted the same, but also negative rems. So unless I repeated myself, I needed a way of mixing different global rules together.

```scss
$scaled: (
  n1: -1rem,
  n2: -2rem,
  n3: -3rem,
  n4: -4rem,
  n5: -5rem,
  n6: -6rem,
  n7: -7rem,
  n8: -8rem,
  n9: -9rem,
  n10: -10rem,
  0: 0,
  1: 1rem,
  2: 2rem,
  3: 3rem,
  4: 4rem,
  5: 5rem,
  6: 6rem,
  7: 7rem,
  8: 8rem,
  9: 9rem,
  10: 10rem
);
```

So I found `map-collect`.

```scss
@function map-collect($maps...) {
  $collection: ();

  @each $map in $maps {
    $collection: map-merge($collection, $map);
  }
  @return $collection;
}
```

Then I could mix-and-match them across different css properties:

<!-- prettier-ignore -->
```scss
@include preonize(
  'pa', 
  padding, 
  $scaled, 
  $breakpoints
);
@include preonize(
  'pl',
  padding-left,
  map-collect($scaled, $discrete),
  $breakpoints
);
```

## Iteration 3 - Tweaking the config

### Array vs object of rules

It occurred to me. Why am I using an array of [properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) when it should just be an object? I can't redeclare the same property twice because of the priority problem and the convention to solve that problem of 1 css property to 1 class prefix.

Yaml linters highlight when you have duplicate properties in an object. It is not allowed. So that's a win in applying the convention.

### Global vs standalone rules

I also didn't like having to declare global rules for each CSS property. Sometimes rules only have to be applied once, eg. for display: flex

```yaml
align-content:
  class: content-
  values:
    start: flex-start
    end: flex-end
    center: center
    between: space-between
    around: space-around
    stretch: stretch
```

vs colours:

```yaml
color:
  class:
  rule: theme-colors

background-color:
  class: bg-
  rule: theme-colors
```

### Generating documentation

Doing `preons config` would spit out JSON based on the preons.yaml to make creating documentation easier:

```json
{
  "border-top-color": {
    "class": "bct-",
    "rule": "theme-colors",
    "values": {
      "black": "#242027",
      "white": "#fefeff",
      "greyll": "#f6f5f9",
      "greyl": "#beb9cc",
      "grey": "#7d778e",
      "greyd": "#47454c",
      "transparent": "transparent",
      "hotpink": "#ea2889"
    },
    "mappings": {
      "bct-black": "#242027",
      "bct-white": "#fefeff",
      "bct-greyll": "#f6f5f9",
      "bct-greyl": "#beb9cc",
      "bct-grey": "#7d778e",
      "bct-greyd": "#47454c",
      "bct-transparent": "transparent",
      "bct-hotpink": "#ea2889"
    }
  }
}
```

I use this json to build the reference for the [docs](/search).

### Lesson 5 - Release fast and automate versions

Whether you adhere to [romantic versioning](https://github.com/jashkenas/backbone/issues/2888#issuecomment-29076249), [sentimental versioning](http://sentimentalversioning.org/) or [semantic versioning](https://semver.org/), managing versions manually is a bottleneck. Furthermore, it's like doing paperwork. But if it can be automated, it saves so much time.

### Why?

Because moving fast allows fixes and features to be released quickly. The developer writing the code should know if their update is breaking existing functionality or not, whether they are adding a feature, a fix, or an improvement or not.

So I used Intuit's Auto. Running `npm run release` along with [Angular style commits](https://gist.github.com/stephenparish/9941e89d80e2bc58a153#format-of-the-commit-message):

- bumps npm
- tags the project
- makes a release in GitHub
- creates the changelog

Done.

### Lesson 6 - Distribute files easily

[Michael Jackson's](https://twitter.com/mjackson) [Unpkg](https://unpkg.com/) allows you to access any file from an npm library at any version and it's free to use 🙏. It made creating the [example repl](https://repl.it/@gemmadlou/Cards) easy.

Here's a great intro to it:

> https://kentcdodds.com/blog/unpkg-an-open-source-cdn-for-npm

### Lesson 7 - Keeping the cli and stylesheets core

"I don't know any good reason to split my codebase between stylesheet and cli over multiple repositories". So I package them together. Maybe this is bad. But until it becomes a problem, I decided to not worry about it.

It means, preons-theme 0.3.28 was released at the same time as the cli which is also 0.3.28, even if the cli didn't change.

### Lesson 8 - Skip the tests

Now as of May 2020, there aren't any tests. There are no linters either. Dangerous? Maybe. But normally I'd fuss over assuring my code passes all sorts of code quality bells and whistles, not just because I'm a [badge junkie](https://shields.io/). This time, I was determined that version 0.0.z would just work and be functional.

I think [Eric Elliot](https://twitter.com/_ericelliott?lang=en) says [something](https://twitter.com/_ericelliott/status/1187063655533334529) like:

- Make it work
- Make it stable
- Make it fast

Even though, he starts with tests, making it work is a lot more archaic for me. Make it stable is where tests come in and solidifying them under the right design.

> “Coding faster: Make it work, then make it good” by Michael Parker https://link.medium.com/SRPxvd76F6

[![](/images/iterative-vs-incremental.jpeg)](https://medium.com/@gerterasmus23/the-greatest-example-ever-of-mvp-and-iterative-incremental-development-41fd718ece0)

If anything, this is the biggest shift in my thinking. Having gone through several iterations, I finally designed a version of Preons that I actually like.

If I started with TDD, I think I'd feel too precious about changing anything because TDD sometimes eats into the design phase, rather than just being a development tool.

I genuinely think design comes before TDD and static type analysis. That's why JavaScript is so powerful. You can iterate fast without worrying about correctness of code.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">An MVP is a viable prototype, not a final product. Don&#39;t worry about perfection. The idea is to get fast feedback from users.</p>&mdash; Eric Elliott (@_ericelliott) <a href="https://twitter.com/_ericelliott/status/1262549798256881664?ref_src=twsrc%5Etfw">May 19, 2020</a></blockquote>

### Lesson 9 - Design first

I saw a [video](https://www.youtube.com/watch?v=mNeXuCYiE0U&t=19s) where [James Clear](https://jamesclear.com/goals-systems) talked about two sets of photography students. One group had to come up with the perfect photo, one time. Another group had to take lots of photos and present their best one. The latter scored better apparently because applying their knowledge came from trial and error, learning what worked through practice versus theorizing what worked. That _is_ pragmatism. Practice over theory.

My fear is, in our desire to follow best practice, we use tools that can hinder us at the wrong time. During the design phase, the learning phase, the prototyping phase, getting something to work is most important. Proving the possibility is most important.

Now I've blitzed through the most basic of features, I have a choice:

- to start firming up what I have with tests
- try a different design
- add more features

## In conclusion

I hope you enjoyed the article or at least learned that your open source project doesn't have to be right the first time around. By no means am I a decent writer or even correct about everything in this article. So please share feedback.

If you're on Twitter, just [@GemmaBlackUK](https://twitter.com/GemmaBlackUK) and tell me what I did wrong 😅.
