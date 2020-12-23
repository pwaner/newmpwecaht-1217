<template>
  <div class="scene">
    <scroll ref="scroll" :pull-up-load="true">
      <div>
        <list-top class="clearfix" text="场景列表" :is-show-img="false" />
        <scene-list />
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import ListTop from "@/components/content/listTop/listTop";
import sceneList from "./childComps/sceneList/sceneList";

export default {
  name: "scene",
  components: {
    sceneList,
    Scroll,
    ListTop,
  },
};
</script>

<style scoped>
.scene {
  height: 100vh;
}
</style>