<template>
  <div id="propertyDetail">
    <scroll class="content" ref="scroll" :pull-up-load="true">
      <div>
        <list-top
          class="clearfix"
          :text="headerData.title"
          :is-show-img="false"
        />
        <detail-tab :tabList="item"> </detail-tab>
        <detail-btn />
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import ListTop from "components/content/listTop/listTop";

import DetailTab from "./chidComps/detailTabel/detailTabel";
import DetailBtn from "./chidComps/detailBtn/detailBtn";

export default {
  name: "propertyDetail",
  data() {
    return {
      headerData: {
        title: "物业详情",
        toLink: "",
      },
      item: this.$store.state.currentEstate,
    };
  },
  components: {
    ListTop,
    Scroll,
    DetailTab,
    DetailBtn
  },
};
</script>

<style scoped>
#propertyDetail {
  height: 100vh;
}
</style>