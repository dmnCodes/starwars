<template>
  <section class="characters">
    <template v-for="character in characters">
      <UiCharactersListItem 
        :key="character.url" 
        :name="character.name" 
        :url="character.url" 
      />
    </template>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const response = await $axios.$get('/people')
    return { 
      characters: response.results
    }
  }
}
</script>

<style lang="scss">
.characters {
  display: block;
  margin: auto;
  padding: 3rem;
  width: 70%;
}
</style>