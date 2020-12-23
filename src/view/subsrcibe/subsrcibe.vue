<template>
  <div class="subInfo">
    <scroll class="content"
      ref="scroll"
      @pullingUp="loadMore"
      :pull-up-load="true">
      <div>
        <list-top class="clearfix" text="我的订阅" :is-show-img="false" />
        <sub-list></sub-list>
      </div>
    </scroll>
  </div>
</template>

<script>
import SubList from "./childComps/subList/subList";
import Scroll from "components/common/scroll/Scroll";
import ListTop from "@/components/content/listTop/listTop";

export default {
  name: "subInfo",
  components: {
    SubList,
    Scroll,
    ListTop,
  },
  methods: {
    loadMore() {},
  }
};
</script>

<style scoped>
.subInfo {
  height: 100vh;
}
</style>