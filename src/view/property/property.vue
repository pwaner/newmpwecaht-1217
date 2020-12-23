<template>
  <div id="property">
    <scroll class="content" ref="scroll" :pull-up-load="true">
      <div>
        <div class="info-container">
          <list-top
            class="clearfix"
            :text="headerData.title"
            :is-show-img="false"
          />
          <change-btn @clickBtn="goScenes" centerText="切换场景"></change-btn>
        </div>
        <property-lists :items="pitem"></property-lists>
        <no-data :items="pitem || []"></no-data>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import ListTop from "components/content/listTop/listTop";
import ChangeBtn from "components/common/changeBtn/changeBtn";
import NoData from "components/common/NoData";
import PropertyLists from './childComps/propertyLists/propertyLists'

import PropertyList from "network/propertyList";
import SubList from "network/subscrible/subscribeApi";

export default {
  name: "property",
  data() {
    return {
      headerData: {
        title: "物业列表",
        toLink: "",
      },
      pitem: [],
      pagesNum: 1,
      subList: []
    };
  },
  components: {
    Scroll,
    ListTop,
    ChangeBtn,
    NoData,
    PropertyLists
  },
  created() {
    this.getpropertyList();
  },
  methods: {
    //获取物业列表&获取订阅列表
    getpropertyList() {
      let parmas = "page=1&start=0&limit=" + this.pagesNum;
      PropertyList.getList(parmas).then((res) => {
        localStorage.setItem("propertyList", JSON.stringify(res.rows));
        this.$store.commit("updatePropertyList", res.rows);
        res.rows.map((items) => {
          this.pitem.push(items);
        });
      });
      SubList.getSubscrible()
    },

    //切换场景
    goScenes() {
      this.$router.push({
        name: "scene",
      });
    }
  },
};
</script>

<style scoped>
#property{
  height: 100vh;
}
</style>