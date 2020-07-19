import React, { useCallback, useState, useEffect } from 'react';
// 自定义hook
function useWinSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', onResize) 
        return () => {
            //  销毁移除监听
            window.removeEventListener('resize', onResize)
        }
    }, []) // 最后的[]  可以确保销毁只执行一次
    return size;
}

function Example(){
   const size = useWinSize()

   return (
       <div>
           页面size {size.width} : {size.height}
       </div>
   )
}

export default Example