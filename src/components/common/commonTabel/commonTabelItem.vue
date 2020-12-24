<template>
  <tr>
    <td>{{ text }}</td>
    <td>{{ value }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="less">
tr {
  width: 100%;
  display: flex;
  border: 1px solid #d6cfcf;
  border-bottom: none;
  // align-items: center;
  td {
    display: flex;
    align-items: center;
    min-height: 45px;
    line-height: 20px;
    padding: 0 10px;
    font-size: 14px;
  }
  td:first-child {
    background-color: #e0e0e1;
    flex: 1;
  }
  td:nth-child(2) {
    flex: 2;
  }
}
tr:last-child {
  border-bottom: 1px solid #d6cfcf;
}
</style>