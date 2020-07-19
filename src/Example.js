import React, { useRef, useState, useEffect } from 'react';
// 获取元素对象
function Example(){
    const inputEl = useRef(null)
    const onButtonClick = () => {
        inputEl.current.value = "hello jiang"
        console.log(inputEl)
    }
    const [text, setText] = useState('js')

    const textRef = useRef()

    // text每次改变，textRef都会执行一次保存
    useEffect(() => {
        textRef.current = text
        console.log('textRef = ' + textRef.current)
    })
    return (
        <>
            <input ref={inputEl} type='text'></input>
            <button onClick={onButtonClick}>在input上显示文字</button>
            <input value={text} onChange={(e) => {setText(e.target.value)}} ></input>
        </>
    )
}

export default Example