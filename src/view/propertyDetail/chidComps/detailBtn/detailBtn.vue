<template>
  <btn-list class="item_detail">
    <btn-list-item link="/propertySurvey">
      <img src="~assets/img/property/surface.png" alt="" slot="icon" />
      <div slot="text">物业调查表</div>
    </btn-list-item>
  </btn-list>
</template>

<script>
import BtnList from "common/btnList/btnList";
import BtnListItem from "common/btnList/btnListItem";
export default {
  data() {
    return {};
  },
  components: {
    BtnList,
    BtnListItem,
  },
};
</script>

<style scoped>
.item_detail{
  justify-content: center!important;
}
</style>