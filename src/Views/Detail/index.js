import React,{Component} from 'react'
import Axios from '_axios@0.19.0@axios'
import {connect} from 'react-redux'
import {hideHeader,showHeader} from "./actionCreator"
// import {guid,nowtime} from "../../Bagpack/Random"
class Detail extends Component{
    state={
        a:null
    }
    
    UNSAFE_componentWillMount(){
        // console.log(this.props.zhuangtai)
        this.props.hideHeader()

 
        Axios.get(`http://www.mei.com/appapi/product/detail/v3?categoryId=2040204090000007593&productId=2021202199000008444&platform_code=H5&timestamp=1574775620767&summary=afc458bbb27ecc342078c1647ddf292d`).then(res=>{
            // console.log(res.data.infos)
            this.setState({
                
                a:res.data.infos
            })
        })


        // Axios.get(`http://www.mei.com/appapi/product/detail/v3?categoryId=${window.localStorage.getItem("categoryId")}&productId=${this.props.match.params.id}&platform_code=H5&timestamp=${nowtime()}&summary=${guid()}`).then(res=>{
        //     // console.log(res.data.infos)
        //     this.setState({
                
        //         a:res.data.infos
        //     })
        // })
        

    }
    UNSAFE_componentDidMount(){
        // console.log(this.props.zhuangtai)
    }
    render(){
        return <div>
{   this.state.a?
    
        <div  onClick={()=>this.godetail(this.state.a.brandLogoId)}>
<img src={ this.state.a.packageURL} alt={this.state.a.name}/>
        <p>{this.state.a.name}</p>
        </div>
    :
    null
}


        </div>
    }
    
 
    componentWillUnmount(){
        this.props.showHeader()
        
}

}
const agencydispatch={
    hideHeader,showHeader
}
 const monitorSubscribe=(state)=>{
//    console.log(state.a)
return{
zhuangtai:state.a
}
}
export default connect(monitorSubscribe,agencydispatch)(Detail)