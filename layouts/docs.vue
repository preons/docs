<template>
  <div class="bg-light ff-martel dark">
    <navigation />

    <div v-on:click="toggleSideMenu" class="fixed pa-xxsmall pt-xxxsmall pb-xxxsmall bg-active t3 l0 z-2 dn-m">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path fill="#302a61" d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
      </svg>
    </div>

    <span class="dt" style="height: 5rem;"></span>

    <div class="relative df-m bg-neutrald">
      <!-- Side bar -->
      <div class="relative w-xxbig-m">
        <div
          :class="[sideMenu ? 'db' : 'dn', 'db-m w-xxbig-m mb12-m mt0-m pr0-m scroll-m fixed bg-dark w-100 h-100 z-1 z-0-m t0 pt3 pt4-m l0 pl3 pl0-m']"
        >
          <ul class="lh0">
            <li class v-for="article in articles">
              <span
                v-if="article.name"
                class="ff-josefin bg-neutral pl2 pa-xsmall pa-thin-m fwb tdx db"
                >{{ article.name }}</span
              >
              <a
                v-for="link in article.links"
                :key="link.path"
                :class="[
                  'pointer',
                  'actived',
                  article.name ? 'pl3' : 'pl2',
                  'pa-xsmall',
                  'tdx',
                  'db',
                  'bcb-neutrald',
                  'bwb1',
                  'bsa-solid'
                ]"
                :href="link.path"
                >{{ link.title || link.slug }}</a
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- end of sidebar -->

      <nuxt />
    </div>
  </div>
</template>

<script>
import navigation from '../components/Navigation'

const link = (article) => ({
  ...article,
  path: article.path.replace('/home', ''),
  category: article.dir.match(/^\/[a-z]+\/([a-z]+)$/)
    ? article.dir.match(/^\/[a-z]+\/([a-z]+)$/)[1] + ': '
    : null
})

const getArticles = async ({ $content }) => {
  const learn = await $content('learn').fetch()
  const learnUi = await $content('learn/ui').fetch()
  const learnCli = await $content('learn/cli').fetch()

  return [
      { links: learn.map(link) },
      { name: 'UI', links: learnUi.map(link) },
      { name: 'CLI', links: learnCli.map(link) }
    ]
}

export default {
  watch: {
    $route(app) {
      this.spaceBg =
        this.$route.name === 'index' || this.$route.name === 'search'
      this.menu = false
      this.sideMenu = false
    }
  },
  mounted() {
    this.spaceBg = this.$route.name === 'index' || this.$route.name === 'search'
  },
  components: {
    navigation
  },
  data() {
    return {
      menu: false,
      sideMenu: false,
      spaceBg: true,
      articles: []
    }
  },
  methods: {
    showMenu() {
      this.menu = true
    },
    hideMenu() {
      this.menu = false
    },
    toggleSideMenu() {
      this.sideMenu = !this.sideMenu
    }
  },
  async mounted() {
    this.articles = await getArticles({ $content: this.$content })
  }
}
</script>
