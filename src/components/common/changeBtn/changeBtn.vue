<template>
  <div class="clickBtn mine-info-row-w" @click="clickBtn">
    <slot></slot>
    <span v-if="centerText">{{ centerText }}</span>
  </div>
</template>

<script>
export default {
  props: {
    centerText: {
      type: String,
      default: "",
    },
  },

  methods: {
    clickBtn() {
      this.$emit("clickBtn");
    },
  },
};
</script>

<style scoped lang="less">
.clickBtn {
  padding: 5px;
  margin: 10px auto 0;
  width: 6.25rem;
  border: var(--color-high) solid 1px;
  width: 90%;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  span {
    display: block;
    text-align: center;
    width: 100%;
    color: #000;
  }
}
</style>