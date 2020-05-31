<template>
  <div>
    <!-- header -->
    <div
      class="bg-white pa1 df items-center justify-between z-1 relative maxw-xxxsuper-m ml-au-m mr-au-m"
    >
      <div class="dn-m">
        <span class="h-wire w1 bg-black db  mb-xxxsmall"></span>
        <span class="h-wire w1 bg-black db mb-xxxsmall"></span>
        <span class="h-wire w1 bg-black db"></span>
      </div>
      <h1 class="fwb tfu">Preons</h1>
      <div class="dn-m">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="20px"
          height="20px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          />
        </svg>
      </div>
      <div
        class="dn df-m bca-grey bwa1 bsa-solid pa-xxsmall maxw-xxbig w-100 bra2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
        </svg>
        <input
          class="ml1 w-100 fs-1 fwb bca-transparent"
          type="text"
          placeholder="Search items..."
        />
      </div>
      <div class="dn dib-m">
        <div class="dib mr2">Sign in</div>
        <button class="bg-black pa-xsmall pl2 pr2 bwc-tranparent white">
          Join
        </button>
      </div>
    </div>
    <!-- nav -->
    <div class="bwb1-m bca-grey-m bsa-solid-m ">
      <div
        class="bg-black white center h-100vh fixed w-100 t0 pt4 relative-m bg-white-m h-au-m black-m pt0-m maxw-xxxsuper-m ml-au-m mr-au-m"
      >
        <ul class="df-m justify-center-m tfu tfx-m">
          <li>
            <a class="dib pa2 pt1 pb1 white tdx black-m" href="">Home</a>
          </li>
          <li>
            <a class="dib pa2 pt1 pb1 white tdx black-m" href="">Products</a>
          </li>
          <li>
            <a class="dib pa2 pt1 pb1 white tdx black-m" href="">Features</a>
          </li>
          <li>
            <a class="dib pa2 pt1 pb1 white tdx black-m" href="">About</a>
          </li>
          <li>
            <a class="dib pa2 pt1 pb1 white tdx black-m" href=""
              >Meet the team</a
            >
          </li>
          <li>
            <a class="dib pa2 pt1 pb1 white tdx black-m" href="">Contact us</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'app'
}
</script>
