<template>
  <div id="warning">
    <scroll
      ref="scroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
      :data="items"
    >
      <div>
        <list-top class="clearfix" text="告警信息" :is-show-img="true">
          <img src="~assets/img/logo.png" alt="img" slot="image" />
        </list-top>
        <change-btn @clickBtn="goScenes" centerText="切换场景" />
        <div v-for="(item, index) in items" :key="index">
          <warn-list :list="item" />
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import ListTop from "@/components/content/listTop/listTop";
import ChangeBtn from "components/common/changeBtn/changeBtn";

import WarnList from "./childComps/warnList/warnList";

import request from "network/warning";

import { toQueryPair } from "@/common/common";

export default {
  name: "warning",
  components: {
    Scroll,
    ListTop,
    ChangeBtn,
    WarnList,
  },
  data() {
    return {
      items: [],
      page: 1,
      start: 0,
      limit: 5,
    };
  },
  created() {
    this.getAlamList(this.limit);
  },
  methods: {
    goScenes: function () {
      // this.$router.go('/mineProperty')
      this.$router.push("/scene");
    },
    //下拉加载更多
    loadMore() {
      this.getAlamList(this.limit);
    },
    getAlamList(limit) {
      let urlData = "";
      let data = {
        page: this.page,
        start: this.start,
        limit,
      };
      for (let i in data) {
        urlData += toQueryPair(i, data[i]);
      }
      request
        .getwarnList(urlData)
        .then((res) => {
          console.log(res.rows);
          res.rows.map((item) => {
            this.items.push(item);
          });

          // this.limit += 5;
          this.page++;
          this.$refs.scroll.finishPullUp();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
#warning {
  height: 100vh;
}
</style>