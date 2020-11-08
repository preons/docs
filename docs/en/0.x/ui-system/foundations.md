# Foundations

An illustrated reference guide for _Preons_ css classes. Unlike modules, components or scopes, _Foundations_ are single css rules represented by a single class. For example, `d-bl` represents `display: block`. For multiple rule classes such as needed for buttons etc, use modules and components.

## The Preons Default Convention

Having conventions allows Preons to use an entire scaffolding system from utility to complex components, making it easy to tweak styles and rules. However, if you have your own convention, you can do so using the CLI.

## Mobile first

Suffix any utility class with a breakpoint `-m` for medium or `-l` for large in the default theme.

```html
<span class="d-in d-bl-m d-inbl-l">Inline mobile, block table</span>
```
