---
title: ⚡️ Generate your own library
blurb: The Preons cli along with the preons.yaml allows you to customise your own functional css library
author: Gemma Black
---

In this short tutorial, you're going to create your own functional css library, using the naming conventions you choose.

## Check you're all set up

```bash
preons -V
```

## Generate a stylesheet

Generating a stylesheet is a combination of two steps:

1. Creating a `preons.yaml` configuration file.

2. Generating css from that configuration file.

Just to show both steps at once, you're just going to downlooad the file and create the library.

### 1. Create a preons.yaml

Download [https://unpkg.com/preons@0.3.37/config/preons.yaml](https://unpkg.com/preons@0.3.37/config/preons.yaml).

### 2. Generate the css

```bash
preons stylesheet --input preons.yaml
```

Notice how it generates unminified css of every rule defined in the preons.yaml. As one of the conventions that the Preons cli employs is not to output the files, to create a file, all you have to do is redirect the output.

```bash
preons stylesheet --input preons.yaml > myfile.css
```

> You can see the other options by doing `preons stylesheet -h`

## Making changes

The preons.yaml is organised into the following format:

```yaml
preons:
  baseline: # Baseline rule

  rules:
    # Object reusable rules

  properties:
    # Object of Css properties

  breakpoints:
    # Stylesheet breakpoints
```

### Properties

Properties are where you define your css properties, eg. `background-color` and `margin-left`. You can only define a css property once otherwise the preons.yaml will not convert to css.

It is defined in the following manner:

```yaml
preons:
  properties:
    height:
      class: h
      values:
        1: 1rem
        2: 2rem
```

#### The class

This is the prefix of the functional css class. The above config will create the following css rules:

```css
.h1 { 1rem; }
.h1 { 2rem; }
```

### Rules

These are reusable rules across multiple css properties.

```yaml
preons:
  theme-colors:
    1: 1rem
    2: 2rem
    3: 3rem
```

Sometimes you find yourself typing the same rules over and over again. Whilst this cannot be completely avoided, you can reuse these rules across multiple properties:

```yaml
preons:
  rules:
    theme-colors:
      black: '#242027'
      white: '#fefeff'
      grey: '#7d778e'
      hotpink: '#ea2889'

  properties:
    background-color:
      class: bg-
      rule: theme-colors

    color:
      class:
      rule: theme-colors
```

### Baseline

This, you can use to define the vertical rhythm of your site. You can reference the `$baseline` in either the values of reusable rules.

```yaml
preons:
  rules:
    # For font line-heights
    baselined:
      -2: $baseline * 0.5
      -1: $baseline * 1
      0: $baseline * 1.5
      1: $baseline * 2
      2: $baseline * 2.5
      3: $baseline * 3
      -large: 4rem
      4: $baseline * 4
      5: $baseline * 5
      6: $baseline * 6
      7: $baseline * 6.5
      8: $baseline * 7.5
```
