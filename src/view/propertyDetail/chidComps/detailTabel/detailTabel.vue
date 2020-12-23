<template>
<common-tab>
  <common-tabel-item text="行政区划" value="" />
  <common-tabel-item text="物业名称" :value="tabList.address" />
  <common-tabel-item text="设备名称" :value="tabList.postScript" />
  <common-tabel-item text="物业地址" :value="tabList.address + tabList.name" />
  <common-tabel-item text="补充说明" :value="tabList.note" />
</common-tab>
</template>

<script>
import commonTab from 'components/common/commonTabel/commonTabel'
import commonTabelItem from 'components/common/commonTabel/commonTabelItem'
export default {
  props: {
    tabList: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
    };
  },
  components: {
    commonTab,
    commonTabelItem
  }
};
</script>

<style scoped lang="less">
</style>