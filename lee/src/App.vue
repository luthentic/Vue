<template>
  <div class="home">
    <input type="text" v-model="search">
    <p>search term - {{search}}</p>
    <div v-for="name in matchingNames" :key="name">{{name}}</div>
    <button @click="handleStop">STOp</button>
  </div>
  <router-view/>
</template>

<script>
import {ref,reactive, computed, watch, watchEffect} from 'vue'
export default {
  setup() {
    const search = ref('')
    const names = ref(['AEE','BEE','CEE','DEE','FEE'])

    const stopWatch = watch(search,()=>{
      console.log('watch function ran')
    })

    const stopEffect = watchEffect(()=>{
      console.log('watchEffect function ran',search.value)
    })

    const matchingNames = computed((name)=>{
      return names.value.filter((name)=> name.includes(search.value))
    })
    
    const handleStop = () =>{
      stopWatch()
      stopEffect()
    }

    return {names, search, matchingNames,handleStop}
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
