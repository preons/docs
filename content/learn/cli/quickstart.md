---
title: Quickly start with the API
blurb: Easily start generating your own docs and libraries with the preons cli
author: Gemma Black
---

The Preons cli along with the `preons.yaml` allows you to customise your own functional css library. Maybe you prefer a different typescale for your fonts. Your website will need different colors or even additional colours than the one in the default preons theme. Maybe there are additional css properties that your project needs like filter, transitions and css grid.

## The steps

Run the following command to generate the stylesheet from the default yaml file that comes with Preons.

```bash
preons stylesheet
```

You will see the entire css printed out.

> You can create a scss version using the -s flag.

But now you will want to customise your own file. To do that, grab a copy of the [preons.yaml](https://raw.githubusercontent.com/preons/preons/master/config/preons.yaml). It should start like this:

```yaml
preons:
  baseline: 1.6rem

  rules:
    theme-colors:
      black: '#242027'
      white: '#fefeff'
      greyxl: '#f6f5f9'
  ## ...
```

Point it to your stylesheet and run:

```bash
preons stylesheet -i your.yaml
```

Output the css into a file:

```bash
preons stylesheet -i your.yaml > yourfile.css
```
