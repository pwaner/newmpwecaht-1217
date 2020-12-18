<template>
  <div class="list_top">
    <div class="image" v-if="isShowImg"><slot name="image"></slot></div>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    isShowImg: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style scoped lang="less">
.list_top {
  width: 100%;
  border-bottom: 1px solid #d6d6d6;
  padding: 10px 0;
  text-align: center;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  .image {
    width: 35px;
    height: auto;
    img{
      width: 100%;
      height: auto;
    }
  }
  p {
    padding: 0 5px;
    font-size: 14px;
  }
}
</style>