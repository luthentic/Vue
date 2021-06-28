<template>
  <div class="home">
    
    <p>{{aaa.name}} - {{aaa.age}}</p>
    <button @click="updateClick">Click</button>

  </div>
  <router-view/>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
  setup() {
    
    const p = ref(null)

    let name =  ref('LEE')
    let age = ref(30)
    let aaa = reactive({name:'LEE4', age:25})

    const handleClick = () =>{
      name.value = 'LEE2'
      age.value = 'Heeelllo  LEE2'
    }
    const updateClick = () =>{
      aaa.age = 40
    }

    return {name,age, handleClick, p,aaa, updateClick}
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
