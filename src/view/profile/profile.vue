<template>
  <div id="profile">
    <scroll class="content" ref="scroll" :pull-up-load="true">
      <div>
        <div class="profile_info">
          <list-top
            class="clearfix profile_top"
            :text="userDates.name ? userDates.name : '未绑定'"
            :is-show-img="true"
          >
            <img src="~assets/img/default-user.png" alt="img" slot="image" />
          </list-top>
        </div>
        <ProflieBtnList />
        <button class="active-btn logout" @click="loginOut">注销</button>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import ListTop from "@/components/content/listTop/listTop";

import ProflieBtnList from "./childcomps/profileBtnList/profileBtnList";

import { MessageBox } from "mint-ui";

export default {
  name: "profile",
  data() {
    return {
      userDate: localStorage.getItem('userDate'),
      dialogVisible: true,
    };
  },
  computed: {
    userDates() {
      return JSON.parse(this.userDate)
    }
  },
  created() {
    // console.log(this.userDate);
  },
  methods: {
    loginOut() {
      MessageBox({
        title: "提示",
        message: "确定取消登录吗",
        showCancelButton: true,
      }).then((res) => {
        if (res == "confirm") {
          console.log(res);
          localStorage.clear();
          localStorage.setItem("isBinding", false);
          this.$router.push("/login");
        }
      });
    },
  },
  components: {
    Scroll,
    ListTop,
    ProflieBtnList,
  },
};
</script>

<style scoped lang="less">
#profile {
  height: 100vh;
}
.profile_top {
  flex-wrap: wrap;
  border-bottom: none;
  padding: 40px 0 30px 0;
  /deep/ .image {
    width: 65px;
    height: auto;
  }
  /deep/ p {
    width: 100%;
    padding: 10px 5px 0 5px;
  }
}
.profile_info {
  height: auto;
  width: 100%;
  background: url("../../assets/img/report-bg.png") no-repeat 0 0;
  background-size: 100% 100%;
}
.active-btn {
  width: 75px;
  height: 75px;
  background-color: #777;
  color: #fff;
  line-height: 75px;
  border: none;
  margin: 30px auto;
  display: block;
  border-radius: 50%;
}
</style>