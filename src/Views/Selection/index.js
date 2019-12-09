import React,{Component} from 'react'
// import Selects from '../../Components/Headerbar'
// import style from './index.module.scss'

class Selection extends Component{
    state={
        getid:null
    }
    render(){
        return<div>
            {/* <Selects/> */}
            {this.props.children}
        </div>
    }
    UNSAFE_componentWillMount(){
        // console.log(this.props.match.params.id)
    }
}
export default Selection





