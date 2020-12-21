<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "content/mainTabBar/mainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
  mounted() {
    window.addEventListener("beforeunload", () => this.beforeunloadFn());
    window.addEventListener("unload", () => this.unloadFn());
  },
  methods: {
    unloadFn() {
      this._gap_time = new Date().getTime() - this._beforeUnload_time;
      if (this._gap_time <= 5) {
        // localStorage.removeItem("isBinding");
      }
    },
    beforeunloadFn() {
      this._beforeUnload_time = new Date().getTime();
    },
  },
  destroyed() {
    window.removeEventListener("beforeunload", () => this.beforeunloadFn());
    window.removeEventListener("unload", () => this.unloadFn());
  },
};
</script>

<style>
@import "assets/css/base.css";

#app {
  position: relative;
  background: url("./assets/img/bg-logo.png");
  background-color: var(--color-background);
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
}
</style>
