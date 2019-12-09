const babybottomlist=(prevState=[],action)=>{
    let {type,payload}=action
    switch(type){
        case "addbabybottomlist":
        return [...prevState,...payload]
        case "delbabybottomlist":
            return payload
            default:
         return prevState
    }
}
export default babybottomlist