import React from 'react';
import Headerbar from './Components/Headerbar';
import {connect} from 'react-redux'

class App extends React.Component{

  render(){
   
 
    return <div>
     
      {
        (this.props.isshowheader?this.props.isshowheader:this.props.isshowheadera)?
        <Headerbar />:null
      }
     
      {this.props.children}

    </div>

  }
componentWillMount(){
this.props.showHeader()
}
}
const getaheadershow=(state)=>{
  // console.log(state)
  return {
    isshowheader:state.headbar,
  }
}
const setheaderbar={
  showHeader:function showHeader(){
    return {
        type:"showHeaderbar",
        payload:true 
    }
}
}
export default connect(getaheadershow,setheaderbar)(App);