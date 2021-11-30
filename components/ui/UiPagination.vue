<template>
  <div class="ui-pagination">
    <NuxtLink
      tag="button"
      :to="previous"
      :disabled="!previous"
      data-cy="previous"
      >Previous</NuxtLink
    >

    <NuxtLink tag="button" :to="next" :disabled="!next" data-cy="next"
      >Next</NuxtLink
    >
  </div>
</template>

<script>
export default {
  name: 'UiPagination',

  props: {
    previous: {
      default: undefined,
      type: String,
    },

    next: {
      default: undefined,
      type: String,
    },
  },
}
</script>

<style lang="scss">
.ui-pagination {
  display: flex;
  margin-top: 1rem;
}
</style>