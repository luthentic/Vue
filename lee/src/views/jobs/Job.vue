<template>
  <h1>JOBS</h1>
  <div v-for="job in jobs" :key="job.id">
    <router-link :to="{name:'Jobdetails', params:{id: job.id}}">
      <h2>{{job.title}}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs:[
        {title:'LEEE 1', id:1, details:'L1'},
        {title:'LEEE 2', id:2, details:'L2'},
        {title:'LEEE 3', id:3, details:'L3'}
      ]
    }
  },
}
</script>

<style>
  
</style>