import React, { Component } from 'react'
import {TimeDown} from "../../Bagpack/Timeend/index"
import style from './index.module.scss'
import {NavLink} from 'react-router-dom'
export default class componentName extends Component {
    
  render() {
     
    return (
      <>
      {/* {console.log(this.props.listheader.length!==0)} */}
      {}
    {this.props.list.length!==0 && this.props.listheader.length!==0 && (TimeDown(this.props.list.launchTime)>0||TimeDown(this.props.list.launchTime)===0)?
   
  <div>
         <div className={style.header}>
           {TimeDown(this.props.list.launchTime)!==0?
             <h2  className={style.header_header}>距离开场还剩<span>{TimeDown(this.props.list.launchTime)}</span>小时</h2>
             :
             <h2  className={style.header_header}>即将开售</h2>
           }
                <div className={style.header_bottom}>{this.props.listheader.tips}</div>
         </div>
       {  this.props.list.events.map(listitem=>
            <NavLink to='/Selection'key={listitem.categoryId} className={style.navlink}>
    <div className={style.box} >
    <img src={listitem.imageTmallUrl} className={style.img} alt={listitem.chineseName}/>
        <div className={style.text}>
            {listitem.isCrossBorder==="1"?
            <p className={style.particularly}>海外直发</p>
            :null
            }
        
            <p className={style.p1}>{listitem.englishName}</p>
            <p className={style.p2}>{listitem.chineseName}</p>
            <p className={style.p3}>{listitem.discount}</p>
        </div>
  <div  className={style.textrightbottom}>{this.props.list.title}</div>
    </div>
       </NavLink>
       )}


</div>  :null
    }

      </>
    )
  }
}
