<template>
  <section class="characters-view">
    <template v-for="character in characters">
      <UiCharactersListItem
        :key="character.url"
        :name="character.name"
        :url="character.url"
        :is-in-favourites="isInFavourites(character.url)"
        @add="addToFavourites"
        @remove="removeFromFavourites"
      />
    </template>

    <UiPagination :previous="toPrevious || ''" :next="toNext || ''" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import userUrlToID from '@/utils/userUrlToID'

export default {
  async asyncData({ $axios, query }) {
    const currentPage = query.page ? `/?page=${query.page}` : ``
    const response = await $axios.$get(`/people${currentPage}`)
    const toReplace = 'https://swapi.dev/api/people/'
    return {
      response,
      characters: response.results,
      toPrevious: response.previous?.replace(toReplace, ''),
      toNext: response.next?.replace(toReplace, ''),
    }
  },

  computed: {
    ...mapGetters('favourites', {
      getFavouritesById: 'getFavouritesById',
    }),
  },

  watchQuery: ['page'],

  methods: {
    isInFavourites(url) {
      return !!this.getFavouritesById(userUrlToID(url))
    },
    addToFavourites({ id, url, name }) {
      this.$store.commit('favourites/add', {
        id,
        name,
        url,
      })
      this.$forceUpdate()
    },
    removeFromFavourites({ id, name, url }) {
      this.$store.commit('favourites/remove', {
        id,
        name,
        url,
      })
      this.$forceUpdate()
    },
  },
}
</script>

<style lang="scss">
.characters-view {
  display: block;
  margin: auto;
  padding: 3rem;
  width: 70%;
}
</style>