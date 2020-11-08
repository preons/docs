# Alignment

These CSS properties focus on alignment.

- text-align
- float
- top
- left
- bottom
- right
- clear

## Text Align

Text alignment classes moves items when they have the `display: inline` CSS rule.

### Reference

| Utility class | CSS Rule             |
| ------------- | -------------------- |
| `.center`     | `text-align: center` |
| `.right`      | `text-align: right`  |
| `.left`       | `text-align: left`   |

### Example

```html
<p class="center">
  With my alignment. I've got one leg shorter than the other.
</p>
```

<iframe
  src="https://codesandbox.io/embed/frosty-ride-6417i?fontsize=14&hidenavigation=1&module=%2Fdocs%2F0.x%2Fui-system%2Falignment-text.html&theme=dark&initialpath=/docs/0.x/ui-system/alignment-text.html"
  style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
  title="frosty-ride-6417i"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Float

Position an element inline with sibling elements.

### Reference

| Utility class | CSS Rule |
| ------------- | -------- |
| `.flr`        | `right`  |
| `.fll`        | `left`   |
| `.fln`        | `none`   |

### Example

```html
<div class="flr w-50 h5 bg-re"></div>
```

<iframe
  src="https://codesandbox.io/embed/frosty-ride-6417i?fontsize=14&hidenavigation=1&module=/docs/0.x/ui-system/alignment-float.html&theme=dark&initialpath=/docs/0.x/ui-system/alignment-float.html"
  style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
  title="frosty-ride-6417i"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Top, Left, Bottom, Right

These determine the final position of an element.

### Reference

#### Range

Using the `$baseline` for vertical rhythm, the 0-12 scale goes up in groups in multiples of 1.6rem.

| Top    | Bottom | Left   | Right  | Value   |
| ------ | ------ | ------ | ------ | ------- |
| `.t0`  | `.b0`  | `.l0`  | `.r0`  | 0       |
| `.t1`  | `.b1`  | `.l1`  | `.r1`  | 1.6rem  |
| `.t2`  | `.b2`  | `.l2`  | `.r2`  | 3.2rem  |
| `.t3`  | `.b3`  | `.l3`  | `.r3`  | 4.8rem  |
| `.t4`  | `.b4`  | `.l4`  | `.r4`  | 6.4rem  |
| `.t5`  | `.b5`  | `.l5`  | `.r5`  | 8.0rem  |
| `.t6`  | `.b6`  | `.l6`  | `.r6`  | 9.6rem  |
| `.t7`  | `.b7`  | `.l7`  | `.r7`  | 11.2rem |
| `.t8`  | `.b8`  | `.l8`  | `.r8`  | 12.8rem |
| `.t9`  | `.b9`  | `.l9`  | `.r9`  | 14.4rem |
| `.t10` | `.b10` | `.l10` | `.r10` | 16.0rem |
| `.t11` | `.b11` | `.l11` | `.r11` | 17.6rem |
| `.t12` | `.b12` | `.l12` | `.r12` | 19.2rem |

#### Negative positioning

Negative positioning allows you to tweak the location of an element without having to write too much custom css.

| Top     | Bottom  | Left    | Right   | Value  |
| ------- | ------- | ------- | ------- | ------ |
| `.t1x`  | `.b1x`  | `.l1x`  | `.r1x`  | -1rem  |
| `.t2x`  | `.b2x`  | `.l2x`  | `.r2x`  | -2rem  |
| `.t3x`  | `.b3x`  | `.l3x`  | `.r3x`  | -3rem  |
| `.t4x`  | `.b4x`  | `.l4x`  | `.r4x`  | -4rem  |
| `.t5x`  | `.b5x`  | `.l5x`  | `.r5x`  | -5rem  |
| `.t6x`  | `.b6x`  | `.l6x`  | `.r6x`  | -6rem  |
| `.t7x`  | `.b7x`  | `.l7x`  | `.r7x`  | -7rem  |
| `.t8x`  | `.b8x`  | `.l8x`  | `.r8x`  | -8rem  |
| `.t9x`  | `.b9x`  | `.l9x`  | `.r9x`  | -9rem  |
| `.t10x` | `.b10x` | `.l10x` | `.r10x` | -10rem |

#### Percentages

Percentages are in multiples of 5, from 5% to 100%.

| Top      | Bottom   | Left     | Right    | Value |
| -------- | -------- | -------- | -------- | ----- |
| `.t-5`   | `.b-5`   | `.l-5`   | `.r-5`   | 5%    |
| `.t-10`  | `.b-10`  | `.l-10`  | `.r-10`  | 10%   |
| `.t-15`  | `.b-15`  | `.l-15`  | `.r-15`  | 15%   |
| `.t-20`  | `.b-20`  | `.l-20`  | `.r-20`  | 20%   |
| `.t-25`  | `.b-25`  | `.l-25`  | `.r-25`  | 25%   |
| `.t-30`  | `.b-30`  | `.l-30`  | `.r-30`  | 30%   |
| `.t-35`  | `.b-35`  | `.l-35`  | `.r-35`  | 35%   |
| `.t-40`  | `.b-40`  | `.l-40`  | `.r-40`  | 40%   |
| `.t-45`  | `.b-45`  | `.l-45`  | `.r-45`  | 45%   |
| `.t-50`  | `.b-50`  | `.l-50`  | `.r-50`  | 50%   |
| `.t-55`  | `.b-55`  | `.l-55`  | `.r-55`  | 55%   |
| `.t-60`  | `.b-60`  | `.l-60`  | `.r-60`  | 60%   |
| `.t-65`  | `.b-65`  | `.l-65`  | `.r-65`  | 65%   |
| `.t-70`  | `.b-70`  | `.l-70`  | `.r-70`  | 70%   |
| `.t-75`  | `.b-75`  | `.l-75`  | `.r-75`  | 75%   |
| `.t-80`  | `.b-80`  | `.l-80`  | `.r-80`  | 80%   |
| `.t-85`  | `.b-85`  | `.l-85`  | `.r-85`  | 85%   |
| `.t-90`  | `.b-90`  | `.l-90`  | `.r-90`  | 90%   |
| `.t-95`  | `.b-95`  | `.l-95`  | `.r-95`  | 95%   |
| `.t-100` | `.b-100` | `.l-100` | `.r-100` | 100%  |

##### Example

```html
<div class="w3 h3 l-20 t10 bg-red absolute"></div>
```

<iframe
  src="https://codesandbox.io/embed/frosty-ride-6417i?fontsize=14&hidenavigation=1&module=/docs/0.x/ui-system/alignment-percentage.html&theme=dark&initialpath=/docs/0.x/ui-system/alignment-percentage.html"
  style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
  title="frosty-ride-6417i"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

#### Discrete positioning

Discrete positioning follows the discrete rule syntax to allow for ad-hoc sizes.

| Top           | Bottom        | Left          | Right         | Value  |
| ------------- | ------------- | ------------- | ------------- | ------ |
| `.t-wire`     | `.b-wire`     | `.l-wire`     | `.r-wire`     | 1px    |
| `.t-xthin`    | `.b-xthin`    | `.l-xthin`    | `.r-xthin`    | 2px    |
| `.t-thin`     | `.b-thin`     | `.l-thin`     | `.r-thin`     | 3px    |
| `.t-xxxsmall` | `.b-xxxsmall` | `.l-xxxsmall` | `.r-xxxsmall` | 5px    |
| `.t-xxsmall`  | `.b-xxsmall`  | `.l-xxsmall`  | `.r-xxsmall`  | 7px    |
| `.t-xsmall`   | `.b-xsmall`   | `.l-xsmall`   | `.r-xsmall`   | 1rem   |
| `.t-small`    | `.b-small`    | `.l-small`    | `.r-small`    | 1.6rem |
| `.t-icon`     | `.b-icon`     | `.l-icon`     | `.r-icon`     | 2.4rem |
| `.t-medium`   | `.b-medium`   | `.l-medium`   | `.r-medium`   | 7rem   |
| `.t-big`      | `.b-big`      | `.l-big`      | `.r-big`      | 16rem  |
| `.t-xbig`     | `.b-xbig`     | `.l-xbig`     | `.r-xbig`     | 22rem  |
| `.t-xxbig`    | `.b-xxbig`    | `.l-xxbig`    | `.r-xxbig`    | 32rem  |
| `.t-xxxbig`   | `.b-xxxbig`   | `.l-xxxbig`   | `.r-xxxbig`   | 44rem  |
| `.t-super`    | `.b-super`    | `.l-super`    | `.r-super`    | 56rem  |
| `.t-xsuper`   | `.b-xsuper`   | `.l-xsuper`   | `.r-xsuper`   | 68rem  |
| `.t-xxsuper`  | `.b-xxsuper`  | `.l-xxsuper`  | `.r-xxsuper`  | 80rem  |
| `.t-xxxsuper` | `.b-xxxsuper` | `.l-xxxsuper` | `.r-xxxsuper` | 100rem |

## Clear

| class | value |
| ----- | ----- |
| cb    | both  |
