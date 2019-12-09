import Axios from 'axios'
function showHeader(){
    
    return {
        type:"showHeaderbar",
        payload:true 
    }
}

function hideHeader(){
    return {
        type:"hiddenHeaderbar",
        payload:false 
    }
}
function searchsomelist(current,text){
    return Axios.get(`http://www.mei.com/appapi/search/searchKey/v3?pageIndex=${current}&q=${text}&sort=&key=&searchKeyWord=${text}`).then(res=>{
        // console.log(res.data.products)
        return{
            type:"addsearchsomelist",
            payload:res.data.products
        }
    })
    
}
function blanklistabar(text){
    return Axios.get(`http://www.mei.com/appapi/search/searchKey/v3?pageIndex=1&q=${text}&sort=&key=&searchKeyWord=${text}`).then(res=>{
    //    console.log(res.data.searchBrandInfo)
    return{
            type:"addblanklistabar",
            payload:res.data.searchBrandInfo
        }
    })
    
}
function searchsometotalbel(current,text){
    return Axios.get(`http://www.mei.com/appapi/search/searchKey/v3?pageIndex=${current}&q=${text}&sort=&key=&searchKeyWord=${text}`).then(res=>{
    return {
        type:"newsearchsometotalbel",
        payload:res.data.totalPages
    }
    
    })
    }

export {searchsomelist,showHeader,hideHeader,blanklistabar,searchsometotalbel}