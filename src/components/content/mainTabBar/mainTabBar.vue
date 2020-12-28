<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <img slot="icon" src="~assets/img/tabbar/logo.png" alt="" />
      <img slot="active-icon" src="~assets/img/tabbar/logo.png" alt="" />
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <img slot="icon" src="~assets/img/tabbar/profile.png" alt="" />
      <img slot="active-icon" src="~assets/img/tabbar/profile.png" alt="" />
      <div slot="text">我的</div>
    </tab-bar-item>
    <tab-bar-item link="/login" class="stopClick">
      <img slot="icon" src="~assets/img/tabbar/more.png" alt="" />
      <img slot="active-icon" src="~assets/img/tabbar/more.png" alt="" />
      <div slot="text">更多</div>
    </tab-bar-item>
  </tab-bar>
</template>

  <script>
import TabBar from "common/tabBar/tabBar";
import TabBarItem from "common/tabBar/tabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
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
