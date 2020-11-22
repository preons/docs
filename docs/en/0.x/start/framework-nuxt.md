# Get started with Nuxt and Preons

Nuxt is a Vue.js framework with SSR capabilities. This guide will show you how to add Preons to Nuxt using a fresh Nuxt app as an example.

- [Using Sass](#using-sass)
- [Using CSS](#using-css)

## Using Sass

> If you already have a Nuxt app, go to the [Configure Sass](#configure-sass) section.

### Setup Nuxt

Install Nuxt to have a project scaffold. It will take you through a few questions.

```bash
yarn create nuxt-app preons-nuxt
```

Prepare your Nuxt environment.

```bash
cd preons-nuxt
```

### Configure Sass

Install preons and the sass loaders.

```bash
yarn add preons sass sass-loader fibers --dev
```

Create a new `style.scss` file in the assets folder and import Preons.

```bash
touch assets/style.scss
```

```scss
/** assets/style.scss **/
@import "~preons/dist/reset";
@import "~preons/dist/preons";

body {
  @extend .ff-raleway;
  @extend .fs3;
  @extend .lh3;
}
```

Add the `assets/style.scss` to the global `nuxt.config.js` to render the compiled style on the front end.

```js
// nuxt.config.js
{
    //....
    css: ['~assets/style.scss'],
}
```

Add Google Fonts.

```js
{
  head: {
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap",
      },
    ];
  }
}
```

### Create a template

Add basic styling to `pages/index.vue`.

```js
<template>
  <div class="d-fl ai-center jc-center minh-100vh">
    <h1 class="fs5 lh5 purple">Preons</h1>
  </div>
</template>
```

### View app

Start the Nuxt app to preview the update

```bash
yarn dev
```

Finally, view the app in the browser.

### Next steps

Continue with the Preons UI System for components and utility classes.

## Using CSS

> If you already have a Nuxt app, go to the [Configure Sass](#configure-sass) section.

### Setup Nuxt

Install Nuxt to have a project scaffold. It will take you through a few questions.

```bash
yarn create nuxt-app preons-nuxt
```

Prepare your Nuxt environment.

```bash
cd preons-nuxt
```

### Add stylesheets

Add Google Fonts and the Preons theme.

```js
{
  head: {
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/preons/dist/preons.css",
      },
    ];
  }
}
```

### Create a template

Add basic styling to `pages/index.vue`.

```js
<template>
  <div class="d-fl ai-center jc-center minh-100vh">
    <h1 class="fs5 lh5 purple">Preons</h1>
  </div>
</template>
```

### View app

Start the Nuxt app to preview the update

```bash
yarn dev
```

Finally, view the app in the browser.

### Next steps

Continue with the Preons UI System for components and utility classes.
