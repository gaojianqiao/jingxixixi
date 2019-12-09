import React, { Component } from 'react'
import style from './index.module.scss'
import {Link} from 'react-router-dom'
export default class Centerbar extends Component {
  render() {
    return <div>
         <ul className={style.centerul}>
             {
                 this.props.list?
            this.props.list.map(item=>
                <li  className={style.centerli} key={item.categoryTwoId}>
                    <Link to={"/Login"}><img src={item.categoryImgStr} alt={item.categroyTwoName}/></Link>
                </li>
                )
                 :null
             }

      </ul>
    </div>

  }
}
