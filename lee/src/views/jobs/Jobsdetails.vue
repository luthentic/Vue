<template>
  <div>
    <h1>Job detail</h1>
    <p>job id is:{{id}}</p>
  </div>
</template>

<script>
export default {
  props:['id'],
  data() {
    return {
      // id: this.$route.params.id
    }
  },
}
</script>

<style>

</style>