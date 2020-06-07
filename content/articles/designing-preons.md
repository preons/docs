---
title: Recreating The Preons Theme
date: 2020-06-05
blurb: I'm not a designer. But I wanted to redesign the Preons' website. A process. From colors to website.
image: https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/homepage-redesign.png
author: Gemma Black
---

## The problem

I'm not a designer. But I wanted to redesign the Preons' website. 

To me, the original didn't look terrible, but it didn't look consistent.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/learn-preons.png)

## The requirements

- Represent a space theme. The mascot is a satellite.
- Have both dark and light mode. Space is by nature, dark. So it makes sense to carry this motif in Preons. Light mode is essential because it's easier to read on lighter backgrounds.
- Have consistency throughout the website

## Color comes first

My process was to start with color. And so I followed the principles in this video.

<div class="relative mb2" style="padding-bottom: 56.25%">
<iframe class="w-100 h-100 l0 t0 absolute" width="560" height="315" src="https://www.youtube.com/embed/9S8LGdpNh4Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## What colors

The great thing about working in the browser, is you can find the colors of things with the color-picker tool. Using Chrome, I create a basic grid and pick out the main colors that I see in the logo.

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

Notice:

- The yellow
- Blues
- Greys
- Purple

If you didn't see the mustard color, don't worry. Neither did I. But looking at it closely, it's hard to miss.

## Dark vs lightmode

So apps usually come in two modes. And we want to be able to cater to both.

I picked a dark color first. I played around with hues from the blue in the logo and achieved a dark blue-towards-black color. 

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/dark-vs-light-mode.png)

## Not happy is okay

I didn't like the blue. It looked green. Green to me represents our beautiful earth and plant life. It doesn't remind me of the expanses of space.

So I changed the dark color.

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

Happy with that, I found, I was still not a fan of the light blue. But, I was pleased the brand purple stood out against both modes.

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

You've probably noticed I followed the video, literally. I took the dark and light modes and toned them down a little.

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

> Don't be afraid to tweak things as you go along.

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

Error is universally red. All I did was play around with a red that looked comfortable in both dark and light mode. You can create a red for each mode if you prefer, but then it means more colors in the palette.

Success states are usually green or blue. Again, I used the same green for both dark and light mode.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/success-error-states.png)

## Disabled state

It's something I would forget about but the video brings it up. Your buttons sometimes need to be in a disabled state. So design for that.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/disabled-colors.png)

I now had 8 different colors but I was not done yet.

## Active states

These to me are things that tell people to click. It's a color of activity, so it's something you have to be careful not to use in your layout. Otherwise, you risk confusing your users.

I decided to go with yellow. Plus on a Mac, the satellite emoji natively has a yellow body.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/active-colors.png)

> After the fact, I decided to have two active colors. Hotpink and yellow because the original Preons design had hotpink in it. Plus, I discovered yellow is too low-contrast for text which could present an accessibility issue.

## Typography

I was already satisfied with the typographic scale in Preons. It uses a [perfect-fourth](https://type-scale.com/) scale.

However, the original Raleway font wasn't consistent with the new theme. Of course, I didn't want to be cliche, but it's a chance to add a bit more character to the website.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/font-headings.png)
	
I fell for Josefin Sans after 15 minutes of browsing through Google Fonts. And it seems I'm not the only one who can spend ages looking at fonts.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Building a website is<br><br>10% deciding what tech stack to use<br>5% coding<br>85% choosing what fonts to use</p>&mdash; James Tucker 🌊 (@tucker_dev) <a href="https://twitter.com/tucker_dev/status/1269349201877532672?ref_src=twsrc%5Etfw">June 6, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I finally made a new version of the `preons.yaml` and added the new font-families there. You can see I tried a few.

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
 
There are a few important elements when creating text.

1. Font size
2. Line heights
3. Margins between headings and paragraphs

Once you have gotten the text to look right and read well, it's rather simple.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/lead-text-and-paragraph.png)

I tested the use of Josefin as body text but it didn't work so well. So I used Josefin for the headline, and Martel for the body.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/text-color-theme.png)

## Dark mode text

I checked the light theme colors vs dark, then tweaked the yellow to have more contrast.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/text-dark-mode.png)

## Lists

Ordered and unordered lists were pretty straightforward.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/unordered-list.png)

## Quotes

The blockquote is somerthing I'd usually forget about until I needed it. Here's what I came up with.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/blockquote.png)

## Final color palette

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

The funny thing about buttons is that there are lots of choices.

- Square or rounded
- Filled or outlined
- Border or no border
- If bordered, small border or large
- Flat or shadowed

And there are even more choices like using gradients.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/buttons.png)

Eventually I changed the buttons to be more demure than what you see here. The original yellow was too harsh.

## Menu

We can now start to compose these colors and typographic elements to create our menu. I automatically create menus as mobile first and try not to duplicate elements.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/menu-mobile.png)

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/menu.png)

## Homepage

Whilst I loved the original homepage design, it needs to be in keeping with the new themes.

> Again, the yellow button was replaced with a more neutral blue.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/homepage-redesign.png)

## Completing the design system

As you can see, I didn't start with wireframes or Photoshop. I'm not a designer, so I'm sure my process will be laughed at by the professionals. Maybe even the design isn't even fantastic to the keen designer eye. But the final outcome looks decent enough to build up from.

Here are some additional notes:

- Everything was done in the browser and built up. You don't need any design software.
- I used the `preons.yaml` to standardize things like margins, paddings, font sizes and line heights.
- I made choices along the way, and tried to match themes that emerged as I built up the design.
- I didn't try too design everything up front.

Hope this article helps you on your next project when you find yourself needing or even dare I say, wanting to do design.