<template>
  <p>{{userData}}</p>

</template>

<script>
export default {
  name: 'profile',
  data() {
    return {
      userData: this.$store.state.userData
    }
  },
  created() {
    setTimeout(() => {this.setUser()}, 1000)
  },
  methods: {
    setUser() {
      console.log(this.$store.state.userData);
    }
  }
}
</script>

<style>

</style>