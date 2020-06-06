---
title: Roadmap
date: May 31, 2020
blurb: Stage one of the Preons journey
author: Gemma Black
---

Preons' mission is this:

1. Make it easier to build and componentize user interfaces
2. Allow anyone to create beautiful, custom web sites

## Not really a Roadmap

Whilst not entirely a fan of the todo list, it's good to share what's on the horizon for Preons.

## Stage One

Stage one is to get the basic elements of Preons working without worrying about integrations. Chances are, the end of Stage One won't even get Preons to v1.0.0. However, tests and static analysis checks will be added to help others contribute securely.

- [ ] Preons documentation
- [x] Cheatsheet lookup (reference)
- [x] Configuaration syntax
- [ ] Standardize Preons conventions
- [ ] CLI
  - [x] Sass generator
  - [x] Css generator
  - [x] References generator
  - [x] Documentation generator
  - [ ] Components generator
  - [ ] Reverse generator. Create preons.yaml from functional css styles
- [ ] Tests
  - [ ] CLI
  - [ ] UI
  - [ ] Static Analysis
- [ ] Pre-commit hooks
- [ ] Travis CI build

### The components generator

Storybook will be used to display components in a design system. I like their way of displaying content, and making things reusable. It will also be the tool to help aid the tutorial on getting setup quickly.

### The reverse generator

This is going to take an existing library, like Tachyons and convert it into the Preons.yaml.

Working from the `preons.yaml` is meant to make it easier to adjust settings quickly and build SCSS or CSS on the fly.

## End goal

By the end of stage one, I will determine if this project was just a helpful exercise in learning how to create a larger scale open-source project and be useful to just myself or whether it will have benefits beyond.
