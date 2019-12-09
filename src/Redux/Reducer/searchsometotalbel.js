const searchsometotalbel=(prevState=1,action)=>{
    let {type,payload}=action
    switch(type){
        case 'newsearchsometotalbel':
            return payload
        default:return prevState
    }
}
export default searchsometotalbel