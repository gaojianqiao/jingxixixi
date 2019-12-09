import {PullToRefresh} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import Headimgbar from '../../../Bagpack/Headimgbar'
import React, { Component } from 'react'
import Itemabr from '../../../Bagpack/Itembar'
import {connect} from 'react-redux'
import {bottomlist,centerlist,bottomlistnumbel} from './activeCreator'
import Centerbar from '../../../Bagpack/centerbar'
import Bottombar from '../../../Components/Footerbar'
 class Mackup extends Component {
  UNSAFE_componentWillMount(){

    if(this.props.mackupbottomlist.length===0){
      this.props.bottomlist(1)
      this.props.centerlist()
      this.props.bottomlistnumbel()
    }
   
  }
  state={
    down:false,
    refreshing:false,
    // movieIds:[],
    current:1
  }
  render() {
    return <div>
    
        <Headimgbar/>
        {this.props.mackupcenterlist?
          <Centerbar list={this.props.mackupcenterlist}/>
:null}

                    <PullToRefresh
                    damping={60}
                    style={{
                    // height: this.state.height,
                    overflow: 'auto',
                    }}
                    indicator={this.state.down ? { deactivate: '下拉可以刷新111' } : { deactivate: '上拉可以刷新111' }}
                    direction={this.state.down ? 'down' : 'up'}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                      if(this.state.current===parseInt(this.props.mackupbottomlistnumbel)){
                        console.log('结束')
                          return this.setState({
                            refreshing:false
                          })
                      }  

                        this.setState({ refreshing: true ,
                        current:this.state.current+1
                        });
                        // console.log(this.state.current)
                        this.handleScroll()
                    }}
            >
            <ul>
              
            
        {
          this.props.mackupbottomlist?
<Itemabr listbottom={this.props.mackupbottomlist} path='//Selection/Baby'/>
:null
            }
            </ul>
            </PullToRefresh>
            <Bottombar/>
    </div>
  }
  handleScroll = ()=>{
    this.props.bottomlist(this.state.current)
      if(this.state.current===parseInt(this.props.mackupbottomlistnumbel)){
        console.log('结束')
          return this.setState({
            refreshing:false
          })
      }                      
  }
}
const dispath={
  bottomlist,centerlist,bottomlistnumbel
}
const subscribe=(state)=>{
  // console.log(state)
return{
  mackupbottomlist:state.mackupbottomlist,
  mackupcenterlist:state.mackupcenterlist,
  mackupbottomlistnumbel:state.mackupbottomlistnumbel
  
}
}
export default connect(subscribe,dispath)(Mackup)