<template>
  <div id="btnList">
    <btn-list>
      <btn-list-item link="/MineInfo">
        <img src="~assets/img/mine/gongzuotaishouye.png" alt="img" slot="icon" />
        <div slot="text">账户信息</div>
      </btn-list-item>
      <btn-list-item link="/property">
        <img src="~assets/img/mine/account.png" alt="img" slot="icon" />
        <div slot="text">我的物业</div>
      </btn-list-item>
      <btn-list-item link="/subscribe">
        <img src="~assets/img/mine/news.png" alt="img" slot="icon" />
        <div slot="text">我的订阅</div>
      </btn-list-item>
    </btn-list>
  </div>
</template>

<script>
import BtnList from "common/btnList/btnList";
import BtnListItem from "common/btnList/btnListItem";

export default {
  data() {
    return {};
  },
  components: {
    BtnList,
    BtnListItem
  },
};
</script>

<style scoped>
</style>