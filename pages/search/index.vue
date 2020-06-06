<template>
  <div class="lh0 fs0 relative fs1-m lh1-m">
    <div class="pl1 pr1 pb1 pl2-m pr2-m pb2-m relative ml-au mr-au mw-xxxsuper">
      <!-- Search form -->
      <div class="pl1 pr1 relative mb1">
        <div
          class="align-center pa1 bsa-solid bwa1 bca-white bra4 maxw-xsuper ml-au mr-au"
        >
          <input
            class="db bg-transparent white bwa0 w-100"
            type="text"
            placeholder="Search references..."
            v-on:keyup="search"
          />
        </div>
      </div>

      <div class="mb6 center greyl">
        Properties: {{ searchedProperties.length }}
      </div>

      <ul class="grey-l maxw-xsuper ml-au mr-au">
        <li
          class="mb3 pa1-m"
          v-for="options in searchedProperties"
          v-bind:key="options.property"
        >
          <span class="white">{{ options.property }}</span>
          <span class="w-100 bg-white h-wire df mt-small mb-small"></span>
          <ul v-if="options && options['values']">
            <li
              class="df mb-xsmall fs0"
              v-for="(value, suffix) in options.values"
              v-bind:key="suffix"
            >
              <span class="db w7 w-30-m pr2 white"
                >{{ options.class }}{{ suffix }}</span
              >
              <span class="db greyl white-m w-70-m">{{ value }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import config from '../../node_modules/preons/dist/preons-config.json';

export default {
  data() {
    return {
      properties: [],
      searchedProperties: []
    }
  },
  async asyncData({ $axios }) {
    let properties = Object.entries(
      config.preons.properties
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
