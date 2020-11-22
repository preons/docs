# Layouts

> Copy-paste layouts

Get started with layouts. Take a look at the examples and copy-paste code that you need.

## Admin

### Double side-panel

Great for when you have lots of areas in your admin system and users will need to be able to go back-and-forth easily.

A CSS-only admin dashboard with a double-side panel on the left, a top level sticky nav and a scrollable main-content area using only utility classes.

```html
<!DOCTYPE html>
<html lang="en" class="h-100">
  <head>
    <meta charset="utf-8" />
    <title>Preons Admin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://unpkg.com/preons/dist/preons.css"
      rel="stylesheet"
      type="text/css"
    />
  </head>
  <body class="h-100 bg-greyxl hidden">
    <div class="d-fl h-100">
      <nav class="w-xbig h-100 relative d-fl sticky t0 grow-0 shrink-0">
        <section class="w4 bg-greyd h-100">
          <!-- Primary sidenav-->
        </section>
        <section class="w-100 bg-greyxd h-100">
          <!-- Secondary sidenav -->
        </section>
      </nav>
      <div class="w-100 y-auto">
        <header class="bg-grey w-100 pa1 pt-xsmall pb-xsmall sticky t0">
          <!-- Top nav -->&nbsp;
        </header>
        <main class="minh-xxxsuper">
          <!-- Main content -->
        </main>
      </div>
    </div>
  </body>
</html>
```

#### Doubled sided-panel examples

Layout areas defined by blocked colors.

<iframe
  src="https://codesandbox.io/embed/frosty-ride-6417i?fontsize=14&hidenavigation=1&module=/docs/0.x/ui-system/component/admin-layout-1.html&theme=light&initialpath=/docs/0.x/ui-system/component/admin-layout-1.html&hidedevtools=1"
  style="width:100%; height:400px; border:0; overflow:hidden;"
  title="frosty-ride-6417i"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Layout areas defined by borders.

<iframe
  src="https://codesandbox.io/embed/frosty-ride-6417i?fontsize=14&hidenavigation=1&module=/docs/0.x/ui-system/component/admin-layout-2.html&theme=light&initialpath=/docs/0.x/ui-system/component/admin-layout-2.html&hidedevtools=1"
  style="width:100%; height:400px; border:0; overflow:hidden;"
  title="frosty-ride-6417i"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Suggestions

Are there any layouts that you think is missing? Add an issue on GitHub or submit a PR.
