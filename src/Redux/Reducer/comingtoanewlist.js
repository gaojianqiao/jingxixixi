const comingtoanewlist=(prevState=[],action)=>{
    let {type,payload}=action
    switch(type){
        case "addcomingtoanewlist":
            return payload
        default :
        return prevState
    }
}
export default comingtoanewlist