
const app = Vue.createApp({
  data(){
    return{
      url:'https://www.google.com',
      showbooks:true,
      books:[
        {title:'LEE1', author:'LLEE1', img:'/images/1.png'},
        {title:'LEE2', author:'LLEE2', img:'/images/2.png'},
        {title:'LEE3', author:'LLEE3', img:'/images/3.png'}
      ],
      x:0,
      y:0
    }
  },
  methods: {
    toggleShowBooks(){
      this.showbooks = !this.showbooks
    },
    handleEvent(e,data){
      console.log(e, e.type)
      if(data){
        console.log(data)
      }
    },
    handleMousemove(e){
      this.x = e.offsetX
      this.y = e.offsetY
    }
  },
})

app.mount('#app')