<template>
  <div id="warning">
    <scroll ref="scroll" :pull-up-load="true">
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

import mineInfoService from "services/mineInfoService";
import { Toast } from "mint-ui";

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
limit: 0
    };
  },
  created() {
    this.getAlamList();
  },
  methods: {
    goScenes: function () {
      // this.$router.go('/mineProperty')
      this.$router.push("/scene");
    },
    getAlamList: function () {
      // http://test.zayutech.com/api/desktop/devices/alarms?_dc=1569379641412&page=1&start=0&limit=20
      var param = "page=1&start=0&limit=2";
      let data = {
        page: this.page,
        start: this.start,
        limit: this.limit
      }
      console.log(data);
      mineInfoService
        .getAlamList(param)
        .then((res) => {
          console.log(res);
          this.items = res.rows;
        })
        .catch((error) => {
          Toast(error.message);
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