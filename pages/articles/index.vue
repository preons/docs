<template>
  <div class="relative greyd df-m justify-stretch">
    <div class="dn db-m w-xxbig-m mb12-m mt0-m pr0-m relative scroll-m">
      <ul class="lh0 h-100vh bg-greyll fixed w-xxbig-m">
        <li class v-for="article in articles">
          <nuxt-link
            :to="article.path"
            :class="['pointer', 'hotpink', 'pl2', 'pa-xsmall', 'tdx', 'db', 'bcb-bluel', 'bwb1', 'bsa-solid']"
          >{{ article.title }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div
      class="minw0 pa1 pt2 pl2-m pr2-m pb2-m relative w-100 maxw-xxxsuper ml-au mr-au s-article shrink-20"
    >
      <h1>Articles</h1>
      <p>
        More articles to come. If you're interested in how Preons
        got started, check out
        <a
          href="/articles/making-preons"
        >Making Preons</a>
      </p>
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

    return {
      articles
    }
  }
}
</script>
