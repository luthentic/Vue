<template>
  <div>
    <h1>{{title}}</h1>  
    <teleport to='.modals'  v-if="showModal">
      <Modal theme="sale" @close="toggleModal">
        <template v-slot:links>
          <a href="!">Sign up</a>
          <a href="#">More Info</a>
        </template>
        <h1>LEE WELCOME</h1>
        <p>Grab Your hands</p>
      </Modal>
    </teleport>
    <teleport to='.modals' v-if="showModal2">
      <Modal theme="sale" @close="toggleModal2">
        <h1>LEE WELCOME222</h1>
        <p>Grab Your hands22</p>
      </Modal>
    </teleport>  
  </div>
  <button @click="toggleModal">Open Modal</button>
  <button @click='toggleModal2'>Open Modal2</button>
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
      showModal:false,
      showModal2:false
    }
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModal2(){
      this.showModal2 = !this.showModal2
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
