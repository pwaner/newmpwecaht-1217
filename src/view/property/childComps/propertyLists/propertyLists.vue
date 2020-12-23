<template>
  <div class="propertyL">
    <div class="item-box" v-for="(itemm, index) in items" :key="index">
      <noti-button>
        <div class="flex-1 item-adders" slot="left">
          {{ itemm.address }}<br />{{ getNamePS(itemm) }}
        </div>
        <div slot="right" class="item-bottom">
          <noti-button-item
            @subscrible="goEstateInfo(itemm)"
            test="详细"
            :isShow="true"
          >
            <img src="~assets/img/property/detail.png" alt="img" slot="img" />
          </noti-button-item>
          <noti-button-item
            @subscrible="subscrible(itemm)"
            test="订阅"
            :isShow="true"
            v-preventReClick="3000"
          >
            <img
              src="~assets/img/property/subscribe.png"
              alt="img"
              slot="img"
            />
          </noti-button-item>
        </div>
      </noti-button>
    </div>
  </div>
</template>

<script>
import NotiButton from "components/common/notiButton/notiButton";
import NotiButtonItem from "components/common/notiButton/notiButtonItem";
import { Toast } from "mint-ui";

import propertyAxios from "network/propertyList";
import { addSubscrible, getSub } from "network/subscrible/getSubscrible";

export default {
  name: "propertyList",
  props: {
    items: {
      type: [Array, Object],
      default: () => {
        return [] || {};
      },
    },
    pageNum: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      isDisable: false,
    };
  },
  components: {
    NotiButton,
    NotiButtonItem,
  },
  methods: {
    getNamePS: function (record) {
      var name = record.name;
      var postScript = record.postScript || "";
      if (postScript !== "") postScript = "(" + postScript + ")";
      return name + postScript;
    },
    /**
     * 跳转到物业基本信息表, 并缓存当前物业的信息
     */
    goEstateInfo: function (estate) {
      var data;
      var note;
      if (estate.note !== undefined) {
        note = estate.note;
      }
      data = {
        ezEid: estate.eid,
        name: estate.name,
        address: estate.address,
        postScript: estate.postScript,
        note,
      };
      // 将当前物业信息存放到localStorage
      localStorage.setItem("estate", JSON.stringify(data));
      this.$store.commit("updateCurrentEstate", data);
      // 跳转
      this.$router.push({
        name: "propertyDetail",
      });
    },
    getEstateList: function () {
      // 直接获取该场景下的物业列表,scene数组中的值
      var param = "page=1&start=0&limit=" + this.pageNum;
      propertyAxios
        .loadEstateInfo(param)
        .then((res) => {
          //this.items = res.rows
          localStorage.setItem("estates", JSON.stringify(res.rows));
        })
        .catch((error) => {
          Toast(error.message);
        });
    },
    //新增订阅
    subscrible(estate) {
      getSub().then((res) => {
        this.isDisable = true
        const itemd = res.rows;
        if (itemd.some((e) => e.ezEid == estate.ezEid)) {
          Toast("请勿重复订阅!!");
          return;
        } else {
          addSubscrible(estate)
            .then((res) => {
              console.log(res);
              this.$store.commit("updateEstates", res.rows);
              Toast("订阅" + estate.name + "成功");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
    },
    // subscrible: function (estate) {
    //   var param = [
    //     {
    //       property: "estateId",
    //       value: estate.eid,
    //       exactMatch: true,
    //     },
    //   ];
    //   var filter = "filter=" + encodeURIComponent(JSON.stringify(param));
    //   propertyAxios
    //     .getSubscrible(filter)
    //     .then((res) => {
    //       const itemd = res.rows;
    //       if (itemd === undefined || itemd[0] === undefined) {
    //         return;
    //       }
    //       const item = itemd[0];
    //       let data = {};
    //       // todo hzb deviceFlag等根据item权限及弹窜选择设置
    //       if (estate.crId === undefined) {
    //         data = {
    //           ad1: item.ad1,
    //           ad2: item.ad2,
    //           ad3: item.ad3,
    //           ad4: item.ad4,
    //           ad5: item.ad5,
    //           appEstateFlag: 0,
    //           deviceFlag: 1,
    //           estateId: item.estateId,
    //           reportFlag: 0,
    //         };
    //       } else {
    //         data = {
    //           relationId: estate.crId,
    //           ad1: item.ad1,
    //           ad2: item.ad2,
    //           ad3: item.ad3,
    //           ad4: item.ad4,
    //           ad5: item.ad5,
    //           appEstateFlag: 0,
    //           deviceFlag: 1,
    //           estateId: item.estateId,
    //           reportFlag: 0,
    //         };
    //       }
    //       propertyAxios
    //         .postSubscrible(data)
    //         .then((res) => {
    //           console.log(res);
    //           this.$store.commit("updateEstates", res.rows);
    //           Toast("订阅" + estate.name + "成功");
    //         })
    //         .catch((error) => {
    //           Toast(error.message);
    //         });
    //     })
    //     .catch((error) => {
    //       Toast(error.message);
    //     });
    // },
  },
};
</script>

<style scoped lang="less">
.item-adders {
  line-height: 20px;
  font-size: 14px;
}
.item-adders {
  width: 53%;
}
.item-bottom {
  width: 47%;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  img {
    width: 25px;
    height: auto;
  }
}
.stopClick {
  pointer-events: none;
  cursor: default;
  opacity: 0.6;
}
</style>