const Manbottomlist=(prevState=[],action)=>{
    let {type,payload}=action
    switch(type){
        case "addmanbottomlist":
        return [...prevState,...payload]
        case "delmanbottomlist":
            return payload
            default:
         return prevState
    }
}
export default Manbottomlist