//Householdbottomlist.js
const Householdbottomlist=(prevState=[],action)=>{
    let {type,payload}=action
    switch(type){
        case "addhouseholdbottomlist":
        return [...prevState,...payload]
        case "delhouseholdbottomlist":
            return payload
            default:
         return prevState
    }
}
export default Householdbottomlist