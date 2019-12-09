const itemlist2Recommend=(prevState=[],action)=>{
    let{type,payload}=action
    switch(type){
        case "AdditemlistRecommend2":
            return {AddRecommend2:[...prevState,...payload]}
        case "DelitemlistRecommend2":
            return  {AddRecommend2:prevState}
        default:
            return prevState
    }
}
export default itemlist2Recommend