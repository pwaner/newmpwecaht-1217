<template>
  <common-tab>
    <common-tabel-item text="安装名称" :value="list.installName" />
  </common-tab>
</template>

<script>
import commonTab from "components/common/commonTabel/commonTabel";
import commonTabelItem from "components/common/commonTabel/commonTabelItem";
export default {
  name: "dangerList",
  props: {
    list: {
      type: [Array, Object],
      default: () => [] || {},
    },
  },
  components: {
    commonTab,
    commonTabelItem,
  },
  methods: {},
};
</script>

<style>
</style>