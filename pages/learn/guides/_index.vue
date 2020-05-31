<template>
  <div class="relative greyd bg-white df-m bg-greyll">
    <div class="dn db-m maxw-xxbig-m w-100"></div>
    <div class="bg-greyll dn db-m w-xxbig-m mb12-m mt0-m pr0-m relative scroll-m fixed-m h-100">
      <ul class="lh0">
        <li class v-for="article in articles">
          <span
            v-if="article.name"
            class="grey bg-hotpinkll pl2 pa-thin fwb tdx db bcb-bluel bwb1 bsa-solid"
          >{{ article.name }}</span>
          <a
            v-for="link in article.links"
            :key="link.path"
            :class="['pointer', 'hotpink', article.name ? 'pl3' : 'pl2', 'pa-xsmall', 'tdx', 'db', 'bcb-bluel', 'bwb1', 'bsa-solid']"
            :href="link.path"
          >{{ link.title || link.slug }}</a>
        </li>
      </ul>
    </div>
    <div class="bg-white pa1 pt3 pl2-m pr2-m pb2-m relative maxw-xsuper minw0 w-100 shrink-20">
      <div class="s-article">
        <h1>
          {{ page.title }}
          <span class="h-wire df w-100 bg-greyll mt1 mb2"></span>
        </h1>
      </div>

      <div class="s-article">
        <nuxt-content :document="page" />
      </div>
    </div>
    <div class="dn db-l w-xxbig-m mb12-m mt0-m pr0-m scroll-m relative h-100 w-100 maxw-xxbig-m">
      <ul class="fixed lh0 w-100">
        <li class="bca-bluel bwb1 bwr1 bsa-solid">
          <a class="grey bg-greyl pl2 pa-xsmall tdx db tfu" href="#">Table of contents</a>
        </li>
        <li class="bca-bluel bwb1 bwr1 bsa-solid">
          <a class="hotpink pl2 pa-xsmall tdx db" href="#">{{ page.title }}</a>
        </li>
        <li class="bca-bluel bwb1 bwr1 bsa-solid" v-for="heading in headings">
          <a class="hotpink pl2 pa-xsmall tdx db" :href="heading.link">{{ heading.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import title from 'title'

const link = (article) => ({
  ...article,
  path: article.path.replace('/home', ''),
  category: article.dir.match(/^\/[a-z]+\/([a-z]+)$/)
    ? article.dir.match(/^\/[a-z]+\/([a-z]+)$/)[1] + ': '
    : null
})

const getArticles = async ({ $content, params, categorySlug = '' }) => {
  const page = await $content(
    `learn/${categorySlug}${params.index || 'home'}`
  ).fetch()
  const learn = await $content('learn').fetch()
  const learnUi = await $content('learn/ui').fetch()
  const learnCli = await $content('learn/cli').fetch()
  let headings =
    page &&
    page.body &&
    page.body.children &&
    page.body.children
      .filter((i) => i.tag === 'h2' || i.tag === 'h3' || i.tag === 'h4')
      .map((i) => ({
        link: '#' + i.props.id,
        name: title(i.props.id.replace(/--/, ': ').replace(/[-]+/g, ' '))
      }))
  return {
    page,
    headings,
    articles: [
      { links: learn.map(link) },
      { name: 'UI', links: learnUi.map(link) },
      { name: 'CLI', links: learnCli.map(link) }
    ]
  }
}

export default {
  layout: 'simple',

  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.page.title
        },
        {
          hid: 'description',
          name: 'description',
          content:
            (this.page.blurb || '') +
            (this.page.blurb && this.page.author ? ' by ' : '') +
            (this.page.author || '')
        },
        {
          hid: `og:url`,
          property: 'og:url',
          content: 'https://preons.netlify.app//' + this.$route.fullPath
        },
        {
          hid: `og:image`,
          property: 'og:image',
          content: this.page.image
            ? 'https://preons.netlify.app/images/' + this.page.image
            : 'https://preons.netlify.app/images/satellite.png'
        },
        {
          hid: `og:description`,
          property: 'og:description',
          content: this.page.blurb || ''
        },
        {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: this.page.title
        },
        {
          hid: `twitter:card`,
          property: 'twitter:card',
          content: this.page.image
            ? 'https://preons.netlify.app/images/' + this.page.image
            : 'https://preons.netlify.app/images/satellite.png'
        },
        {
          hid: `twitter:description`,
          property: 'twitter:description',
          content: this.page.blurb || ''
        }
      ]
    }
  },
  async asyncData({ $content, params }) {
    return await getArticles({ $content, params, categorySlug: 'guides/' })
  }
}
</script>
