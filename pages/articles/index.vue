<template>
  <div class="relative greyd df-m justify-stretch">
    <!-- <div class="dn db-m w-xxbig-m mb12-m mt0-m pr0-m relative scroll-m">
      <ul class="lh0 h-100vh bg-greyxl fixed w-xxbig-m">
        <li class v-for="article in articles">
          <nuxt-link
            :to="article.path"
            :class="[
              'pointer',
              'hotpink',
              'pl2',
              'pa-xsmall',
              'tdx',
              'db',
              'bcb-lilacl',
              'bwb1',
              'bsa-solid'
            ]"
            >{{ article.title }}</nuxt-link
          >
        </li>
      </ul>
    </div> -->
    <div
      class="minw0 pa1 pt2 pl2-m pr2-m pb2-m relative w-100 maxw-xxxsuper ml-au mr-au s-article shrink-20"
    >
      <h1>Articles</h1>
      <div class="df-m">
        <div class="mb1 w-4-12-m relative-m" v-for="article in articles" :key="article.path">
          <span class="db fs-2 neutral tfu">{{ article.date }}</span>
          <a class="lh0" href="/articles/making-preons">{{ article.title }}</a>
          <p>{{ article.blurb }}</p>
          <div class="h-thin bg-layout w1 absolute-m b0"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'simple',
  data() {
    return {
      articles: []
    }
  },
  async asyncData({ $content }) {
    const articles = await $content('articles').fetch()

    const sortedArticles = articles.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      }

      if (a.date > b.date) {
        return -1
      }

      return 0
    })

    return {
      articles: sortedArticles
    }
  }
}
</script>
