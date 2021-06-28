<template>
  <div class="home">
    <input type="text" v-model="search">
    <p>search term - {{search}}</p>
    <div v-for="name in matchingNames" :key="name">{{name}}</div>
    
  </div>
  <router-view/>
</template>

<script>
import {ref,reactive, computed} from 'vue'
export default {
  setup() {
    const search = ref('')
    const names = ref(['AEE','BEE','CEE','DEE','FEE'])

    const matchingNames = computed((name)=>{
      return names.value.filter((name)=> name.includes(search.value))
    })

    return {names, search, matchingNames}
  }
  }
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
