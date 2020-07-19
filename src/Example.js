import React, { useState, useMemo } from 'react';

function Example(){
    const [xiaohong, setXiaohong] = useState('小红待客状态')
    const [zhiling,setZhiling] = useState('志林待客状态')
    return (
        <>
            <button onClick={() => {setXiaohong(new Date().getTime())}}>小红</button>
            <button onClick={() => {setZhiling(new Date().getTime() + '志玲走来了')}}>志玲</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </>
    )
}

function ChildComponent({name, children}) {
    function changeXiaohong() {
        console.log('他来了，小红向我们走来了')
        return name + '小红向我们走来了'
    }
    // 期望点击志玲的时候，小红状态不要变化
    const  actionXIaohong = useMemo(()=>changeXiaohong(name), [name])
    return (
        <>
        <div>{actionXIaohong}</div>
        <div>{children}</div>
        </>
    )
}

export default Example