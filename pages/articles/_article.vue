<template>
  <div class="relative greyd bg-white df-m">
    <div
      class="dn db-m w-xxbig-m mb12-m mt2-m pa2-m pt1-m pr0-m relative scroll-m s-article fixed-m maxh-90-m"
    >
      <ul>
        <li>
          <a href="#">{{ page.title }}</a>
        </li>
        <li v-for="heading in headings">
          <a :href="heading.link">{{ heading.name }}</a>
        </li>
      </ul>
    </div>
    <div class="pa1 pt2 pl2-m pr2-m pb2-m relative maxw-xsuper w-100 ml-xxbig-m">
      <div class="s-article">
        <h1>
          {{ page.title }}
          <span class="h-wire df w-100 bg-greyll mt1 mb2"></span>
        </h1>
      </div>

      <div id="profile" class="df justify-between items-center mb4">
        <img
          alt="Gemma Black avatar"
          class="bca-hotpink bsa-solid bwa1 h3 w3 bra-50 db"
          src="https://0.gravatar.com/avatar/2ffdfa89aaf6195cd438dc013fff12b2"
        />
        <a href="https://github.com/gemmadlou" class="mr-au ml1 grey fs-1 tdx">{{ page.author }}</a>
        <div class="fs-1">{{ page.date }}</div>
      </div>

      <div class="s-article">
        <nuxt-content :document="page" />
      </div>
    </div>
  </div>
</template>

<script>
import title from 'title'

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
    const page = await $content('articles', params.article).fetch()
    let headings = page.body.children
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
}
</script>
