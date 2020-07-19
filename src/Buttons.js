import React , {useContext} from 'react';
import {ColorsContext, UPDATE_COLOR} from './color'

function Buttons(){
    const {dispatch} = useContext(ColorsContext)
    return (
        <div>
            <button onClick={() => {dispatch({type: UPDATE_COLOR, color: 'red'})}}>红色</button>
            <button onClick={() => {dispatch({type: UPDATE_COLOR, color: 'yellow'})}}>黄色</button>
        </div>
    )
}
export default Buttons