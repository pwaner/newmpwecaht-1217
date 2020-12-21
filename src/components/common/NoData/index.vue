<template>
  <div class="no-data" v-if="items.length <= 0">
    <img src="~assets/img/no-data.png" class="noDataImg" />
    <div class="gray text-center msg title-3">暂无数据</div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="less">
.no-data {
  text-align: center;
  img {
    max-width: 80%;
  }
  .gray{
    color: #555;
    font-size: 14px;
    margin-top: 15px;
  }
}
</style>
