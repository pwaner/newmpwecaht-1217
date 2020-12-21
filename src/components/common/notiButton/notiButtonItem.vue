<template>
  <div class="notiButtonItem" v-if="isShow" @click="subscrible">
      <slot name="img"></slot>
    <p>{{ test }}</p>
  </div>
</template>

<script>
export default {
  name: 'notiButtonItem',
  props: {
    item: {
      type: [Object, Array],
      default: () => {
        return [] || {}
      }
    },
    isShow: {
      type: Boolean,
      default: false
    },
    test: {
      type: String,
      default: ''
    }
  },
  methods: {
    subscrible() {
      this.$emit('subscrible')
    }
  }
}
</script>

<style scoped lang="less">
    .notiButtonItem{
        display: flex;
        align-items: center;
        padding: 3px 0;
        img{
            width: 25px;
            height: auto;
        }
        p{
            font-size: 14px;
            padding: 0 5px;
        }
    }
</style>