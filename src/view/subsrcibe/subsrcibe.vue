<template>
  <div class="subInfo">
    <scroll
      class="content"
      ref="scroll"
      @pullingUp="loadMore"
      :pull-up-load="true"
      :data="subData"
    >
      <div>
        <list-top class="clearfix" text="我的订阅" :is-show-img="false" />
        <sub-list :list="subData"></sub-list>
      </div>
    </scroll>
  </div>
</template>

<script>
import SubList from "./childComps/subList/subList";
import Scroll from "components/common/scroll/Scroll";
import ListTop from "@/components/content/listTop/listTop";

import { getSub } from "network/subscrible/getSubscrible";
import { Toast } from "mint-ui";

export default {
  name: "subInfo",
  data() {
    return {
      subData: [],
      limit: 10,
    };
  },
  components: {
    SubList,
    Scroll,
    ListTop,
  },
  created() {
    this.getSubscribleList(this.limit);
  },
  methods: {
    loadMore() {
      this.getSubscribleList(this.limit);
    },
    //请求订阅列表
    getSubscribleList(limit) {
      getSub(limit)
        .then((res) => {
          //console.log(res.rows);
          this.subData = res.rows;
          this.limit += 10;
          this.$refs.scroll.finishPullUp();
        })
        .catch((error) => {
          Toast(error.message);
        });
    },
  },
};
</script>

<style scoped>
.subInfo {
  height: 100vh;
}
</style>