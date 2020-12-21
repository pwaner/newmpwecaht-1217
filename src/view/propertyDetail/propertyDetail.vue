<template>
  <div id="propertyDetail">
    <scroll class="content" ref="scroll" :pull-up-load="true">
      <div>
        <list-top
          class="clearfix"
          :text="headerData.title"
          :is-show-img="false"
        />
        <detail :tabList="item"> </detail>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import ListTop from "components/content/listTop/listTop";

import Detail from "./chidComps/detailTabel/detailTabel";

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
    Detail,
  },
};
</script>

<style scoped>
#propertyDetail {
  height: 100vh;
}
</style>