import axios from "axios"

axios.defaults.baseURL = "http://123.207.32.32:8000"
//单个请求
axios({
  url:"/home/multidata",
  params:{    
    type:123,
    page:1
  }
}).then(res => {
  console.log(res)
})

//多个请求
axios.all([axios({
  url:"/home/multidata",
}),axios({
  url:"/home/multidata",
  params:{
    type:'sell',
    page:5
  }
})]).then(result => {
  console.log(result[0])
  console.log(result[1])
})