<template>
  <table class="mailTable">
    {{doTabs[0]}}
    <tr v-for="(item, index) in doTabs[0]" :key="index">
      <td class="column">{{ item.key }}</td>
      <td>{{ item.value }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      doTabs: [],
    };
  },
  mounted() {
    this.doTab();
  },
  methods: {
    doTab() {
      let currentTabs = {};
      for (var key in this.tabList) {
        console.log(key, ":", this.tabList[key]);
         currentTabs[this.tabList[key]] = key
      }
      console.log(currentTabs);
      this.doTabs.push(currentTabs);
      // this.tabList.map((value, key) => {
      //   console.log(value, key);
      //   currentTabs.key = value;
      //   this.doTabs.push(currentTabs);
      // });
    },
  },
};
</script>

<style>
</style>