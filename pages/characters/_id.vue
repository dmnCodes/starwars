<template>
  <div class="characters-preview">
    <h1 class="character-heading">{{ character.name }}</h1>

    <div class="character-table">
      <div class="character-table__row">
        <div class="character-table__col">Height:</div>
        <div class="character-table__col">{{ character.height }} cm</div>
      </div>
      <div class="character-table__row">
        <div class="character-table__col">Mass:</div>
        <div class="character-table__col">{{ character.mass }} kg</div>
      </div>
      <div class="character-table__row">
        <div class="character-table__col">Hair color:</div>
        <div class="character-table__col">{{ character.hair_color }}</div>
      </div>
      <div class="character-table__row">
        <div class="character-table__col">Skin color:</div>
        <div class="character-table__col">{{ character.skin_color }}</div>
      </div>
      <div class="character-table__row">
        <div class="character-table__col">Eye color:</div>
        <div class="character-table__col">{{ character.eye_color }}</div>
      </div>
      <div class="character-table__row">
        <div class="character-table__col">Birth year:</div>
        <div class="character-table__col">{{ character.birth_year }}</div>
      </div>
      <div class="character-table__row">
        <div class="character-table__col">Gender:</div>
        <div class="character-table__col">{{ character.gender }}</div>
      </div>
      <div class="character-table__row">
        <div class="character-table__col">Homeworld:</div>
        <div class="character-table__col">{{ character.homeworld }}</div>
      </div>

      <button @click="fetchHomeworld(character.homeworld)">Homeworld</button>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const response = await $axios.$get('/people/' + params.id)
    return {
      character: response,
      response,
    }
  },

  methods: {
    async fetchHomeworld(url) {
      const response = await this.$axios.$get(url)
      console.log(response)
    },
  },
}
</script>

<style lang="scss">
.characters-preview {
  display: block;
  width: 70%;
  margin: auto;
  padding: 3rem;
}

.character-heading {
  margin-bottom: 1rem;
}

.character-table {
  &__row {
    display: flex;
    line-height: 1.6;
  }

  &__col {
    display: flex;

    &:first-child {
      width: 100px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
}
</style>