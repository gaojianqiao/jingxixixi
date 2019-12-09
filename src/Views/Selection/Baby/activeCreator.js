import Axios from 'axios'
import {guid,nowtime} from "../../../Bagpack/Random"
function bottomlist(current){
    // console.log(current)
return Axios.get(`http://www.mei.com/appapi/silo/eventForH5?categoryId=kids&pageIndex=${current}&timestamp=${nowtime()}&summary=${guid()}&platform_code=H5`).then(res=>{
return {
    type:"addbabybottomlist",
    payload:res.data.eventList

}

})
}
function centerlist(){
    return Axios.get(`http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000005&ids=2120000100000000146&timestamp=${nowtime()}&summary=${guid()}&platform_code=H5`).then(res=>{
        // console.log(res.data.resultList[0].data)
    return {
            type:"addbabycenterlist",
            payload:res.data.resultList[0].data
        }
    })
}

export {bottomlist,centerlist}