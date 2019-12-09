import Headimgbar from '../../../Bagpack/Headimgbar'
import React, { Component } from 'react'
import Itemabr from '../../../Bagpack/Itembar'
import {connect} from 'react-redux'
import {bottomlist} from './activeCreator'
class Overseas extends Component {
  UNSAFE_componentWillMount(){

    if(this.props.overseasbottomlist.length===0){
      this.props.bottomlist()
    }
   
  }
  render() {
    return <div>
    
        <Headimgbar/>
        {
          this.props.overseasbottomlist?
<Itemabr listbottom={this.props.overseasbottomlist} path='//Selection/Baby'/>
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
  overseasbottomlist:state.overseasbottomlist
}
}
export default connect(subscribe,dispath)(Overseas)