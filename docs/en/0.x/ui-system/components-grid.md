<link href="https://unpkg.com/preons@0.4.5/dist/preons.css" rel="stylesheet" type="text/css" />

# Grids

There are multiple ways to create grids using CSS. This page focuses on Flexbox and using a consistent right-margin technique.

## Flexbox

Flexbox allows you to have more control over layouts. Below are examples of how to use Grids. There are several ways to create a grid using Flexbox.

### 20-column grid

The 20-column is represented by percentages.

#### 100% width

<!-- example -->
<div class="d-fl mb2 pa1 pr0 bwa1 bsa-solid bca-grey">
    <div class="w-100 bg-grey h3 mr1"></div>
</div>

```html
<div class="d-fl pa1 pr0">
  <div class="w-100 bg-grey h3 mr1"></div>
</div>
```

Alternatively, no width is needed on block-elements.

```html
<div class="d-fl pa2 pr0">
  <div class="bg-grey h3 mr2"></div>
</div>
```

#### Other percentages

##### Halves

<!-- example -->
<div class="d-fl mb2 pa1 pr0 bwa1 bsa-solid bca-grey">
  <div class="w-50 bg-grey h3 mr1"></div>
  <div class="w-50 bg-grey h3 mr1"></div>
</div>

```html
<div class="d-fl pa1 pr0">
  <div class="w-50 bg-grey h3 mr1"></div>
  <div class="w-50 bg-grey h3 mr1"></div>
</div>
```

##### Fifths

<!-- example -->
<div class="d-fl mb2 pa1 pr0 bwa1 bsa-solid bca-grey">
  <div class="w-20 bg-grey h3 mr1"></div>
  <div class="w-20 bg-grey h3 mr1"></div>
  <div class="w-20 bg-grey h3 mr1"></div>
  <div class="w-20 bg-grey h3 mr1"></div>
  <div class="w-20 bg-grey h3 mr1"></div>
</div>

```html
<div class="d-fl mb2 pa1 bwa1 bsa-solid bca-grey">
  <div class="w-20 bg-grey h3 mr1"></div>
  <div class="w-20 bg-grey h3 mr1"></div>
  <div class="w-20 bg-grey h3 mr1"></div>
  <div class="w-20 bg-grey h3 mr1"></div>
  <div class="w-20 bg-grey h3 mr1"></div>
</div>
```

##### Mixing widths

<!-- example -->
<div class="d-fl mb2 pa1 pr0 bwa1 bsa-solid bca-grey">
  <div class="w-15 bg-grey h3 mr1"></div>
  <div class="w-15 bg-grey h3 mr1"></div>
  <div class="w-30 bg-grey h3 mr1"></div>
  <div class="w-40 bg-grey h3 mr1"></div>
</div>

```html
<div class="d-fl pa1 pr0">
  <div class="w-15 bg-grey h3 mr1"></div>
  <div class="w-15 bg-grey h3 mr1"></div>
  <div class="w-30 bg-grey h3 mr1"></div>
  <div class="w-40 bg-grey h3 mr1"></div>
</div>
```

### 12-column grid

<!-- example -->
<div class="d-fl mb2 pa1 pr0 bwa1 bsa-solid bca-grey">
  <div class="w-4-12 bg-grey h3 mr1"></div>
  <div class="w-4-12 bg-grey h3 mr1"></div>
  <div class="w-4-12 bg-grey h3 mr1"></div>
</div>

```html
<div class="d-fl pa1 pr0">
  <div class="w-4-12 bg-grey h3 mr1"></div>
  <div class="w-4-12 bg-grey h3 mr1"></div>
  <div class="w-4-12 bg-grey h3 mr1"></div>
</div>
```

### Flexbox and paddings The technique above uses a

consistent right margin while the parent has no right margin of its own. If
margins cannot be controlled on the parent `d-fl pa2 pr0`, you can remove the final margin on the last element within a row, either via the dom or a custom class.

```html
<div class="d-fl pa1 pr0">
  <div class="w-50 bg-grey h3 mr1"></div>
  <!-- mr2 removed -->
  <div class="w-50 bg-grey h3"></div>
</div>
```

### Multi-line grids with Flexbox

There are several techniques, but one I like to use is to move the gaps between the margins into an inner-container. This technique will also work with single-row grids too.

<!-- example -->
<div class="d-fl mb2 pa1 pr0 pb0 bwa1 bsa-solid bca-grey">
  <div class="w-50 h3 mb1">
    <div class="bg-grey h-100 mr1"></div>
  </div>
  <div class="w-50 h3 mb1">
    <div class="bg-grey h-100 mr1"></div>
  </div>
  <div class="w-50 h3 mb1">
    <div class="bg-grey h-100 mr1"></div>
  </div>
  <div class="w-50 h3 mb1">
    <div class="bg-grey h-100 mr1"></div>
  </div>
</div>

```html
<div class="d-fl wrap pa1 pr0">
  <div class="w-50 h3 mb2">
    <div class="bg-grey h-100 mr1"></div>
  </div>
  <div class="w-50 h3 mb2">
    <div class="bg-grey h-100 mr1"></div>
  </div>
  <div class="w-50 h3 mb2">
    <div class="bg-grey h-100 mr1"></div>
  </div>
  <div class="w-50 h3 mb2">
    <div class="bg-grey h-100 mr1"></div>
  </div>
</div>
```

## Spacing

### Move elements over

When you don't need a full grid of items, or you merely want space, use the margin utility classes to create space. Note the `ml-25` moves the element over by 25%.

<!-- example -->
<div class="d-fl mb2 pa1 pr0 bwa1 bsa-solid bca-grey">
  <div class="w-25 bg-grey h3 ml-25 mr1"></div>
  <div class="w-25 bg-grey h3 ml-25 mr1"></div>
</div>

```html
<div class="d-fl pa1 pr0">
  <div class="w-25 bg-grey h3 ml-25 mr1"></div>
  <div class="w-25 bg-grey h3 ml-25 mr1"></div>
</div>
```

### Making space before next element

Sometimes, you want there to be a gap after the current element also.

<!-- example -->
<div class="d-fl mb2 pa1 pr0 bwa1 bsa-solid bca-grey">
  <div class="w-25 bg-grey h3 mr-25"></div>
  <div class="w-25 bg-grey h3 mr1"></div>
  <div class="w-25 bg-grey h3 mr1"></div>
</div>

```html
<div class="d-fl pa1 pr0">
  <div class="w-25 bg-grey h3 ml-25"></div>
  <div class="w-25 bg-grey h3 mr1"></div>
  <div class="w-25 bg-grey h3 mr1"></div>
</div>
```

#### Correct width percentages

Using inner-elements will preserve percentaged widths most accurately. If you're not concerned with this, you can forgo inner-elements as with the example above. Otherwise you will have to adjust the markup eg.

<!-- example -->
<div class="d-fl mb2 pa1 pr0 bwa1 bsa-solid bca-grey">
  <div class="w-25 h3 mr-25">
    <div class="h-100 bg-grey mr1"></div>
  </div>
  <div class="w-25 h3">
    <div class="h-100 bg-grey mr1"></div>
  </div>
  <div class="w-25 h3">
    <div class="h-100 bg-grey mr1"></div>
  </div>
</div>

```html
<div class="d-fl pa1 pr0">
  <div class="w-25 h3 mr-25">
    <div class="h-100 bg-grey mr1"></div>
  </div>
  <div class="w-25 h3">
    <div class="h-100 bg-grey mr1"></div>
  </div>
  <div class="w-25 h3">
    <div class="h-100 bg-grey mr1"></div>
  </div>
</div
```
