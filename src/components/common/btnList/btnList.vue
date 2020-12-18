<template>
  <div id="btnList">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "btnList",
};
</script>

<style>
#btnList {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
}
</style>