<link href="https://unpkg.com/preons@0.4.5/dist/preons.css" rel="stylesheet" type="text/css" />

# Menus

Creating menus with utility classes means you can copy-paste ones you like or reuse ones you create time-and-time-again.

## Mobile menu

<div class="d-fl mb2 pa2 bwa1 bsa-solid bca-grey">
<div class="maxw-xxbig h-100 maxh-super ff-raleway ml-au mr-au">

  <nav class="fs4 lh4 ls1 bg-purpled h-100 d-fl jc-between grow-1">
    <div class="y-scroll w-100 h-100">
      <div class="pa2 d-fl column">
        <a class="w3 h3 bg-purplexd bra-50 d-fl jc-center ai-center white fwb mb3">
        P
        </a>
        <a class="white mb1 pointer">Dashboard</a>
        <a class="purplexl mb1 pointer">Users</a>
        <a class="purplexl mb1 pointer">Social media</a>
        <a class="purplexl mb1 pointer">Accounts</a>
        <a class="purplexl mb1 pointer">Organisations</a>
        <a class="purplexl mb1 pointer">Notifications</a>
        <a class="purplexl mb1 pointer">Settings</a>
        <a class="purplexl mb1 pointer">Support</a>
      </div>
    </div>
    <!-- hamburger -->
    <div class="pa-xsmall pb1 d-fl column jc-end bca-purplel bsa-solid bwl1">
    <img class="h2 w2" src="https://6417i.csb.app/assets/icons/light/hamburger.svg" />
    </div>

  </nav>
</div>
</div>

```html
<nav class="fs4 lh4 ls1 bg-purpled h-100 d-fl jc-between grow-1">
  <!-- Links -->
  <div class="y-scroll w-100 h-100">
    <div class="pa2 d-fl column">
      <a
        class="w3 h3 bg-purplexd bra-50 d-fl jc-center ai-center white fwb mb3"
      >
        P
      </a>

      <a class="white mb1">Home</a>
      <a class="purplexl mb1">Users</a>
      <a class="purplexl mb1">Social media</a>
      <a class="purplexl mb1">Accounts</a>
      <a class="purplexl mb1">Organisations</a>
      <a class="purplexl mb1">Notifications</a>
      <a class="purplexl mb1">Settings</a>
      <a class="purplexl mb1 pointer">Support</a>
    </div>
  </div>
  <!-- hamburger -->
  <div class="pa-xsmall pb1 d-fl column jc-end bca-purplel bsa-solid bwl1">
    <img class="h2 w2" src="/assets/icons/light/hamburger.svg" />
  </div>
</nav>
```

### Interactive Examples

- [Vuejs](https://codesandbox.io/s/frosty-ride-6417i?file=/docs/0.x/ui-system/component/menu-mobile-1-vue.html)

## Login buttons

<div class="mb2 pa1 bwa1 bsa-solid bca-grey">
  <header class="d-fl jc-end w-100 ai-center">
    <a class="purplexl">
      <button class="bg-purpled bwa1 bsa-solid bca-purple pa-xsmall pl2 pr2 fs2 ls2 white tt-up">
        Login
      </button>
    </a>
  </header>
</div>

```html
<header class="d-fl jc-end h5 ai-center">
  <a class="purplexl mb1">
    <button
      class="bg-purpled bwa1 bsa-solid bca-purple pa-xsmall pl2 pr2 fs2 ls2 white tt-up"
    >
      Login
    </button>
  </a>
</header>
```
