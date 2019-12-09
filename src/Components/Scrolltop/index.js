import React, { Component } from 'react'
const Scrolltop=(Mybar)=>{
    return class ScrollView extends Component {
state={
    isScrolltopFixed:false,
}
UNSAFE_componentDidMount(){
    window.onscroll=()=>{
        
        if((document.documentElement.scrollTop || document.body.scrollTop)>=10){
            this.setState({
                isScrolltopFixed:true
            })
        }else{
            this.setState({
                isScrolltopFixed:false
            })
        }
    }
}
        render() {
           
          return <div>
      <Mybar {...this.props} isScrolltopFixed={this.state.isScrolltopFixed} />
          </div>
        }
      }
}



export default Scrolltop
