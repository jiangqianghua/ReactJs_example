import React, { useState, createContext, useContext } from 'react';
const CountContext = createContext();
function Counter() {
    let count = useContext(CountContext)
    return (<h2>{count}</h2>)
}
function HookExample() {
    const [count, setCount] = useState(10)
    return (
        <div>
            <p>ypu click {count} times</p>
            <button onClick={() => {setCount(count+1)}}>Click me</button>
            <CountContext.Provider value={count}>
                <Counter></Counter>
            </CountContext.Provider>
        </div>
    )
}

export default HookExample