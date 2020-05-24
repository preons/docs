<template>
  <div class="relative greyd bg-white df-m">
    <div class="dn db-m w-xxbig-m pa2-m relative s-article fixed-m">
      <ul>
        <li>
          <a href="#">{{ page.title }}</a>
        </li>
        <li v-for="heading in headings">
          <a :href="heading.link">{{ heading.name }}</a>
        </li>
      </ul>
    </div>
    <div
      class="pa1 pt2 pl2-m pr2-m pb2-m relative maxw-xsuper w-100 ml-xxbig-m"
    >
      <div class="s-article">
        <h1>
          {{ page.title }}

          <span class="h-wire df w-100 bg-greyll mt1 mb2"></span>
        </h1>
      </div>

      <div class="df justify-between items-center">
        <img
          alt="Gemma Black avatar"
          class="bca-hotpink bsa-solid bwa1 h3 w3 bra-50 db"
          src="http://0.gravatar.com/avatar/2ffdfa89aaf6195cd438dc013fff12b2"
        />
        <a href="https://github.com/gemmadlou" class="mr-au ml1 grey fs-1 tdx">
          Gemma Black
        </a>
        <div class="fs-1">
          {{ page.date }}
        </div>
      </div>

      <div class="s-article">
        <nuxt-content :document="page" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'simple',
  async asyncData({ $content, params }) {
    const page = await $content('articles', params.article).fetch()
    let headings = page.body.children
      .filter((i) => i.tag === 'h2' || i.tag === 'h3' || i.tag === 'h4')
      .map((i) => ({
        link: '#' + i.props.id,
        name: i.props.id.replace(/--/, ': ').replace(/[-]+/g, ' ')
      }))
    return {
      page,
      headings
    }
  }
}
</script>
