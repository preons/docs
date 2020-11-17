# Sass

Compile Preons into CSS from pure sass.

## Steps

Create a new project.

```bash
mkdir preons-sass && cd preons-sass
```

Install the preons library.

```bash
wget https://unpkg.com/preons/dist/preons.scss
```

Create a base scss file.

```bash
touch style.scss
```

Import the library into your sass project before any overrides.

```scss
// style.scss
@import "./preons.scss";
```

Install sass compiler:

```bash
# MacOs
brew install sass/sass/sass
```

> To install on **Windows** or other **Linux**, visit https://github.com/sass/dart-sass for further instructioons.

Compile down css.

```bash
# Make dist folder
mkdir -p dist

# Compile to css
sass style.scss > dist/style.css
```

Add link to HMTL.

```bash
touch index.html
```

<!-- prettier-ignore -->
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Preons starter</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="./dist/style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <!-- Custom markup goes here -->
    <div class="fs7">Woohoo 🎉!</div>
  </body>
</html>
```
