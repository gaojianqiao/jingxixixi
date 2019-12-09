// searchhotlist.js
const searchsomelist=(prevState=[],action)=>{
    let {type,payload}=action
    switch(type){
        case "addsearchsomelist":
        return [...prevState,...payload]
        case "delsearchsomelist":
        return prevState
        default:return prevState
    }
}
export default searchsomelist