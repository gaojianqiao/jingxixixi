import React, { Component } from 'react'
import style from './index.module.scss'
import {NavLink} from 'react-router-dom'
class Centerbar2 extends Component {
  render() {
    return <div>
        {this.props.list?
        <ul className={style.someul}>
           { this.props.list.map(item=>
            <li key={item.productId+item.brandName+item.marketPrice}>
                <NavLink to={`Detail/${item.event_id,item.productId}`}>
                  <img src={item.imageUrl} alt={item.brandName}/>
                  <div className={style.text}>
                    <div className={style.textbox1}>
                        <p className={style.textbox1p1}>  {item.brandName}</p>
                        <p className={style.textbox1p2}>{item.productName}</p>
                    </div>
                    <div  className={style.textbox2}>
                      <span   className={style.textbox2span1}>￥{item.price}</span>
                      <span   className={style.textbox2span2}>￥{item.marketPrice}</span>
                    </div>

                  </div>
                
                  </NavLink>
            </li>
            )}
        </ul>
    :null}
    </div>
  }
}
export default Centerbar2