<template>
  <div class="ui-characters-list-item">
    <NuxtLink :to="linkTo" class="ui-characters-list-item__link">
      {{ name }}
    </NuxtLink>

    <button
      v-if="isInFavourites"
      class="ui-characters-list-item__remove"
      @click="removeFromFavourites"
    >
      <i class="fa fa-heart"></i>
    </button>
    <button
      v-if="!isInFavourites"
      class="ui-characters-list-item__add"
      @click="addToFavourites"
    >
      <i class="fa fa-heart-o"></i>
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
    isInFavourites: {
      type: Boolean,
    },
  },

  computed: {
    linkTo() {
      return '/characters/' + userUrlToID(this.url)
    },
  },

  methods: {
    addToFavourites() {
      this.$emit('add', {
        id: userUrlToID(this.url),
        name: this.name,
        url: this.url,
      })
    },
    removeFromFavourites() {
      this.$emit('remove', {
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

  &__add {
    display: block;
  }

  &:hover {
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.08);
  }
}
</style>