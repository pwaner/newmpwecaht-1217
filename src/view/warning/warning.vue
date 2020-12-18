<template>
  <div id="warning">
    <scroll
      class="content"
      ref="scroll"
      :pull-up-load="true"
    >
      <div>
        <list-top class="clearfix" text="告警信息" :is-show-img="true">
          <img src="~assets/img/logo.png" alt="img" slot="image" />
        </list-top>
        <change-btn @clickBtn="goScenes" centerText="切换场景" />

      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import ListTop from "@/components/content/listTop/listTop";
import ChangeBtn from "components/common/changeBtn/changeBtn";

import mineInfoService from 'services/mineInfoService'
import {Toast} from 'mint-ui'

export default {
  name: "warning",
  components: {
    Scroll,
    ListTop,
    ChangeBtn
  },
  data() {
    return {
      items: []
    }
  },
  created() {
    this.getAlamList()
  },
  methods: {
    goScenes: function () {
      // this.$router.go('/mineProperty')
      this.$router.push('/mineProperty')
    },
    getAlamList: function () {
      // http://test.zayutech.com/api/desktop/devices/alarms?_dc=1569379641412&page=1&start=0&limit=20
      var param = 'page=1&start=0&limit=40'
      mineInfoService.getAlamList(param).then(res => {
        console.log(res);
        this.items = res.rows
      }).catch(error => {
        Toast(error.message)
      })
    }
  }
};
</script>

<style>
</style>