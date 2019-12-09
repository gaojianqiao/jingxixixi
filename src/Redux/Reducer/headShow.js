const headerbarisShow=(prevState=true,action)=>{
let {type,payload}=action
switch(type){
    case "showHeaderbar":
    return payload
    case "hiddenHeaderbar":
        return payload
    default :
    return prevState
}
}
export default headerbarisShow