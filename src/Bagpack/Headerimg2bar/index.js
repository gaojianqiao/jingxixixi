import { Carousel, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'

import React, { Component } from 'react'
import style from './index.module.scss'
import './index.scss'
import {NavLink} from 'react-router-dom'
import Axios from 'axios'
// import ReactDOM from 'react-dom'

class Headerimg2bar extends Component {
    state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
      headerimg2path:"/"
    }
    UNSAFE_componentWillMount() {
      // simulate img loading
      Axios.get(`http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=${window.localStorage.getItem('silo_id')}&platform_code=PLATEFORM_H5`).then(data=>{
        //  console.log(data.data.banners)
          this.setState({
            data: data.data.banners,
          });
      })
    }
    render() {
      return <div>
        <WingBlank>
          <Carousel
            autoplay={true}
            infinite
          
          >
            {this.state.data.map((val,index) => 
     
              <NavLink to="/Newpeople"  key={index} >
              <div className={style.box} >
              <img src={val.main_image} className={style.img} alt={val.sub_title}  />
                  <div className={style.text}>
                      <p className={style.p1}>{val.main_title}</p>
                      <p className={style.p2}>{val.sub_title}</p>
                      <p className={style.p3}>{val.description}</p>
                  </div>
              </div>
              </NavLink>
            )}
          </Carousel>
        </WingBlank>
        </div>
    }
  }


export default Headerimg2bar
