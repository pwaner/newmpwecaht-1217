<template>
  <div class="news">
    <scroll class="content" ref="scroll" :pull-up-load="true">
      <div>
        <list-top
          class="clearfix"
          text="佳御智慧安防公众号"
          :is-show-img="true"
        >
          <img src="~assets/img/logo.png" alt="logo" slot="image" />
        </list-top>
        <div class="login-box">
          <div class="txt-name">
            公众号暂提供业务系统（佳御智慧安防管理系统）通知的设备报警消息、警情信息
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import ListTop from "@/components/content/listTop/listTop";
import Scroll from "@/components/common/scroll/Scroll";
export default {
  name: "news",
  components: {
    ListTop,
    Scroll,
  },
};
</script>

<style scoped lang="less">
.news {
  height: 100vh;
  .txt-name{
    width: 90%;
    margin: 20px auto;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
}
</style>