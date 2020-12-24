<template>
  <common-tab>
    <common-tabel-item text="安装名称" :value="list.installName" />
    <common-tabel-item text="报警修改时间" :value="getdate(list.modifyTime)" />
    <common-tabel-item text="安装地址" :value="list.address" />
    <common-tabel-item
      text="当前生命周期状态"
      :value="AchangeType(list.stateLife)"
    />
    <common-tabel-item text="报警说明" :value="list.note" />
    <common-tabel-item text="报警状态" :value="AchangeType(list.state)" />
    <common-tabel-item text="报警类型" :value="Aconvert2crTypes(list.type)" />
  </common-tab>
</template>

<script>
import commonTab from "components/common/commonTabel/commonTabel";
import commonTabelItem from "components/common/commonTabel/commonTabelItem";

import { convert2crType } from "@/common/warnType/UAlarm";
import { changeType } from "@/common/warnType/DevLife";
export default {
  name: "warnList",
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
  methods: {
    AchangeType(type) {
      type = this.num2Str(type);
      return changeType(type);
    },
    Aconvert2crTypes(type) {
      // console.log(type);
      type = this.num2Str(type);
      return convert2crType(type);
    },
    //时间戳转换
    getdate() {
      var now = new Date(),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
      return (
        y +
        "-" +
        (m < 10 ? "0" + m : m) +
        "-" +
        (d < 10 ? "0" + d : d) +
        " " +
        now.toTimeString().substr(0, 8)
      );
    },
    //数字转字符串
    num2Str(num) {
      return num.toString();
    },
  },
};
</script>

<style>
</style>