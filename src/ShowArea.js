import React, {useContext} from 'react';
import {ColorsContext} from './color';
function ShowArea() {
    const {color} = useContext(ColorsContext)
    return (
    <div style={{color: color}}>文字颜色为{color}</div>
    )
}

export  default ShowArea