import React, { Component } from 'react'
import style from './index.module.scss'
import {NavLink} from 'react-router-dom'
import Axios from 'axios'
export default class Headimgbar extends Component {
    state={
        headerlist:null,
        headerimgpath:"/Selection/Women"
    }
    UNSAFE_componentWillMount(){
        Axios.get(`http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=${window.localStorage.getItem('silo_id')}&platform_code=PLATEFORM_H5`).then(res=>{
            if(res.data.banners[0]){
                this.setState({
                    headerlist:res.data.banners[0]
                })
            }

        })
    }
    render(){
            var listitem=this.state.headerlist
        return <div className={style.box}>
            {
            listitem?
                <NavLink to={this.state.headerimgpath} key={listitem.id} >
        <div className={style.box}  onClick={()=>this.pushsomedetail(listitem.eventId,)}>
        <img src={listitem.main_image} className={style.img} alt={listitem.sub_title}/>
            <div className={style.text}>
                <p className={style.p1}>{listitem.main_title}</p>
                <p className={style.p2}>{listitem.sub_title}</p>
                <p className={style.p3}>{listitem.description}</p>
            </div>
        </div>
        </NavLink>
                :<img src="/img/1.jpg" alt="精品"  className={style.img}/>
            }
        </div>     
    }
    
        pushsomedetail(categoryId,path){
            localStorage.setItem('categoryId',categoryId );
    // this.props.history.push(path)
        } 
}
