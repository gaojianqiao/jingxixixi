import React,{Component} from 'react'
import {getrecommendcenter1,getrecommendcenter2} from './activeCreator'
import Itembar from '../../Bagpack/Itembar'
import {connect} from 'react-redux'
import Headerimg2bar from '../../Bagpack/Headerimg2bar'
import style from "./index.module.scss";
import Footerbar from "../../Components/Footerbar";

class Recommend extends Component {

    state={
        current:1
    }
    UNSAFE_componentWillMount(){
        window.localStorage.setItem('silo_id','2013000100000000008')
       
      if(this.props.recommenditem1===undefined){
            this.props.getrecommendcenter1()
          
         }
        if(this.props.recommenditem2===undefined){
          this.props.getrecommendcenter2()
         }
    }


    render(){
        return <div>
         
            <Headerimg2bar/>
            <h2 className={style.h2}>今日上新</h2>
{   this.props.recommenditem1?<Itembar listbottom={this.props.recommenditem1} path='/Somedetail'/>:null
}
<h2 className={style.h2}>热卖品牌</h2>
{   this.props.recommenditem2?<Itembar listbottom={this.props.recommenditem2} path='/Somedetail'/>:null
}
<Footerbar/>
        </div>
    }
//     godetail(id){
// this.props.history.push(`/Detail/${id}`)
//     }
gosomedetail(categoryId){
    // this.props.history.push(`/Detail/${id}`)
    localStorage.setItem('categoryId',categoryId );
        }
}
const agencydispatch={
    getrecommendcenter2,
    getrecommendcenter1
}
const agencysubscribe=(state)=>{
    // console.log(state)
return {
    recommenditem1:state.itemlist1Recommend.AddRecommend1,
    recommenditem2:state.itemlist2Recommend.AddRecommend2}

}
export default connect(agencysubscribe,agencydispatch)(Recommend)