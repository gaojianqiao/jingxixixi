//Mackupbottomlist.js
const womenbottomlist=(prevState=[],action)=>{
    let {type,payload}=action
    switch(type){
        case "addwomenbottomlist":
        return [...prevState,...payload]
        case "delwomenbottomlist":
            return payload
            default:
         return prevState
    }
}
export default womenbottomlist