<template>
  <div class="subsrcList">
    <div class="item-box" v-for="(itemm, index) in list" :key="index">
      <noti-button @click.native="btnClick(index)">
        <div class="flex-1 item-adders" slot="left">
          {{ itemm.location }}
        </div>
        <div class="item-button" slot="right">
          <noti-button-item
            @subscrible="delEstateInfo(itemm)"
            test="取消"
            :isShow="true"
          >
            <img src="~assets/img/subsrcibe/delete.png" alt="img" slot="img" />
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

import resquert from "network/subscrible/subscribeApi";
export default {
  name: "subsrcList",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      subList: [],
    };
  },
  components: {
    NotiButton,
    NotiButtonItem,
  },
  methods: {
    //TODO  点击跳转到对应的物业详情
    btnClick() {
      // console.log(e);
    },
    //取消订阅
    delEstateInfo(item) {
      console.log(item);
      var that = this;
      MessageBox({
        title: "提示",
        message: "确认取消该订阅吗?",
        showCancelButton: true,
      }).then((res) => {
        if (res !== "cancel") {
          resquert.cancelSubscribe(item.rsId).then((res) => {
            console.log(res);
            that.getSubscribleList();
            Toast("成功取消该订阅");
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.item-button {
  min-width: 70px;
  display: flex;
  justify-content: flex-end;
}
</style>