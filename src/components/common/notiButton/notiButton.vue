<template>
  <div class="notiButton">
    <slot name="left" class="left"></slot>
    <slot name="right" class="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'notiButton'
}
</script>

<style scoped lang="less">
.notiButton {
  width: 90%;
    margin: 15px auto 0;
    border: 1px solid var(--color-high-text);
    border-radius: 40px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 10px 20px;
    .left{
      font-size: 14px;
    }
}
</style>