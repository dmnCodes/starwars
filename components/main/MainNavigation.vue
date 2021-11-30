<template>
  <div class="main-navigation">
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/characters">Characters</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/favourites">Favourites</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.main-navigation {
  display: inline-flex;
  width: 100%;
  // height: 56px;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 8px rgba(0,0,0, 0.125);

  ul {
    list-style: none;
    display: inline-flex;

    li a {
      display: flex;
      padding: 0.85rem 1rem;
      text-decoration: none;
      color: rgba(0,0,0, 0.6);

      &:hover {
        color: rgba(0,0,0, 0.75);
      }
    }

    .nuxt-link-exact-active {
      color: rgba(0,0,0, 0.90);
    }
  }
}
</style>