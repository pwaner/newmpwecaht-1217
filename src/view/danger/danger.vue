<template>
  <div id="danger">
    <scroll ref="scroll" :pull-up-load="true" @pullingUp="loadMore" :data="items">
      <div>
        <list-top class="clearfix" text="警情信息" :is-show-img="true">
          <img src="~assets/img/logo.png" alt="img" slot="image" />
        </list-top>
        <div v-for="(item, index) in items" :key="index">
          <danger-list :list="item" />
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import ListTop from "@/components/content/listTop/listTop";
import DangerList from "./childComps/dangerList/dangerList"

import request from 'network/danger'

export default {
  name: 'danger',
   components: {
    Scroll,
    ListTop,
    DangerList,
  },
  data() {
    return {
      items: [],
      appId: this.$store.state.appId,
      openId: this.$store.state.openId,
    }
  },
  created() {
    this.getDangerList()
    
  },
  methods: {
    getDangerList() {
      request.getdangerList(this.appId, this.openId)
    },
    loadMore() {

    }
  }
}
</script>

<style>

</style>