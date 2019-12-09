import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'
import style from "./index.module.scss"
import  "./index.scss"
import Scrolltop from '../Scrolltop';
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper/js/swiper'
class Selects extends Component {
    
state={
    selectlist:[
            {categoryId: "2013000100000000011", urlKey: "", name: "海外",myurlkey:"Overseas"},
            {categoryId: "2013000100000000001", urlKey: "", name: "女士",myurlkey:"Women"},
            {categoryId: "2013000100000000002", urlKey: "", name: "男士",myurlkey:"Man"},
            {categoryId: "2013000100000000003", urlKey: "", name: "美妆",myurlkey:"Mackup"},
            {categoryId: "2013000100000000004", urlKey: "", name: "家居",myurlkey:"Household"},
            {categoryId: "2013000100000000005", urlKey: "", name: "婴童",myurlkey:"Baby"}
                ]
,cssstyle:this.props.isScrolltopFixed
}
componentDidMount(){
    //可以加上你需要的条件等，然后生成Swiper对象，
    //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
    new Swiper('.swiper-container',{

        // 如果需要分页器
        slidesPerView:4,
      spaceBetween:10,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
    });
}
    render(){
        // {console.log(this.props.isScrolltopFixed)}
        const styleComponentHeader = {
            header: {
                background:'#fff',
                color:'#000'
            //   paddingTop: this.props.isScrolltopFixed ? 'background:rgba($color: #000000, $alpha: 1);': '15px',
            },
            search:{
                color: '#999',
                backgroundColor: '#f5f5f5'
            },
         bao:{
            color: '#999',
         }
          }
        return <div className={style.box} style={this.props.isScrolltopFixed?styleComponentHeader.header:null} >
<div className={style.headertop}>
    <div className={style.login+' l'}><NavLink to='/Recommend' style={this.props.isScrolltopFixed?styleComponentHeader.header:null}>登录</NavLink></div>
    <div className={style.seach+' l'}><NavLink to='/Search' style={this.props.isScrolltopFixed?styleComponentHeader.search:null}><span className="iconfont icon-sousuo"></span>SUPER NATURAL 最低可至2折</NavLink></div>
    <div className={style.shopcar+' r' } style={this.props.isScrolltopFixed?styleComponentHeader.bao:null}><NavLink to="/Shopcar"><span className="iconfont icon-gouwudai" ></span></NavLink></div>
</div>

            <ul className={style.nav}>
            <div className='new'>
             <div className="swiper-container">
                <div className="swiper-wrapper">
                <li className="l swiper-slide" onClick={()=>this.setsilo_id('2013000100000000008')}>
                <NavLink to='/Recommend' style={this.props.isScrolltopFixed?styleComponentHeader.header:null}>推荐</NavLink>
                </li>
                    {
                        this.state.selectlist.map(item=>
                            <li key={item.myurlkey} onClick={()=>this.setsilo_id(item.categoryId)} className="l swiper-slide">
                            <NavLink to={'/Selection/'+item.myurlkey}  activeClassName="Selectbaractive" style={this.props.isScrolltopFixed?styleComponentHeader.header:null}>{item.name}</NavLink>
                            </li>
                            )
                    }
                    <li className="l swiper-slide"><NavLink to='/ComingToANew' style={this.props.isScrolltopFixed?styleComponentHeader.header:null}>即将上新</NavLink></li>
                </div>
                </div>
            </div> 
            </ul>     
        </div>
        
    }

    setsilo_id(setid){
        localStorage.setItem('silo_id', setid);
        
    }


}

export default Scrolltop(Selects)