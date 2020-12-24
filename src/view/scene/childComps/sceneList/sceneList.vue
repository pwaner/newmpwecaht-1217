<template>
  <div class="sceneList">
    <div class="item-box" v-for="(itemm, index) in userList" :key="index">
      <noti-button>
        <div class="flex-1 item-adders" slot="left">
          {{ itemm.name }}({{ changeType(itemm.crType) }})
        </div>
        <div class="item-button" slot="right">
          <noti-button-item
            @subscrible="clickScene(itemm)"
            test="切换"
            :isShow="true"
          >
            <img src="~assets/img/scene/modify.png" alt="img" slot="img" />
          </noti-button-item>
        </div>
      </noti-button>
    </div>
  </div>
</template>

<script>
import NotiButton from "components/common/notiButton/notiButton";
import NotiButtonItem from "components/common/notiButton/notiButtonItem";
import { Toast, MessageBox } from "mint-ui";

import { convert2crType } from "@/common/characterType";
import { changeScene } from "network/scene/sceneData";

export default {
  name: "sceneList",
  components: {
    NotiButton,
    NotiButtonItem,
  },
  data() {
    return {
      userList: [],
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    //切换场景
    clickScene(item) {
      MessageBox({
        title: "提示",
        message: "是否切换到当前场景?",
        showCancelButton: true,
      }).then((res) => {
        if (res !== "cancel") {
          console.log("111");
          changeScene(item)
            .then((res) => {
              if (res !== "cancel") {
                Toast("场景切换成功");
                localStorage.setItem("userInfo", JSON.stringify(res.rows));
                this.$router.push(localStorage.getItem('beforeUrl'))
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
    changeType(type) {
      return convert2crType(type);
    },
    //从本地获取场景列表
    getUserList() {
      let vuserInfo = localStorage.getItem("userDate");
      if (vuserInfo !== undefined) {
        let userinfo = JSON.parse(vuserInfo);
        if (userinfo !== undefined || userinfo[0] !== undefined) {
          userinfo.scenes.map((item) => {
            this.userList.push(item);
          });
        }
        console.log(this.userList);
      }
    },
  },
};
</script>

<style scoped>
.item-adders {
  font-size: 15px;
  line-height: 20px;
}
.item-button {
  min-width: 70px;
  display: flex;
  justify-content: flex-end;
}
</style>