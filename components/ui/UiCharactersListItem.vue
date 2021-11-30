<template>
  <div class="ui-characters-list-item">
    <NuxtLink :to="linkTo" class="ui-characters-list-item__link">
      {{ name }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'UiCharactersListItem',

  props: {
    name: {
      required: true,
      type: String
    },
    url: {
      required: true,
      type: String
    }
  },

  computed: {
    linkTo() {
      const ID = this.url.replace('https://swapi.dev/api/people/', '').replace('/', '')
      return '/characters/' + ID
    }
  }
}
</script>

<style lang="scss">
.ui-characters-list-item {
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
  box-shadow: 1px 3px 5px rgba(0,0,0, 0.05);
  border-radius: 0.125rem;

  &__link {
    display: block;
    padding: 1rem 1rem;
  }

  &:hover {
    box-shadow: 1px 3px 8px rgba(0,0,0, 0.08);
  }
}
</style>