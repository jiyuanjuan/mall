import axios from "axios"

//设置全局默认baseURL
axios.defaults.baseURL = "http://123.207.32.32:8000"
//单个请求
axios({
  // baseURL:"http://123.207.32.32:8000",
  url:"/home/multidata",
  params:{    //相当于http://123.207.32.32:8000/home/multidata?type=123&page=1
    type:123,
    page:1
  }
}).then(res => {
  console.log(res)
})

//多个请求
axios.all([axios({
    // baseURL:"http://123.207.32.32:8000",
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