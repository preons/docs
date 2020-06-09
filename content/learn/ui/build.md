---
title: 🏠 Build
blurb: Get started quickly with building the UI
---

This guide is to demonstrate how to build a website with Preons using ready-made components. We're going to build a landing page for a store.

Feel free to make changes and tweaks as you design.

## The Base HTML

You can start in one of two ways.

1. Play with the live code [repl](https://repl.it/@gemmadlou/Starter#index.html)

2. Copy-paste the code below into your editor and run locally.

<!-- prettier-ignore -->
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Preons docs</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&amp;family=Martel:wght@200;300;400;600;700;800;900&amp;family=Roboto+Mono:wght@100;300;400;500;700&amp;display=swap" />
    <link href="https://unpkg.com/preons/dist/reset.css" rel="stylesheet" type="text/css" />
    <link href="https://unpkg.com/preons/dist/preons.css" rel="stylesheet" type="text/css" />
  </head>
  <body class="">
    <!-- Content goes here -->
  </body>
</html>
```

## The Navigation

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/responsive-menu.png)

👉 Grab the HTML from the [navigation example](https://ui.preons.co/?path=/story/navigation--responsive). It is already responsive, but you can tweak it to suit your needs.

## The Hero section

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/hero.png)

👉 Again, grab the HTML from the [hero example](https://ui.preons.co/?path=/story/hero--hero-1). Feel free to change the image and the text. But for demonstration purposes, you can leave as is.

## The Portfolio

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/grid-of-3.png)

👉 For the portfolio, you can use a [simple grid](https://ui.preons.co/?path=/story/grid--grid-of-4). The images are from [UnSplash](https://unsplash.com/) but of course, you can change them.

## The Get In Touch Form

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/form.png)

👉 For the form, grab the [HTML](https://ui.preons.co/?path=/story/forms--full-form-light).

## The Footer

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/footer.png)

👉 There are two parts. The [footer links](https://ui.preons.co/?path=/story/footer--footer-inverted) and the [legal end](https://ui.preons.co/?path=/story/legals--legals-1). Grab both.

## What does your version look like

Here's mine. Ok. I didn't update the text in every case. But I hope this little exercise highlights how much faster it is to build interfaces once you have a design system of reusable components.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/store.png#boxed-dark)

> And here's the [code](https://repl.it/@gemmadlou/Starter#index.html).

## Next steps

- Functional CSS will seem cryptic, at least at first. Use the [reference](/search) to discover more colors and more classes.
- Create your own functional CSS library by following the cli build [guide](/learn/cli/generate).
