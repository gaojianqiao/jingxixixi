import Axios from 'axios'
import {guid,nowtime} from '../../Bagpack/Random'
// function showHeader(){
//     //
    
//     return {
//         type:"showHeaderbar",
//         payload:true
//     }
// }

// function hideHeader(){
//     return {
//         type:"hiddenHeaderbar",
//         payload:false
//     }
// }
function commingtoanewlist(){
   return Axios.get(`http://www.mei.com/appapi/upcoming/index/v3?platform_code=H5&timestamp=${nowtime()}&summary=${guid()}`).then(res=>{

   return {
            type:"addcomingtoanewlist",
            payload:res.data
        }
    })

}
function commingtoanewlist1(){
  return  Axios.get(`http://www.mei.com/appapi/upcoming/index/v3?platform_code=H5&timestamp=${nowtime()}&summary=${guid()}`).then(res=>{
      if(res.data.lists.length!==0){
        return {
            type:"addcomingtoanewlist1",
            payload:res.data.lists[0]
        }
      }else{
        return {
            type:"delcomingtoanewlist1",
            payload: null
        }
      }
       
    })

}
export {commingtoanewlist,commingtoanewlist1}