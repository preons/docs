---
title: Recreating The Preons Theme
date: 2020-06-05
blurb: A non-designer's steps to creating a web design in the browser
author: Gemma Black
---

## The problem

I threw the Preons documentation website together. It didn't look terrible, but it didn't look great either.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/learn-preons.png)

I didn't like the use of colors. I didn't think about what the theme should be, or the fonts. And I think it showed. But documentation is meant to be boring anyway, right?

## The aim

I wanted to recreate the documentations and get a chance to exercise my design skills. Hopefully, if you're like me and don't know much about design, you'll see what process I follow.

## The requirements

- Represent a space theme. The mascot is a satellite.
- Have both dark and light mode. Space is by nature, dark. So it makes sense to carry this motif in Preons. Light mode is essential because it's easier to read on lighter backgrounds.
- Have consistency throughout the website

## Color comes first

My process is to start with color simply because I already have a logo. The logo itself is made of colors. I'll be following the principles in this video.

<div class="relative mb2" style="padding-bottom: 56.25%">
<iframe class="w-100 h-100 l0 t0 absolute" width="560" height="315" src="https://www.youtube.com/embed/9S8LGdpNh4Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## What are the colors

The great thing about working in the browser, is you can find out what the colors of things are using the color-picker tool. Using Chrome, I create a basic grid and pick out the main colors that I see in the logo.

Notice:

- The yellow
- Blues
- Greys
- Purple

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/brand-colors.png)

```html
<div class="pa1 pa2-m relative maxw-super">
    <div class="w8 absolute t-25 l-40">
        <img src="https://www.preons.co/images/satellite.png" class="w-100 h-au">
    </div>
    <ul class="df maxw-super wrap">
        <li class="w-4-12 h10" style="background-color: #3e494f;"></li>
        <li class="w-4-12 h10" style="background-color: #3e90ea;"></li>
        <li class="w-4-12 h10" style="background-color: #eed05a;"></li>
        <li class="w-4-12 h10" style="background-color: #60727f;"></li>
        <li class="w-4-12 h10" style="background-color: #b0b5f2;"></li>
    </ul>
</div>
```

If you didn't see the mustard color, don't worry. Neither did I. But looking at it closely, it's hard to miss.

## Dark vs Lightmode

So apps usually come in two modes. And we want to be able to cater to both.

I pick a darker color first. There's no reason to start with dark or light, it's just whatever came to my mind first. But I play around with hues based on the blue in the logo. I achieve a dark blue-towards-black color. 

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/dark-vs-light-mode.png)

## Tweaking the colors

In fairness, my dark blue almost looked green. 

The expanses of space are less green and more purple, at least to me. So I changed the dark color to be `#211c4c`. 

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/dark-vs-light-mode-v2.png)

```html
<div class="pa1 pa2-m relative maxw-super">
    <div class="w8 absolute t-25 l-40">
        <img src="https://www.preons.co/images/satellite.png" class="w-100 h-au">
    </div>
    <div class="df" >
        <div class="w-50 h-xxbig" style="background-color: #211c4c;">

        </div>
        <div class="w-50 h-xxbig" style="background-color: #f0f2ff;">

        </div>
    </div>
</div>
```

## The layout color

So while the blue is fine, I think having the layout be a more blue/purple is better. Again, there's no exact science to this and I could always tweak it later if I really didn't like it.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/dark-vs-light-brand-color.png)

Happy with that, I found, I was till not a fan of the light blue. But, I am pleased the brand purple stands out against both modes.

```html
<div class="pa1 pa2-m relative maxw-super">
    <div class="w8 absolute t-25 l-40">
        <img src="https://www.preons.co/images/satellite.png" class="w-100 h-au">
    </div>
    <div class="df">
        <div class="pa2 w-50 h-xxbig df justify-center wrap" style="background-color: #211c4c;">
            <div class="w-100 h4" style="background-color: #3634b5;"></div>
        </div>
        <div class="pa2 w-50 h-xxbig" style="background-color: #f0f2ff;">
            <div class="w-100 h4" style="background-color: #3634b5;"></div>
        </div>
    </div>
</div>
```

## Low contrast neutral colors

![](https://snipboard.io/l8Bz4U.jpg)

I then created a low contrast neutral just like the video says. I check it doesn't clash with the logo.

```html
<div class="pa1 pa2-m relative maxw-super">
    <div class="w8 absolute t-25 l-40">
        <img src="https://www.preons.co/images/satellite.png" class="w-100 h-au">
    </div>
    <div class="df">
        <div class="pa2 w-50 h-xxbig" style="background-color: #211c4c;">
            <div class="w-100 h4" style="background-color: #3634b5;"></div>
            <div class="w-100 h4" style="background-color: #282258;"></div>
        </div>
        <div class="pa2 w-50 h-xxbig" style="background-color: #f0f2ff;">
            <div class="w-100 h4" style="background-color: #3634b5;"></div>
            <div class="w-100 h4" style="background-color: #e5e7fb;"></div>
        </div>
    </div>
</div>
```

## High contrast colors

I used the dark and light backgrounds from the opposite sides. So I'm not adding more colors to the palette here.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/high-contrast.png)

## Reduced high contrast colors

I reused colors again. I used the low contrast neutral colors but in reverse.

It then turned out my neutrals were too subtle, so I changed them a little to get more contrast.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/reduced-high-contrast.png)

```html
<div class="pa1 pa2-m relative maxw-super">
    <div class="w8 absolute t-25 l-40">
        <img src="https://www.preons.co/images/satellite.png" class="w-100 h-au">
    </div>
    <div class="df">
        <div class="pa2 w-50" style="background-color: #211c4c;">
            <div class="w-100 h4" style="background-color: #3634b5;"></div>
            <div class="w-100 h4" style="background-color: #302a61;"></div>
            <div class="w-100 h4" style="background-color: #f0f2ff;"></div>
            <div class="w-100 h4" style="background-color: #dddff3;"></div>
        </div>
        <div class="pa2 w-50" style="background-color: #f0f2ff;">
            <div class="w-100 h4" style="background-color: #3634b5;"></div>
            <div class="w-100 h4" style="background-color: #dddff3;"></div>
            <div class="w-100 h4" style="background-color: #211c4c;"></div>
            <div class="w-100 h4" style="background-color: #302a61;"></div>
        </div>
    </div>
</div>
```

## Error and success states

Error is universally red. So that's simple. I'm not a designer, so I'm doing what the video says. I could reinvent the wheel and make error something else.

Success states are usually green or blue. So I went with that.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/success-error-states.png)

## Disabled state

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/disabled-colors.png)

I now had 8 different colors but I was not done yet.

## Active states

I decided to go with yellow. Plus on a Mac, the satellite emoji natively has a yellow body.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/active-colors.png)

Anywho. Colors are done. Well, almost. I'll need to create a preons.yaml. But first. Typography.

## Typography

I'm happy with the typographic scale in preons. It uses a perfect-fourth scale.

But the Raleway font doesn't speak satellites and space. Of course, I don't want to be cliche, but it's a chance to add a bit more character to the website.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/font-headings.png)
	
I fell for Josefin Sans after 15 minutes of browsing through Google Fonts. It looks modern and I can see a space-theme develop around it.

```html
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&family=Roboto+Mono:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
```

I finally copied the `preons.yaml` and added the new font-families there. You can see I tried a few.

```yaml
  font-family:
    class: ff-
    values:
      raleway: "#{Raleway, sans-serif}"
      exo: "#{Exo, sans-serif}"
      josefin: "#{'Josefin Sans', sans-serif}"
      kanit: "#{'Kanit', sans-serif}"
      martel: "#{'Martel', serif}"
      prompt: "#{'Prompt', sans-serif}"
      roboto-mono: "#{'Roboto Monp', monospace}"
```

## Text
 
I created a lead-line paragraph and a standard text paragraph.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/lead-text-and-paragraph.png)

I tested the use of Josefin as body text but it didn't work so well. So I used Josefin for the headline, and Martel for the body.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/text-color-theme.png)

I checked the light theme colors vs dark, then tweaked the yellow to have more contrast.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/text-dark-mode.png)

Ordered and unordered lists were pretty straightforward.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/unordered-list.png)

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/ordered-list.png)

The blockquote should stand out. But I don't want it to stand out too much. So here's one idea.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/blockquote.png)

## Update the yaml to include the new colors

For this, I changed the convention to match how I would use the colors in the scheme. Plus I created a secondary active color because hotpink was part of the original Preons and it would be good to keep that.

### Final color palette

```yaml
preons:
  baseline: 1.6rem

  rules:
    theme-colors:
      black: "#302f31"
      dark: "#211c4c"
      light: "#f0f2ff"
      layout: "#3634b5"
      neutrald: "#302a61"
      neutrall: "#c4c8e8"
      error: "#f13b3b"
      success: "#28d0b1"
      disabledd: "#5a5573"
      disabledl: "#b2b6ca"
      activexl: "#fff2af"
      activel: "#ffe76e"
      active: "#f9d41e"
      actived: "#d0ad01"
      activexd: "#a78b02"
      hotpinkxl: "#f188bc"
      hotpinkl: "#f36fb0"
      hotpink: "#ea2889"
      hotpinkd: "#cc0f6d"
      hotpinkxd: "#900148"
      transparent: transparent
```

## Buttons

Preons unfortunately doesn't have hover states yet. I added shadow elements to the preons theme.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/buttons.png)

Eventually I changed the buttons to be more demure. The yellow was too harsh.

## Menu

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/menu-mobile.png)

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/menu.png)

## Homepage

Whilst I loved the original design, it needs to be in keeping with the new tone. I'm now not entirely sure about the yellow.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/homepage-redesign.png)

 It feels slightly too bright so I turn it down. Sorry, no screenshot.

## Completing the design system

As you can see, I didn't start with wireframes or Photoshop. Everything was done in the browser and built up. I made choices along the way, and tried to match themes that emerged as I built up the design.

Whilst having a designer on your team is the best-case scenario, you can get by without one for some projects.

Hope this article helps you on your next project.