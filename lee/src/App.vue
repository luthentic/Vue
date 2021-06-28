<template>
  <div class="home">
    <p ref="p">MY NAME IS {{name}} and my age is {{age}}</p>
    <button @click="handleClick">Clcik</button>
    <button @click="age++">add 1 to AGE</button>
    <input type="text" v-model="name">
  </div>
  <router-view/>
</template>

<script>
import {ref} from 'vue'
export default {
  setup() {
    
    const p = ref(null)

    let name =  ref('LEE')
    let age = ref(30)

    const handleClick = () =>{
      name.value = 'LEE2'
      age.value = 'Heeelllo  LEE2'
    }

    return {name,age, handleClick, p}
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
