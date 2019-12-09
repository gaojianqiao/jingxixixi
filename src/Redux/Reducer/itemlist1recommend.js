const itemlist1Recommend=(prevState=[],action)=>{
    let{type,payload}=action
    switch(type){
        case "AdditemlistRecommend1":
            return {AddRecommend1:[...prevState,...payload]}
        case "DelitemlistRecommend1":
            return  {AddRecommend1:prevState}
        default:
            return prevState
    }
}
export default itemlist1Recommend