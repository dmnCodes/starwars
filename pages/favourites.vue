<template>
  <div class="favourites-view">
    <template v-for="favourite in favourites">
      <UiFavouritesListItem
        :key="favourite.url"
        :name="favourite.name"
        :url="favourite.url"
      />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('favourites', {
      favourites: 'getFavouritesInOrder',
    }),
  },
}
</script>

<style lang="scss">
.favourites-view {
  display: block;
  margin: auto;
  padding: 3rem;
  width: 70%;
}
</style>