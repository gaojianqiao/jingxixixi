import Headimgbar from '../../../Bagpack/Headimgbar'
import React, { Component } from 'react'
import Itemabr from '../../../Bagpack/Itembar'
import {connect} from 'react-redux'
import {bottomlist} from './activeCreator'
 class Man extends Component {
  UNSAFE_componentWillMount(){

    if(this.props.manbottomlist.length===0){
      this.props.bottomlist()
    }
   
  }
  render() {
    return <div>
    
        <Headimgbar/>
        {
          this.props.manbottomlist?
<Itemabr listbottom={this.props.manbottomlist} path='//Selection/Baby'/>
:null
        }
    </div>
  }
}
const dispath={
  bottomlist
}
const subscribe=(state)=>{
  // console.log(state)
return{
  manbottomlist:state.manbottomlist
}
}
export default connect(subscribe,dispath)( Man)