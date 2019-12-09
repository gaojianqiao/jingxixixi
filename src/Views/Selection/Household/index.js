import Headimgbar from '../../../Bagpack/Headimgbar'
import React, { Component } from 'react'
import Itemabr from '../../../Bagpack/Itembar'
import {connect} from 'react-redux'
import {bottomlist} from './activeCreator'
 class Household extends Component {
  UNSAFE_componentWillMount(){

    if(this.props.householdbottomlist.length===0){
      this.props.bottomlist()
    }
   
  }
  render() {
    return <div>
    
        <Headimgbar/>
        {
          this.props.householdbottomlist?
<Itemabr listbottom={this.props.householdbottomlist} path='//Selection/Baby'/>
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
  householdbottomlist:state.householdbottomlist
}
}
export default connect(subscribe,dispath)(Household)