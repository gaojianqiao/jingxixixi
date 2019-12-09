// searchhotlist.js
const searchhotlist=(prevState=[],action)=>{
    let {type,payload}=action
    switch(type){
        case "gethotlist":
        return payload
        default:return prevState
    }
}
export default searchhotlist