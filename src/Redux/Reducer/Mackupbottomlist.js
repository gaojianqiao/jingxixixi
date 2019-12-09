//Mackupbottomlist.js
const Mackupbottomlist=(prevState=[],action)=>{
    let {type,payload}=action
    switch(type){
        case "addmackupbottomlist":
        return [...prevState,...payload]
        case "delmackupbottomlist":
            return payload
            default:
         return prevState
    }
}
export default Mackupbottomlist