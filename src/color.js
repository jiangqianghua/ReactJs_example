import React , {createContext, useReducer } from 'react';

export const ColorsContext =createContext({})
//  需要在别的共享地方包裹这层color才会实现共享
export const Color = props => {
    const [color, dispatch] = useReducer(reducer, 'blue')
    return (
        <ColorsContext.Provider value={{color, dispatch}}>
            {props.children}
        </ColorsContext.Provider>
    )
}

export const UPDATE_COLOR = "UPDATE_COLOR"

const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_COLOR: 
            return action.color
        default:
            return state
    }
}
