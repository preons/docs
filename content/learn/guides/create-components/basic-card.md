---
title: Create a basic card component
blurb: Cards can be found on many websites. It's a good example to use to have a deeper understanding of both Preons and functional css.
author: Gemma Black
---

Cards can be found on many websites. It's a good example to use to have a deeper understanding of both Preons and functional css.

![](/images/card.jpg)

So in this how-to, we'll be creating a **simple card component**. First, create the container. Setting `.maxw-xxxbig` will limit the size of the card to `32rem`. Setting `.bg-white` will ensure the card background colour is white against of the body's grey background.

The image also needs to be flushed against the edges of the container.

> .w-100 means 100% width and .h-au is height: auto.

```html
<body class="bg-grey">
  <div class="maxw-xxbig bg-white">
    <img class="w-100 h-au" src="/image.jpg" />
  </div>
</body>
```

The paragraph shouldn't be flushed against the edges, but have padding.

```html
<p class="pa2">
  <strong>When you</strong> need a card, but that card doesn't need a
  description.
</p>
```

Finally, the button is also going to be flushed. Notice, that the border-width is 0. The reset css with Preons doesn't remove borders on buttons. The background is hotpink but the font color is white. The height is set to h4 which is 4rem. And the padding is added either side of the button text separately.

```html
<button class="bwa0 bg-hotpink white h4 pl3 pr3 db w-100">
  Sign up
</button>
```

All together, the card component code should look like this:

```html
<body class="bg-grey">
  <div class="maxw-xxbig bg-white">
    <img class="w-100 h-au" src="/image.jpg" />

    <p class="pa2">
      <strong>When you</strong> need a card, but that card doesn't need a
      description.
    </p>

    <button class="bwa0 bg-hotpink white h4 pl3 pr3 db w-100">
      Sign up
    </button>
  </div>
</body>
```

You can probably think of ways to tweak the card component. Maybe you'd rather have padding around the image. Maybe there should be padding around the button also. Maybe the button should have a border-radius. You can make these changes in the browser without compiling any css again.
