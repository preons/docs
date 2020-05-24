<template>
  <div class="relative greyd bg-white s-article df-m">
    <div
      class="pa1 pt2 pl2-m pr2-m pb2-m relative w-100 maxw-xxxsuper ml-au mr-au"
    >
      <h1>Articles</h1>
      <ul>
        <li v-for="article in articles">
          <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
        </li>
      </ul>
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
