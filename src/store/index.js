import {createStore} from 'redux'

///函数`createStore`的参数之一，初始状态
const initValues = {
    taglist: ['首页'],
}
///函数`createStore`的参数之一，Reducer函数（两参数，一个状态，一个更新状态的函数，like 高阶函数reduce）
const CounterReduce = (state, action) => {
    switch (action.type) {
        case 'taglistadd':
            return {...state,taglist: state.taglist.push(action.value)}
        case 'taglistaplice':
            const i = state.taglist.findIndex(item => item == action.value)            
            return {...state,taglist: state.taglist.splice(i,1)}
        default:
            return state
    }
}

//创建完毕
const store = createStore(CounterReduce,initValues)
export default store;