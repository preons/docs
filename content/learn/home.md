---
title: ⚡️ Learn
blurb: Introduction to Preons, a functional CSS library
author: Gemma Black
---

<!-- ## Features

- **Build UIs** quickly only with HTML
- **Reuse components** across pages without writing additional CSS
- Reuse components across **different projects** with different styles just by tweaking a config
- **Generate CSS** and component documentation easily -->

## Get started

1. [Build a user interface quickly](/learn/ui/build): A 15-minute guide on how to install Preons and start building a website.
2. [Generate your own library](/learn/cli/guide): Generate your own library using the preons.yaml configuration file

## What is Preons

It is a functional CSS system for building user interfaces. It's designed with three things in mind:

- A functional CSS library
- A theme
- A CLI to generate your own libraries

## What does it look like

Take the button below as an example:

<img src="/images/button.jpg#boxed" width="200" class="mb2 maxw-xxbig" />

This is what Preons looks like:

```html
<button class="bwa0 bg-hotpink white h4 pl3 pr3 db w-100">
  Sign up
</button>
```

<!-- Compare it to the traditional approach of writing css:

```css
button {
  background-color: #ea2889;
  border: 1px solid transparent;
  color: white;
  display: block;
  height: 4rem;
  padding-left: 3rem;
  padding-right: 3rem;
  width: 100%;
}
```

### What happens if you need a new color button

Typically, you would have to go back to the stylesheet and **make a new class**.

**Using functional css**, you just change the color, in this case,`bg-hotpink` to `bg-blue` and done.

```html
<button class="bwa0 bg-blue white h4 pl3 pr3 db w-100">
  Sign up
</button>
```

### Summary - What is Preons

- Each functional css class represents a [css property](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference).
- Eventually you can compose these elements into entire websites directly changing the HTML -->

<!-- ## But what about maintainability

There are two sides to maintainability here:

1. Being able to make changes and add new UI components easily. This is where functional css shines. It allows you to do this fast and in the browser.

2. Being able to change things once, and have it updated everywhere. Now there are several solutions to this.

   - One is to consolidate classes that you use into modules.

   - Alternatively, you can use components like you do with [Vue](https://vuejs.org/) or [React](https://reactjs.org/) and have UI components for things like buttons and cards.

   - [Storybook](https://storybook.js.org/) and [Bit](https://bit.dev/) offer a great solution to componentizing your front end.

### Summary - Maintainability

While functional css saves a lot of custom css, you may want to further systemize your design system. -->

## Start contributing

This project is still undergoing lots of development to produce features. Please checkout out the roadmap to learn what features are yet to do. More so, there are lots of tests, documentations, components and examples that are needed. Any help will be appreciated.

## Give feedback

Any feedback that can help improve this project is welcomed. You can personally [@me](https://twitter.com/GemmaBlackUK) on Twitter.
