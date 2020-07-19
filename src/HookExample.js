import React, { useReducer } from 'react';

function HookExample() {
    const [count, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'add':
                return state + 1
            case 'sub':
                return state -1
            default:
                return state
        } 
    }, 10)
    return (
        <div>
           <h2>现在分数是 {count}</h2>
           <button onClick={()=>{dispatch({type: 'add'})}}>add</button>
           <button onClick={()=>{dispatch({type: 'sub'})}}>add</button>
        </div>
    )
}

export default HookExample