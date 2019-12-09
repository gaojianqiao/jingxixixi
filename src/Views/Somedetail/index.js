import React,{Component} from 'react'
import Somebar from '../../Bagpack/somebar'
import Axios from 'axios'
import {connect} from 'react-redux' 
import {showHeader,hideHeader} from './actionCreator'
class Somedetail extends Component{
    UNSAFE_componentWillMount(){
this.props.hideHeader()
        Axios.get(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=2121005100000002752&key=&sort=&timestamp=1575595128103&summary=4198c7f213ecdc0f4a3384049b008c75&platform_code=H5`).then(res=>{
            this.setState({
                statelist:res.data.products
            })
        })
    }
    state={
        getid:null,
        statelist:null
    }
    render(){
        return<div>
            <ul>
                <li></li>
            </ul>
            {this.state.statelist?
            <Somebar list={this.state.statelist}/>
            :null

            }

Somedetail
        </div>
    }
 
    // UNSAFE_componentWillMount(){
    //     console.log(this.props.match.params.id)
    // }
    // UNSAFE_componentUnmount(){
    //     
    // }
    UNSAFE_componentWillUnmount(){
        this.props.showHeader()
    }
}
const   agencydispatch={
    hideHeader,showHeader
}
const   agencysubscribe=(state)=>{
    return {

    }
}
export default connect(null,agencydispatch)(Somedetail)