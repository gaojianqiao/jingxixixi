import React, { Component } from 'react'
import Footer from '../../Components/Footerbar'
import Cominganew from '../../Bagpack/comingtoanew'
import {connect} from 'react-redux'
import {commingtoanewlist,commingtoanewlist1} from './actionCreator'
// import Headerbar from '../../Components/Headerbar';
import style from './index.module.scss'
 class Comingtoanew extends Component {
  render() {
    return <div >
      <div className={style.box}></div>
      {this.props.comingtoanewlist1 && this.props.comingtoanewlist?
  <Cominganew list={this.props.comingtoanewlist1} listheader={this.props.comingtoanewlist}/>
      :null 
      }

        <Footer/>
        {/* {console.log(this.props.commingtoanewlist)} */}
    </div>
    
    
  }
componentWillMount(){
  this.props.commingtoanewlist()
  this.props.commingtoanewlist1()
}
}

const agencysubscribe=(state)=>{
 return {
  comingtoanewlist:state.comingtoanewlist,
  comingtoanewlist1:state.comingtoanewlist1
}
}
const agencydispatch={
  commingtoanewlist,commingtoanewlist1
}
export default connect(agencysubscribe,agencydispatch)(Comingtoanew)
