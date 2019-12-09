const mackupbottomlistnumbel=(prevState=1,action)=>{
    let {type,payload}=action
    switch(type){
        case 'newmackupbottomlistnumbel':
            return payload
        case "oldmackupbottomlistnumbel":
            return prevState
            default:return prevState
    }
}
export default mackupbottomlistnumbel