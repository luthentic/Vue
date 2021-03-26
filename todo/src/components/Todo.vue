<template >
  <div>
    <input type="checkbox" :checked="todo.check">
    <span class="ml-3">{{ todo.text}}</span>
  </div>
</template>

<script>
  export default{
    props:{
      todo:{
        type: Object,
        required: true
      }
    }

  }
</script>

<style>

</style>
