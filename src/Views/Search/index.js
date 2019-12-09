import React,{Component} from 'react'
import style from "./index.module.scss"
import {hideHeader,showHeader,hotlist} from "./actionCreator"
import {connect} from 'react-redux'
import Axios from 'axios'
import {NavLink} from 'react-router-dom'
class Search extends Component{
    state={
        searchinputlist:null,
        searcholdlist:null,
  
    }
    goremmoend(){
        this.props.history.goBack()
    }
    render(){
        return    <div>
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

        {
        this.props.gethotlist?
            <div className={style.hotsearch}>
                <p className={style.hotsearchheader}>热门搜索</p>
                <ul >
                {this.props.gethotlist?
            this.props.gethotlist.map(item=>
                <li key={item.findKeyWord} onClick={()=>this.inputhot(item.findKeyWord)}><NavLink to={'/'}>{item.findKeyWord}</NavLink></li>
                )
            :null
            }
                </ul>
            </div>
        :null
        }
        {this.state.searcholdlist?
        <div className={style.oldsearch}>
          <p className={style.oldsearchheader}>历史搜索 <span onClick={()=>this.deloldsearchheader()} className={style.deloldsearchheader}>删除</span></p>
          <ul >
           { this.state.searcholdlist.map(item=>
                <li key={item}  onClick={()=>this.inputhot(item)}><NavLink to={'/'}>{item}</NavLink></li>
                )
           }
          </ul>
        </div> 
        :null}
        {/* {console.log(this.props.isshowheader)} */}
    </div>
    
    }
    inputhot(name){
        this.props.history.push(`/Searchsome/${name}`)    
    }

    deloldsearchheader(){
// this.props.history.push('/searchsome')
window.localStorage.setItem('oldsearch', JSON.stringify([])) 
this.setState({
    searcholdlist:null
})
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
//    console.log(getlist)
   window.localStorage.setItem('oldsearch', JSON.stringify(getlist))  
   this.props.history.push(`/Searchsome/${name}`)     
    }
    searchchange(e){
Axios.get(`http://www.mei.com/appapi/search/searchSuggest/v3?text=${e.target.value?e.target.value:null}`).then(res=>{
    this.setState({
        searchinputlist:res.data.result
    })
})
    }
    // http://www.mei.com/appapi/search/searchKey/v3?pageIndex=1&q=19LXXIX&sort=&key=&brandNameEn=19LXXIX&brandNameZh=19LXXIX&type=brand
    UNSAFE_componentWillMount(){
        this.props.hideHeader()
        this.props.hotlist()
        this.setState({
            searcholdlist:JSON.parse(window.localStorage.getItem('oldsearch'))
        })
    }
    componentWillUnmount(){
        this.props.showHeader()
}

}
const agencydispatch={
    hideHeader,showHeader,hotlist
}
const agencysubscribe=(state)=>{
return {gethotlist:state.searchhotlist}

}
export default connect(agencysubscribe,agencydispatch)(Search)