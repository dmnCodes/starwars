<template>
  <div class="default-layout">
    <MainNavigation />
    <Nuxt />
    <MainFooter />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

.default-layout {
  display: block;
}

button {
  outline: none;
  display: flex;
  padding: 0.3em 0.85em;
  border: 0;
  color: rgba(0, 0, 0, 0.8);
  border-radius: 0.25em;
  margin-right: 0.125em;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.08);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.15s ease-in-out;
  }

  &:hover {
    cursor: pointer;

    &::before {
      opacity: 1;
    }
  }

  &:disabled {
    pointer-events: none !important;
    color: rgba(0, 0, 0, 0.3);
  }
}
</style>