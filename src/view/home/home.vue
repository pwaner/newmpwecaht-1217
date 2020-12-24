<template>
  <div id="home">
    <scroll
      class="content"
      ref="scroll"
      @pullingUp="loadMore"
      :pull-up-load="true"
    >
      <div>
        <list-top class="clearfix" text="佳御智慧安防公众号" :is-show-img="true">
          <img src="~assets/img/logo.png" alt="img" slot="image">
        </list-top>
        <home-swiper :banners="banners" ref="hSwiper"></home-swiper>
        <main-btn-list />
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import ListTop from "@/components/content/listTop/listTop";

import HomeSwiper from "./childComps/homeSwiper/homeSwiper";

import MainBtnList from "./childComps/mineBtnList/mineBtnList";

import imgURL from "@/assets/img/banner/banner1.png";

export default {
  name: "home",
  data() {
    return {
      banners: [
        {
          link: "",
          image: imgURL,
        },
        {
          link: "",
          image: imgURL,
        },
      ],
    };
  },
  components: {
    Scroll,
    HomeSwiper,
    MainBtnList,
    ListTop,
  },
  methods: {
    //下拉加载更多
    loadMore() {},
  },
};
</script>

<style scoped lang="less">
#home {
  /*position: relative;*/
  height: 100vh;
}
.clearfix {
  border-bottom: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>