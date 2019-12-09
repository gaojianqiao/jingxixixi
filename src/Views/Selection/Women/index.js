import React, { Component } from 'react'
// import Axios from 'axios'
import Headimgbar from '../../../Bagpack/Headimgbar'
import {connect} from 'react-redux'
import {bottomlist} from './activeCreator'
import Itemabr from '../../../Bagpack/Itembar'
class Women extends Component {
  UNSAFE_componentWillMount(){

    if(this.props.womenbottomlist.length===0){
      this.props.bottomlist()
    }
   
  }
    render() {
      return <div>

          <Headimgbar/>
          {
          this.props.womenbottomlist?
<Itemabr listbottom={this.props.womenbottomlist} path='//Selection/Baby'/>
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
    womenbottomlist:state.womenbottomlist
  }
  }
  export default connect(subscribe,dispath)(Women)
