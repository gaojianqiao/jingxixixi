import Headimgbar from '../../../Bagpack/Headimgbar'
import React, { Component } from 'react'
// import style from "./index.module.scss";
import {connect} from 'react-redux'
import {bottomlist,centerlist} from './activeCreator'
import Itemabr from '../../../Bagpack/Itembar'
import Centerbar from '../../../Bagpack/centerbar'
class Baby extends Component {
  state = {
    refreshing: false,
    down: true,
    current:1,
  };
 componentWillMount(){
 
    if(this.props.babybottomlist.length===0){
      this.props.bottomlist(1)
      this.props.bottomlist(2)
      this.props.centerlist()
    }
   
  }

  render() {
    return <div>
        <Headimgbar />
        {this.props.babycenterlist?
          <Centerbar list={this.props.babycenterlist}/>
:null}
        
          {this.props.babybottomlist?
<Itemabr listbottom={this.props.babybottomlist} path='/Selection/Baby'/>
:null
        } 

    </div>
  }
}
const dispath={
  bottomlist,centerlist
}
const subscribe=(state)=>{
  // console.log(state)
return{
  babybottomlist:state.babybottomlist,
  babycenterlist:state.babycenterlist
}
}
export default connect(subscribe,dispath)(Baby)