import {PullToRefresh} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import Gotop from '../../Components/gotop'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import style from "./index.module.scss"
import Blankbar from '../../Bagpack/blankbar'
import Samebar from '../../Bagpack/somebar'
import Axios from 'axios'
import {NavLink} from 'react-router-dom'
import {hideHeader,showHeader,searchsomelist,blanklistabar,searchsometotalbel} from './actionCreator'

class Seachsome extends Component {
  state={
    current:1,
    searchinputlist:null
  }
  render() {
    return (
      <>
      <Gotop/>
        <div className={style.searchinputheader} >
           <input   type="text"  
           className={style.searchinput} 
           onChange={(e)=>this.searchchange(e)}
            placeholder="搜索" 
            />
            <div className={style.searchinputno} >              
           </div>
            <div className={style.nosearch} onClick={()=>this.goremmoend()
            }> 取消
               </div>
        </div>
        <ul className={style.inputshow}>
            {this.state.searchinputlist?
            this.state.searchinputlist.map(item=>
                <li  key={item.name} onClick={()=>this.setlocallist(item.name)}><NavLink to={'/'}> <span className={style.leftspan}>{item.name}</span><span className={style.rightspan}>商品约{item.productCount}件</span></NavLink></li>
                )
            :null
            }   
        </ul>
      {this.props.getblanklist?
      <Blankbar listbrand={this.props.getblanklist}/>
:null
      }

      {this.props.getsearchsomelist?
        <Samebar list={this.props.getsearchsomelist}/>
      :null
      }
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
                      if(this.state.current===parseInt(this.props.getnumber)){
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

            {this.props.getsearchsomelist?
        <Samebar list={this.props.getsearchsomelist}/>
      :null
      }

            </PullToRefresh>
      </>
    )
  }
  handleScroll = ()=>{
    this.props.searchsomelist(this.state.current,this.props.match.params.myname)
      if(this.state.current===parseInt(this.props.getnumber)){
          return this.setState({
            refreshing:false
          })
      }                      
  }
  setlocallist(name){

    var getlist=JSON.parse(window.localStorage.getItem('oldsearch'))
    if(getlist){
        if(getlist.indexOf(name) !== -1){
            getlist.splice(getlist.indexOf(name),1)
           }
    }else{
        getlist=[]
    }
       getlist.unshift(name)

       window.localStorage.setItem('oldsearch', JSON.stringify(getlist))  
       this.props.history.push(`/Searchsome/${name}`)  

        }
        componentWillReceiveProps(nextprops){
          if(nextprops.match.url.slice(1,11)==='Searchsome'){
          
            if(nextprops.match.url !== this.props.match.url){

              searchsomelist(1,nextprops.match.url.slice(12))
              blanklistabar(nextprops.match.url.slice(12))
              }
          }

        }
  goremmoend(){
    this.props.history.goBack()
}
  searchchange(e){
    e.preventDefault();
    Axios.get(`http://www.mei.com/appapi/search/searchSuggest/v3?text=${e.target.value?e.target.value:null}`).then(res=>{
        this.setState({
            searchinputlist:res.data.result
        })
    })
        }
  componentWillMount(){
    this.props.hideHeader()
    this.props.blanklistabar(this.props.match.params.myname)
    this.props.searchsomelist(1,this.props.match.params.myname)
    this.props.searchsometotalbel(1,this.props.match.params.myname)

 
}
componentWillUnmount(){
    this.props.showHeader()
}
}
const adencysubscribe=(state)=>{
return {getsearchsomelist:state.searchsomelist,
  getblanklist:state.blanklistabar,
  getnumber:state.searchsometotalbel
}
}
const agencydispatch={
    hideHeader,showHeader,searchsomelist,blanklistabar,searchsometotalbel
}
export default connect(adencysubscribe,agencydispatch)(Seachsome)
