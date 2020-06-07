---
title: 🚀 Install
blurb: Using npm, yarn or the packages CDN
---

## 1. The Theme

You can install Preons in one of several ways.

### CDN

The fastest way to get started is by using [unpkg](https://unpkg.com).

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&amp;family=Martel:wght@200;300;400;600;700;800;900&amp;family=Roboto+Mono:wght@100;300;400;500;700&amp;display=swap">
<link href="https://unpkg.com/preons/dist/reset.css" rel="stylesheet" type="text/css" />
<link href="https://unpkg.com/preons/dist/reset.css" rel="stylesheet" type="text/css" />
```

### Node modules

#### npm

```bash
npm install preons
```

#### yarn

```bash
yarn add preons
```

## 2. Import

You will need both the theme and the reset. Feel free to choose [alternative resets](https://css-tricks.com/poll-results-what-css-reset-do-you-use/) for your project.

### Webpack js

```js
import '~preons/dist/reset';
import '~preons/dist/preons';
```

> See the [Webpack guide](https://webpack.js.org/loaders/sass-loader/#resolving-import-at-rules) for more details

### scss

```scss
@import '~preons/dist/preons';
```

### css

```css
@import '~preons/dist/preons.css';
```

## 3. Font

Include the font system if you haven't already.

```http
https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&family=Martel:wght@200;300;400;600;700;800;900&family=Roboto+Mono:wght@100;300;400;500;700&display=swap
```

### Link element

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&amp;family=Martel:wght@200;300;400;600;700;800;900&amp;family=Roboto+Mono:wght@100;300;400;500;700&amp;display=swap">
```

### @import

```html
<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&amp;family=Martel:wght@200;300;400;600;700;800;900&amp;family=Roboto+Mono:wght@100;300;400;500;700&amp;display=swap');
</style>
```
