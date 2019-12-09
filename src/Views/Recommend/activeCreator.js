import Axios from "axios"
import {guid,nowtime} from "../../Bagpack/Random"
function getrecommendcenter1(){
    return Axios.get(`http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=${nowtime()}&summary=${guid()}&platform_code=H5`).then(res=>{
        // console.log(res.data.eventList)
            return{
                type:"AdditemlistRecommend1",
                payload:res.data.lists[0].events
            }
    })
}
function getrecommendcenter2(){
    return Axios.get(`http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=${nowtime()}&summary=${guid()}&platform_code=H5`).then(res=>{
        // console.log(res.data.eventList)
            return{
                type:"AdditemlistRecommend2",
                payload:res.data.lists[1].events
            }
    })
}
export {getrecommendcenter1,getrecommendcenter2}

// import Axios from "axios"
// import {guid,nowtime} from "../../Bagpack/Random"
// function getrecommendcenter(){
//     return Axios.get(`http://www.mei.com/appapi/silo/eventForH5?categoryId=women&pageIndex=1&timestamp=${nowtime()}&summary=${guid()}&platform_code=H5`).then(res=>{
//         // console.log(res.data.eventList)
//             return{
//                 type:"Additemlist",
//                 payload:res.data.eventList
//             }
//     })
// }
// export {getrecommendcenter}