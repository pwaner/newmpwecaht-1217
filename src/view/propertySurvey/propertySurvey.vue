<template>
  <div class="propertySurvey">
    <scroll ref="scroll" :pull-up-load="true">
      <div>
        <list-top class="clearfix" text="物业报告" :is-show-img="false" />
        <div v-for="item in list" :key="item">
          <detail-tab :tabList="item" />
        </div>
        <no-data :items="list || []"></no-data>
      </div>
    </scroll>
  </div>
</template> 

<script>
import DetailTab from "./childComps/detailTabel/detailTabel";
import NoData from "components/common/NoData";
import Scroll from "components/common/scroll/Scroll";
import ListTop from "@/components/content/listTop/listTop";

import resquet from "network/propertyList";

export default {
  data() {
    return {
      list: [],
      myParam: [],
      currentEzEid: 0,
    };
  },
  components: {
    DetailTab,
    NoData,
    Scroll,
    ListTop,
  },
  created() {
    this.getParam();
    this.getEstateSurvey();
  },
  methods: {
    getParam: function () {
      let estate = localStorage.getItem("estate");
      if (estate !== undefined) {
        var estateinfo = JSON.parse(estate);
        if (estateinfo !== undefined) {
          this.currentEzEid = estateinfo.ezEid;
        }
      }
      this.myParam = [
        { property: "appType", operator: "=", value: 201 },
        { property: "estateId", operator: "=", value: this.currentEzEid },
        { property: "views", operator: "=", value: "child" },
      ];
      // [
      //   { property: "estateId", value: this.currentEzEid, exactMatch: true },
      //   { property: "appType", operator: "=", value: 201 },
      // ];
    },
    getEstateSurvey: function () {
      var estateSurvey;
      var estate;
      var filter = "filter=" + encodeURIComponent(JSON.stringify(this.myParam));
      resquet
        .loadEstateSurvey(filter)
        .then((res) => {
          console.log(res);
          //存放物业表数据到sessionStorage
          localStorage.setItem("estateSurvey", JSON.stringify(res.rows));

          estate = localStorage.getItem("estateSurvey");

          estateSurvey = JSON.parse(estate);
          console.info(estateSurvey[0].name);
          console.info(this.items[0].name);
          console.info("estate:" + estate);
          console.info("estateSurvey:" + estateSurvey);
        })
        .catch((error) => {
          console.info(error.messages);
        });
    },
  },
};
</script>

<style scoped>
</style>