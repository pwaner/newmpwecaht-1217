<template>
  <div id="btnList">
    <list-top class="clearfix" text="佳御智慧安防公众号" />
    <btn-list>
      <btn-list-item link="/news">
        <img src="~assets/img/home/subscribe.png" alt="" slot="icon" />
        <div slot="text">资讯服务</div>
      </btn-list-item>
      <btn-list-item link="/warning">
        <img src="~assets/img/home/giveAnAlarm.png" alt="" slot="icon" />
        <div slot="text">告警信息</div>
      </btn-list-item>
      <!--TODO -->
      <btn-list-item link="/danger" class="stopClick" @click="click">
        <img src="~assets/img/home/policeSituation.png" alt="" slot="icon" />
        <div slot="text">警情信息</div>
      </btn-list-item>
    </btn-list>
  </div>
</template>

<script>
import BtnList from "common/btnList/btnList";
import BtnListItem from "common/btnList/btnListItem";
import ListTop from "content/listTop/listTop";
import { Toast } from "mint-ui";

export default {
  data() {
    return {};
  },
  components: {
    BtnList,
    BtnListItem,
    ListTop,
  },
  methods: {
    click() {
      Toast("敬请期待");
    },
  },
};
</script>

<style scoped>
.stopClick {
  pointer-events: none;
  cursor: default;
  opacity: 1;
}
</style>