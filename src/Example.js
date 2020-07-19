import React, { useReducer } from 'react';
import Buttons from './Buttons'
import ShowArea from './ShowArea'
import {Color} from './color'
function Example() {
    return (
        <div>
            <Color>
                <ShowArea></ShowArea>
                <Buttons></Buttons>
            </Color>
        </div>
    )
}

export default Example