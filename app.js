const app = Vue.createApp({
  data(){
    return{
      showbooks:true,
      title:'The Final',
      author:'LEE',
      age:25
    }
  },
  methods: {
    toggleShowBooks(){
      this.showbooks = !this.showbooks
    }
  },
})

app.mount('#app')