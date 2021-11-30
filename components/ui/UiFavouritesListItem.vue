<template>
  <div class="ui-characters-list-item">
    <NuxtLink :to="linkTo" class="ui-characters-list-item__link">
      {{ name }}
    </NuxtLink>

    <button class="ui-characters-list-item__add" @click="removeFromFavourites">
      <i class="fa fa-trash-o"></i>
    </button>
  </div>
</template>

<script>
import userUrlToID from '@/utils/userUrlToID'

export default {
  name: 'UiCharactersListItem',

  props: {
    name: {
      required: true,
      type: String,
    },
    url: {
      required: true,
      type: String,
    },
  },

  computed: {
    linkTo() {
      return '/characters/' + userUrlToID(this.url)
    },
  },

  methods: {
    removeFromFavourites() {
      this.$store.commit('favourites/remove', {
        id: userUrlToID(this.url),
        name: this.name,
        url: this.url,
      })
    },
  },
}
</script>

<style lang="scss">
.ui-characters-list-item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5rem;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.05);
  border-radius: 0.125rem;

  &__link {
    display: block;
    padding: 1rem 1rem;
  }

  &__remove {
    display: block;
  }

  &:hover {
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.08);
  }
}
</style>