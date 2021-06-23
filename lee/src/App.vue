<template>
  <div>
    <h1>{{title}}</h1>  
    <div v-if="showModal">
      <Modal theme="sale" @close="toggleModal">
        <template v-slot:links>
          <a href="!">Sign up</a>
          <a href="#">More Info</a>
        </template>
        <h1>LEE WELCOME</h1>
        <p>Grab Your hands</p>
      </Modal>
    </div> 
  </div>
  <button @click="toggleModal">Open Modal</button>
</template>


<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components:{Modal},
  data(){
    return {
      title:'LEE VUE PAGE',
      header:"SIGN UP FOR THE GIVEAWAY",
      text:"LEEEEEE",
      showModal:false
    }
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    }
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
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}

</style>
