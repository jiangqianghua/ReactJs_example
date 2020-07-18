// 存放state初始化的一些数据
const defaultState = {
    inputValue: 'Write somthing',
    list: [
        '11222333',
        '33333333333',
        '4444444444'
    ]
}
// 每次dispatch，都会执行该方法， action存放action的typoe和value
export default (state = defaultState, action) => {
    console.log(state, action)
    // Reducer里只能接受state，只能改变state
    if(action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = [...newState.list, newState.inputValue]
        newState.inputValue = ''
        return newState
    }
    if (action.type === 'deleteItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    }
    return state
 
}