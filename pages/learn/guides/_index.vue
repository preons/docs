<template>
  <div class="relative df-m bg-neutrald shrink-20 minw0">

    <!-- main article -->
    <div
      class="bg-light pa1 pt3 pl2-m pr2-m pb2-m relative maxw-xxsuper minw0 w-100 shrink-20"
    >
      <div class="s-article">
        <h1>
          {{ page.title }}
        </h1>
      </div>

      <div class="s-article">
        <nuxt-content :document="page" />
      </div>
    </div>

    <!-- secondary sidebar -->
    <div
      class="ff-josefin bg-light dn db-l w-xbig-m mt0-m pr0-m scroll-m relative h-100 w-100 maxw-xbig-m"
    >
      <ul class="fixed lh0 w-100">
        <li class="">
          <a class="light bg-neutral pa1 tdx db tfu o-90" href="#"
            >Table of contents</a
          >
        </li>
        <li class="">
          <a class="actived pl1 pa-xsmall tdx db" href="#">{{ page.title }}</a>
        </li>
        <li class="" v-for="heading in headings">
          <a class="actived pl1 pa-xxsmall tdx db" :href="heading.link">{{
            heading.name
          }}</a>
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
    headings
  }
}

export default {
  layout: 'docs',

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
