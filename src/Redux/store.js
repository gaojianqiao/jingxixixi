import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import headbar from './Reducer/headShow'
import itemlist2Recommend from './Reducer/itemlist2recommend'
import itemlist1Recommend from './Reducer/itemlist1recommend'
import reduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk'
import babybottomlist from './Reducer/babybottomlist'
import overseasbottomlist from './Reducer/overseasbottomlist'
import manbottomlist from './Reducer/Manbottomlist'
import mackupbottomlist from './Reducer/Mackupbottomlist'
import householdbottomlist from './Reducer/Householdbottomlist'
import womenbottomlist from './Reducer/womenbottomlist'
import babycenterlist from './Reducer/babycenterlist'
import mackupcenterlist from './Reducer/Mackupcenterlist'
import mackupbottomlistnumbel from './Reducer/mackupbottomlistnumbel'
import searchsometotalbel from './Reducer/searchsometotalbel'
import searchhotlist from './Reducer/searchhotlist'
import searchsomelist from './Reducer/searchsomelist'
import blanklistabar from './Reducer/blanklistabar'
import comingtoanewlist from './Reducer/comingtoanewlist'
import comingtoanewlist1 from './Reducer/comingtoanewlist1'
const reducer=combineReducers({
        headbar,
        itemlist2Recommend:itemlist2Recommend,
        itemlist1Recommend:itemlist1Recommend,
        babybottomlist,
        overseasbottomlist,
        manbottomlist,
        mackupbottomlist,
        mackupbottomlistnumbel,
        householdbottomlist,
        womenbottomlist,
        babycenterlist,
        mackupcenterlist,
        searchhotlist,
        searchsomelist,
        blanklistabar,
        searchsometotalbel,
        comingtoanewlist,
        comingtoanewlist1

})
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
        applyMiddleware(reduxPromise,reduxThunk)
 ))


export default store
// import {createStore} from 'redux'
// const reducer=(prevState={
//     isShow:true,

// },action)=>{
//     let{type,payload} =action
//     var newState={...prevState}
//     switch(type){
//         case "showHeaderbar":
//             newState.isShow=payload.isshowHeaderbar
//             return newState
//         case "hiddenHeaderbar":
//             newState.isShow=payload.isshowHeaderbar
//             return newState
// default :
// return prevState
//             }
// }
// const store =createStore(reducer)

// export default store
