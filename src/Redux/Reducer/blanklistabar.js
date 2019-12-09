const blanklistabar=(prevState=[],action)=>{
    let {type,payload}=action
    switch(type){
        case "addblanklistabar":
        return payload
        default :
        return prevState
    }
    }
    export default blanklistabar