import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
// import store from './store/index'
import store from './store'

class TodoList extends Component {
    state = {  }
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        // 订阅store改变事件，把新的state设置到当前state
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    // 重新设置state
    storeChange () {
        console.log('storeChange')
        this.setState(store.getState())
    }

    render() { 
        return ( 
            <div style={{margin: '10px'}}>
                <div>
                    <Input 
                    style={{width: '250px', marginRight: '10px'}} 
                    onChange={this.changeInputValue}
                    value={this.state.inputValue}
                    />

                    <Button type="primary" onClick={this.clickBtn} > 增加</Button>
                </div>
                <div>
                    {this.state.inputValue}
                </div>
                <div style={{margin: '10px', width: '300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (<List.Item 
                            onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
                    ></List>
                </div>
            </div>
         );
    }

    changeInputValue(e) {
        console.log(e.target.value)
        const action = {
            type: 'changeInput',
            value: e.target.value
        }
        store.dispatch(action)
    }

    clickBtn () {
        const action = {
            type: 'addItem'
        }
        store.dispatch(action)
    }

    deleteItem(index) {
        const action = {
            type: 'deleteItem',
            value: index
        }
        store.dispatch(action)
    }
}
 
export default TodoList;