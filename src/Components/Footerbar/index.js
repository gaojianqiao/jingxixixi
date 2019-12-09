import React, { Component } from 'react'
import style from './index.module.scss'
import { NavLink } from 'react-router-dom'
export default class Footer extends Component {
  render() {
    return <div className={style.box}>
<span className={style.tel}>400-664-6698</span>
<ul  className={style.ul}>
<li><NavLink to="/Recommend">首页</NavLink></li>
<li><NavLink to="/Clientele">客户端</NavLink></li>
<li><NavLink to="/Register">登录</NavLink></li>
<li><NavLink to="/Login" className={style.lasta}>注册</NavLink></li>
</ul>
<p  className={style.c}>浙ICP备16004860号-1</p>
    </div>
  }
}
