import axios from "axios"

export function request(url) {
 const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    // home/multidata
    timeout:5000,
    params: {}
  })

  instance.interceptors.request.use(config=>{
    return config
  },err => console.log(err))

  instance.interceptors.response.use(res => {
    return res.data.data ? res.data.data : res
  },err => {
    console.log(err)
  })

  return instance(url);
}











// axios.defaults.baseURL = "http://123.207.32.32:8000"
// //单个请求
// axios({
//   url:"/home/multidata",
//   params:{    
//     type:123,
//     page:1
//   }
// }).then(res => {
//   console.log(res)
// })

// //多个请求
// axios.all([axios({
//   url:"/home/multidata",
// }),axios({
//   url:"/home/multidata",
//   params:{
//     type:'sell',
//     page:5
//   }
// })]).then(result => {
//   console.log(result[0])
//   console.log(result[1])
// })

