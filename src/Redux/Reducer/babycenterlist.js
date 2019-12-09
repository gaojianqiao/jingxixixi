// babycenterlist
const babycenterlist=(preState=[],action)=>{
   let {type,payload}=action
   switch(type){
       case "addbabycenterlist":
           return [...preState,...payload]
        case "delbabycenterlist":
            return payload
            default:
                return preState
   } 
}
export default babycenterlist