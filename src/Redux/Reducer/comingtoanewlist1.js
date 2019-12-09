const comingtoanewlist1=(prevState=[],action)=>{
    let {type,payload}=action
    switch(type){
        case "addcomingtoanewlist1":
            return payload
        case "delcomingtoanewlist1":
                return payload
            default :
        return prevState
    }
}
export default comingtoanewlist1