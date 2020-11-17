# HTML

To get going, installing the Preons theme is fastest with plain HTML.

- [Use the HTML5 starter](#use-the-html5-starter)
- [Add to existing HTML markup](#with-existing-html-markup)

## Use the HTML5 starter

Copy and paste the markup.

<!-- prettier-ignore -->
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Preons starter</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link href="https://unpkg.com/preons/dist/preons.css" rel="stylesheet" type="text/css" />
  </head>
  <body class="ff-raleway fs3 lh3">
    <!-- Custom markup goes here -->
    <div class="pa2">
      <h1 class="fwb mb1">Begin building with Preons</h1>
      <img src="https://source.unsplash.com/user/nasa/600x400" class="w-100 maxw-super h-au" />
    </div>
  </body>
</html>
```

Use the [UI System](../ui-system/introduction.md) to add UI components to your app.

### Example

<iframe
  src="https://codesandbox.io/embed/frosty-ride-6417i?fontsize=14&hidenavigation=1&module=/docs/0.x/get-started/standalone/html.html&theme=dark&initialpath=/docs/0.x/get-started/standalone/html.html"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="frosty-ride-6417i"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## With existing HTML markup

Add the Google Fonts link within the `<head>` tag.

```bash
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet" />
```

Add the Preons theme below the Google Fonts link.

```bash
<link href="https://unpkg.com/preons/dist/preons.css" rel="stylesheet" type="text/css" />
```

Use the [UI System](../ui-system/introduction.md) to add UI components to your app.
