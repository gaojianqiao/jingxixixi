import React, { Component } from 'react'
import style from './index.module.scss'
import {NavLink} from 'react-router-dom'
export default class blankbar extends Component {
  render() {
    return (<div>
      {this.props.listbrand.id?
      <div  className={style.box}>
        <div className={style.box1}>
    {/* {console.log(this.props.listbrand)} */}
  <span  className={style.box1span1}>{this.props.listbrand.brandNameEn?this.props.listbrand.brandNameEn:this.props.listbrand.brandNameZh}</span>
    <span  className={style.box1span1}>在售商品{this.props.listbrand.productCount}件</span>
</div>
<div  className={style.box2}>
    <NavLink to="/Brand">进入品牌</NavLink>
</div></div>
:null
      }

    </div>)
  }
}
