<template>
  <div class="relative z-1 container h-100 pa2 white">
    <h1 v-if="error.statusCode === 404" class="mb2 fs3 fs4-m fwb">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <p>Go back to the <nuxt-link class="hotpink tdx" to="/">Home page</nuxt-link></p>
  </div>
</template>



<script>
export default {
  props: ['error'],
  layout: 'default' // you can set a custom layout for the error page
}
</script>