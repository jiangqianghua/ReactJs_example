import React, { Component } from 'react';
import {connect} from 'react-redux'

class TodoList extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <input
                    value = {this.props.inputValue }
                    onChange = {this.props.inputChange} />
                    <button onClick={this.props.clickButton}>提交 </button>

                </div>
                <div>
                    <ul>
                        {
                            this.props.list.map((item, index) => {
                                return (
                                <li key={index} onClick={this.props.delClick(index)}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
         );
    }

}
 
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            console.log('inputchange')
            let action = {
                type: 'changeInput',
                value: e.target.value
            }
            dispatch(action)
        },
        clickButton(){
            let action = {
                type: 'addItem'
            }
            dispatch(action)
        },
        delClick (index) {
            console.log('delclick')
            let action = {
                type: 'deleteItem',
                index
            }
            dispatch(action)
        }
    }
}
export default connect(stateToProps, dispatchToProps)(TodoList);