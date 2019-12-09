import Axios from 'axios'
import {guid,nowtime} from "../../../Bagpack/Random"
function bottomlist(current){
return Axios.get(`http://www.mei.com/appapi/silo/eventForH5?categoryId=cosmetics&pageIndex=${current}&timestamp=${nowtime()}&summary=${guid()}&platform_code=H5`).then(res=>{
return {
    type:"addmackupbottomlist",
    payload:res.data.eventList

}

})
}
function bottomlistnumbel(){
    return Axios.get(`http://www.mei.com/appapi/silo/eventForH5?categoryId=cosmetics&pageIndex=1&timestamp=${nowtime()}&summary=${guid()}&platform_code=H5`).then(res=>{
    return {
        type:"newmackupbottomlistnumbel",
        payload:res.data.totalPages
    }
    
    })
    }
function centerlist(){
    return Axios.get(`http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000003&ids=2042000100000000431&timestamp=${nowtime()}&summary=${guid()}&platform_code=H5`).then(res=>{
        return {
            type:"addmackupcenterlist",
            payload:res.data.resultList[0].data
        
        }  
    })
}


export {bottomlist,centerlist,bottomlistnumbel}