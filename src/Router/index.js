import {BrowserRouter as BR,Route,Switch,Redirect} from 'react-router-dom'
import React from 'react'
import App from '../App'


import searchsome from '../Views/Searchsome'
import Comingtoanew from '../Views/Comingtoanew'
import Selection from '../Views/Selection'
import Recommend from '../Views/Recommend'
import Brand from '../Views/Brand'
import Detail from '../Views/Detail'

import Baby from '../Views/Selection/Baby'
import Mackup from '../Views/Selection/Mackup'
import Man from '../Views/Selection/Man'
import Overseas from '../Views/Selection/Overseas'
import Women from '../Views/Selection/Women'
import Household from '../Views/Selection/Household'
import Search from '../Views/Search'
import Somedetail from '../Views/Somedetail'
import Shopcar from '../Views/Shopcar'

import Register from '../Views/Register'
import Clientele from '../Views/Clientele'
import Login from '../Views/Login'
import Newpeople from '../Views/Newpeople'
import {Provider} from 'react-redux'
import store from "../Redux/store"
function isLogin(){
    if(!localStorage.getItem("token")){
            return false
    }
    return true
}
const router =(
    <Provider store={store}>
    <BR>
        <App>
            <Switch>
            
            <Route path="/Recommend" component={Recommend}/>
            <Route path="/Comingtoanew" component={Comingtoanew}/>
            <Route path="/Search" component={Search}/>
            <Route path="/Somedetail" component={Somedetail}/>
            <Route path="/Clientele" component={Clientele}/>
            <Route path="/Register" component={Register}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Shopcar" render={()=>
               isLogin()?<Shopcar/>:<Redirect to ="/Login"/>

            } 
            
            />
            <Route path="/Newpeople" component={Newpeople}/>
            <Route path="/Selection" render={()=>{
              return <Selection>
                <Switch>
                    <Route path="/Selection/Man" component={Man}/>
                    <Route path="/Selection/Baby" component={Baby}/>
                    <Route path="/Selection/Overseas" component={Overseas}/>
                    <Route path="/Selection/Women" component={Women}/>
                    <Route path="/Selection/Household" component={Household}/>
                    <Route path="/Selection/Mackup" component={Mackup}/>
                    <Redirect from="/Selection" to="/Selection/Overseas"/>
                </Switch>
            </Selection>
        }}/>
            <Route path="/Brand/:slidId" component={Brand} exact/>
            <Route path="/Searchsome/:myname" component={searchsome}  exact/>

            <Route path="/Detail/:id" component={Detail} exact/>
            <Redirect from="/" to="/Recommend"/>
            </Switch>
        </App>
    </BR>
    </Provider>
)
export default router