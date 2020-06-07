---
title: Recreating The Preons Theme
date: 2020-06-05
blurb: A non-designer's steps to creating a web design in the browser
author: Gemma Black
---

I've written this article as I developed the theme. Almost in real-time. It'll be like a Twitch stream but written.

## The aim

It's 3-fold.

- To show you don't have to be a designer to create something that looks ok.
- Show a real-time progression of how a developer/non-designer creates a website and the principles and rules that help
- Show you how Preons can systemize user interfaces.

## Background info

### Why am I recreating a theme

Whilst the Preons documentation looks fine, the homepage and the documentation seem like two different websites. The homepage has a space theme. But the documentation is grey and pink:

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/learn-preons.png)

## Ok let's start

### The new theme requirements

- Represent a space theme because The mascot is a satellite.
- Do dark-mode really well. Space is by nature, dark. So it makes sense to carry this motif in Preons.
- Do light-mode really well, because light-mode is the standard and is better for reading.
- Have consistency throughout the website

### Color comes first

My process is to start with color simply because I already have a logo.

If you want to see how the professional creates a palette, watch this video first. I'll basically be following his example.

<div class="relative">
<iframe class="w-100 h-100 l0 t0 absolute" width="560" height="315" src="https://www.youtube.com/embed/9S8LGdpNh4Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### What are the colors

The great thing about working in the browser, is you can find out what the colors of things are using the color-picker tool. Using Chrome, I create a basic grid and pick out the main colors that I see.

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

Notice the mustard color. I didn't even see if before. But it's there. The most obvious is the blue. But there are shades of grey also.

### Dark vs Lightmode

So apps usually come in two modes. And we want to be able to cater to both.

I pick a darker color first. There's no exact science to this. But I play around with hues based on the blue. I achieve a dark blue-towards-black color. 

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/dark-vs-light-mode.png)

```html
<div class="pa1 pa2-m relative maxw-super">
    <div class="w8 absolute t-25 l-40">
        <img src="https://www.preons.co/images/satellite.png" class="w-100 h-au">
    </div>
    <div class="df" >
        <div class="w-50 h-xxbig" style="background-color: #1c334c;">

        </div>
        <div class="w-50 h-xxbig" style="background-color: #e8f3ff;">

        </div>
    </div>
</div>
```

#### Tweaking the colors

In fairness, my dark blue almost looks green. The expanse of space is less green and more purple. So I change the dark color to be `#211c4c`. I still like the light version but make it slightly more lilac.

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

#### Readjusting brand color

So while the blue is fine, I think having a brand purple is better. Again, there's no exact science and I can tweak it later if I really don't like it.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/dark-vs-light-brand-color.png)

Happy with that. Still not a fan of the light blue, but the brand purple stands out against it on both light and dark.

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

#### Low contrast neutral colors

![](https://snipboard.io/l8Bz4U.jpg)

I then create a low contrast neutral just like the video says. And it looks pretty decent. It doesn't clash with the logo.

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

#### High contrast colors

This is easy. I use the dark and light backgrounds from the opposite sides. So I'm not adding more colors to the palette in this one.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/high-contrast.png)

#### Reduced high contrast colors

I reuse colors again here. I use the low contrast neutral colors, but in reverse. If we need to tweak those, now's the time.

It turns out my neutrals were too subtle, so I changed them a little to get more contrast.

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

#### Error and success states

Error is red. So that's simple. I'm not a designer, so I'm doing what the video says. I could reinvent the wheel and make error something else.

Success state is usually green or blue. So I'll go with that.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/success-error-states.png)

I've gone for a strobe-like green, closer to turquoise than plants and trees. Notice, I've used the same green and red on both the light and dark modes.

#### Colors that represent the disabled state

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/disabled-colors.png)

Great. We now have 8 different colors. But we're not done yet.

#### Active states

Finally, I get to active colors. I've become attached to the Preons pink. It made sense to me. Purple and pink.

But I decided to go with yellow. Plus on a Mac, the satellite emoji, natively has a yellow body.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/active-colors.png)

Anywho. Colors are done. Well, almost. I'll need to create a preons.yaml. But first. Typography.

### Typography

I'm happy with the typography scale in preons. It uses as perfect-fourth scale.

But the Raleway font doesn't speak satellites and space. Of course, I don't want to be cliche, but it's a chance to add a bit more character to the website.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/font-headings.png)
	
I ended up falling for Josefin Sans. It looks modern and I can see a space-theme develop around it.

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

#### Text

So I create a larger bit of text, maybe the lead paragraph and then smaller text.
 
As this website will mainly be one giant documentation, I don't want the text to be too large; as the code examples cannot be too big.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/lead-text-and-paragraph.png)

I test what a large headline looks like against the text. In reality, I'd want to use a smaller size headlines. Also the difference in the fonts look good. I didn't want to use two fonts initially but they compliment each other. And usually I prefer lighter font faces, but this all seems to work really well together. So I won't change it.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/text-color-theme.png)

I check the light theme colors and it works. Because the yellow was too light, I made use of the darker version. I still don't think it's dark enough. But we'll see.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/text-dark-mode.png)

Ordered and unordered lists are pretty straightforward. The rule seems to be, `mb2` for spacing between paragraphs. And the font sizing is consistent on everything.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/unordered-list.png)

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/ordered-list.png)

The blockquote should stand out. But I don't want it to stand out too much. So here's one idea.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/blockquote.png)

#### Updating the yaml to include the new colors

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

## Menu

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/menu-mobile.png)

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/menu.png)

## Homepage

Whilst I loved the original design, it needs to be in keeping with the new tone. I'm now not entirely sure about the yellow.

![](https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/homepage-redesign.png)

 It feels slightly too bright so I turn it down. Sorry, no screenshot.

## Completing the design system

