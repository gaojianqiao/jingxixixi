function showHeader(){
    //
    
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

export {showHeader,hideHeader}