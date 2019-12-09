//overseasbottomlist.js
const overseasbottomlist=(prevState=[],action)=>{
    let{type,payload}=action
    switch (type){
        case "addoverseasbottomlist":
        return [...prevState,...payload]
        case "deloverseasbottomlist":
            return payload
            default:
         return prevState
    }
}
export default overseasbottomlist