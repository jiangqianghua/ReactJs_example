const defaultState  =  {
    inputValue: 'jiang',
    list: []
}

export default (state = defaultState, action) => {
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if (action === 'deleteItem') {
        console.log('delete item')
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(newState.index, 1)
        return newState
    }
    return state
}