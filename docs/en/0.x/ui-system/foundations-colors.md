# Colors

CSS colour utility classes in the default Preons theme. Colors help to make the UI more interesting and reinforce brand motifs.

## Theme defaults

Preons come with many default colors.

> If you need to customize fonts, use the Preons CLI.

<iframe src="https://codesandbox.io/embed/frosty-ride-6417i?fontsize=14&hidenavigation=1&module=%2Fdocs%2F0.x%2Fui-system%2Fcolors.html&theme=dark&initialpath=/docs/0.x/ui-system/colors.html"
     style="width:100%; height:600px; border:0; border-radius: 4px; overflow:hidden;"
     title="frosty-ride-6417i"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Reference

| CSS properties      | Preons utilities template |
| ------------------- | ------------------------- |
| color               | .\<color>                 |
| background-color    | .bg-\<color>              |
| border-color        | .bca-\<color>             |
| border-left-color   | .bcl-\<color>             |
| border-right-color  | .bcr-\<color>             |
| border-top-color    | .bct-\<color>             |
| border-bottom-color | .bcb-\<color>             |

## Fonts

Style background colors using the `.<color>` convention.

> See theme defaults for list of colors and their corresponding code.

```html
<p>
  Okay, the <span class="red">red</span> ones are my guests and the
  <span class="blue">blue</span> ones are yours.
</p>
```

<iframe src="https://codesandbox.io/embed/frosty-ride-6417i?fontsize=14&hidenavigation=1&module=%2Fdocs%2F0.x%2Fui-system%2Fcolors-font.html&theme=dark&initialpath=/docs/0.x/ui-system/colors-font.html&view=preview&hidedevtools=1"
     style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
     title="frosty-ride-6417i"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Background colors

Style background colors using the `.bg-<color>` convention.

> See theme defaults for list of colors and their corresponding code.

```html
<p>
  Okay, the <span class="bg-red">red</span> ones are my guests and the
  <span class="bg-blue">blue</span> ones are yours.
</p>
```

<iframe src="https://codesandbox.io/embed/frosty-ride-6417i?fontsize=14&hidenavigation=1&module=%2Fdocs%2F0.x%2Fui-system%2Fcolors-bg.html&theme=dark&initialpath=/docs/0.x/ui-system/colors-bg.html&editorsize=50&view=preview&hidedevtools=1"
     style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
     title="frosty-ride-6417i"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Border colors

Style background colors using the `.<border-color-position>-<color>` convention.

There are 5 border color prefixes.

| Prefix | CSS Rule            |                           |
| ------ | ------------------- | ------------------------- |
| bca    | border-color        | _border color, all sides_ |
| bcl    | border-left-color   | _border color, left_      |
| bct    | border-top-color    | _border color, top_       |
| bcr    | border-right-color  | _border color, right_     |
| bcb    | border-bottom-color | _border color, bottom_    |

```html
<p class="bca-red bsa-solid bwa4 pa2">
  Okay, the red ones are my guests and the blue ones are yours.
</p>
```

<iframe src="https://codesandbox.io/embed/frosty-ride-6417i?fontsize=14&hidenavigation=1&module=%2Fdocs%2F0.x%2Fui-system%2Fcolors-border.html&theme=dark&initialpath=/docs/0.x/ui-system/colors-border.html&editorsize=50&view=preview&hidedevtools=1"
     style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
     title="frosty-ride-6417i"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
