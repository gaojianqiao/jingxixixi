import React ,{Component} from 'react'
import style from './index.module.scss'
import { NavLink } from 'react-router-dom'
import {withRouter} from 'react-router'
class Itemabr extends Component{
render(){
    
        var listitems=[]
       if(listitems.length===0){
        listitems=this.props.listbottom
       }
    // // console.log(this.props)
    // if(listitems!==this.props.listbottom){
    //      listitems=[...listitems,...this.props.listbottom]
    // }else{
    //      listitems=this.props.listbottom
    // }
    
    

    return <div>
        {
        listitems.map(listitem=>
            <NavLink to={this.props.path} key={listitem.eventId} >
    <div className={style.box}  onClick={()=>this.pushsomedetail(listitem.eventId,)}>
    <img src={listitem.imageUrl} className={style.img} alt={listitem.chineseName}/>
        <div className={style.text}>
            <p className={style.p1}>{listitem.englishName}</p>
            <p className={style.p2}>{listitem.chineseName}</p>
            <p className={style.p3}>{listitem.discountText}</p>
        </div>
    </div>
    </NavLink>
            )
        }
    </div>     
}

    pushsomedetail(categoryId,path){
        localStorage.setItem('categoryId',categoryId );
// this.props.history.push(path)
    } 
}

export default withRouter(Itemabr)
