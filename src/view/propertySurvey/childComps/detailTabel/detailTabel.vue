<template>
  <common-tab>
    <common-tabel-item text="名称" :value="tabList.name" />
    <common-tabel-item text="地址" :value="tabList.address" />
    <common-tabel-item text="调查情况" :value="tabList.surveyCase" />
    <common-tabel-item text="调查状态" :value="surveyState" />
    <common-tabel-item text="调查结论" :value="tabList.result" />
  </common-tab>
</template>

<script>
import commonTab from "components/common/commonTabel/commonTabel";
import commonTabelItem from "components/common/commonTabel/commonTabelItem";
export default {
  props: {
    tabList: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    commonTab,
    commonTabelItem,
  },
};
</script>

<style>
</style>