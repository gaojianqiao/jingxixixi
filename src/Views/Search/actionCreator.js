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
function hotlist(){
    return Axios.get(`http://www.mei.com/appapi/search/searchFind/v3`).then(res=>{
        return{
            type:"gethotlist",
            payload:res.data.searchFindList
        }
    })
    
}
export {showHeader,hideHeader,hotlist}