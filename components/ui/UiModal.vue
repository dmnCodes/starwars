<template>
  <div class="ui-modal">
    <div class="ui-modal__overlay"></div>
    <div class="ui-modal__box">
      <div class="ui-modal__close" @click="close"></div>
      <div class="ui-modal__header">Header</div>
      <div class="ui-modal__context">context</div>
      <div class="ui-modal__footer"></div>
    </div>
  </div>
</template>

<style lang="scss">
.ui-modal {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &__overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
}
</style>