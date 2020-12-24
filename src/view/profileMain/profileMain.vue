<template>
  <div class="propertyMain">
    <scroll ref="scroll" :pull-up-load="true">
      <div>
        <list-top class="clearfix" text="账户详情" :is-show-img="false" />
        <noti-button v-if="strUserData.name">
          <div class="flex-1 item-adders" slot="left">注册账号</div>
          <div class="flex-1 item-adders" slot="right">{{strUserData.name}}</div>
        </noti-button>
        <noti-button v-if="strUserData.mobile">
          <div class="flex-1 item-adders" slot="left">注册手机</div>
          <div class="flex-1 item-adders" slot="right">{{strUserData.mobile}}</div>
        </noti-button>
        <no-data :items="strUserData.toString().split() || []" />
      </div>
    </scroll>
  </div>
</template> 

<script>
import Scroll from "components/common/scroll/Scroll";
import ListTop from "@/components/content/listTop/listTop";
import NotiButton from "components/common/notiButton/notiButton";
import NoData from "components/common/NoData";

export default {
  name: "propertyMain",
  data() {
    return {
      userData: {},
    };
  },
  components: {
    Scroll,
    ListTop,
    NotiButton,
    NoData
  },
  created() {
    this.getUserInfo();
  },
  computed: {
    strUserData() {
      return JSON.parse(this.userData)
    }
  },
  methods: {
    getUserInfo() {
      this.userData = localStorage.getItem('userDate');
      console.log(this.userData);
    },
  },
};
</script>

<style scoped>
.propertyMain{
  height: 100vh;
}
</style>