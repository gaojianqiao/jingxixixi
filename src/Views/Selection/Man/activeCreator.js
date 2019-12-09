import Axios from 'axios'
import {guid,nowtime} from "../../../Bagpack/Random"
function bottomlist(){
return Axios.get(`http://www.mei.com/appapi/silo/eventForH5?categoryId=men&pageIndex=1&timestamp=${nowtime()}&summary=${guid()}&platform_code=H5`).then(res=>{
return {
    type:"addmanbottomlist",
    payload:res.data.eventList

}

})
}

export {bottomlist}