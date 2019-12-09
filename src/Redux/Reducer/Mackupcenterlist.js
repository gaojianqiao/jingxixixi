// Mackupcenterlist.js
const Mackupcenterlist=(prevState=[],action)=>{
    let {type,payload}=action
    switch(type){
        case "addmackupcenterlist":
            return [...prevState,...payload]
        case "delmackupcenterlist":
                return payload
         default:return prevState
    }
}
export default Mackupcenterlist