<template>
  <div class="lh0 fs0 relative fs1-m lh1-m">
    <div class="pl1 pr1 pb1 pl2-m pr2-m pb2-m relative ml-au mr-au mw-xxxsuper">
      <!-- Search form -->
      <div class="pl1 pr1 relative mb1">
        <div class="align-center pa1 bsa-solid bwa1 bca-white bra4 maxw-xsuper ml-au mr-au">
          <input
            class="db bg-transparent white bwa0 w-100"
            type="text"
            placeholder="Search references..."
            v-on:keyup="search"
          />
        </div>
      </div>

      <div class="mb6 center greyl">Properties: {{ searchedProperties.length }}</div>

      <ul class="grey-l maxw-xsuper ml-au mr-au">
        <li class="mb3 pa1-m" v-for="(options) in searchedProperties" v-bind:key="options.property">
          <span class="white">{{ options.property }}</span>
          <span class="w-100 bg-white h-wire df mt-small mb-small"></span>
          <ul v-if="options && options['values']">
            <li
              class="df mb-xsmall fs0"
              v-for="(value, suffix) in options.values"
              v-bind:key="suffix"
            >
              <span class="db w7 w-30-m pr2 white">{{ options.class }}{{ suffix }}</span>
              <span class="db greyl white-m w-70-m">{{ value }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- <div class="ml-au mr-au mw-xxxsuper"></div>
    <div class="pa2 pb3 relative pa3-m pt5-m pb5-m">
      <div class="h-100 w-100 absolute t0 l0"></div>
      <div class="relative ml-au mr-au mw-xxxsuper pl1 pr1 pl2-m pr2-m">
        <h3 class="mb1 fwb fs1 lh2 ls1 fs3-m lh3-m mb2-m">
          What is Preons
        </h3>

        <p class="mb1 mb2-m">
          Preons is a functional css library and generator that allows you to:
        </p>
        <ul class="pl2 lst-disc pl3-m">
          <li class="mb1">Write CSS once and build into the future</li>
          <li class="mb1">Reuse same file multiple projects</li>
          <li class="mb1">Design unique UI components in the browser</li>
          <li class="mb1">Customise and generate your library</li>
        </ul>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      properties: [],
      searchedProperties: []
    }
  },
  async asyncData({ $axios }) {
    let response = await $axios.get(
      'https://unpkg.com/preons@0.3.19/dist/preons-config.json'
    )

    let properties = Object.entries(
      response.data.preons.properties
    ).map(([property, values]) => ({ property, ...values }))

    return {
      properties,
      searchedProperties: properties
    }
  },
  methods: {
    search(event) {
      this.searchedProperties = this.properties
        .filter((item) => {
          return (
            item.property
              .toLowerCase()
              .indexOf(event.target.value.toLowerCase()) > -1
          )
        })
        .sort((a, b) => {
          if (a.property.indexOf('-') === -1) {
            return -1
          }

          if (b.property.indexOf('-') === -1) {
            return 1
          }

          return 0
        })
    }
  }
}
</script>