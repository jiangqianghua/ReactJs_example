import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背']
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="input_id">请输入文本</label>
                    <input id="input_id" value={this.state.inputValue}
                    onChange={this.inputChange.bind(this)}  /> 
                    <button onClick={this.addList.bind(this)}>增加服务器</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <TodoItem
                                 content={item} 
                                 index={index}
                                 key={index+item}
                                 deleteItem={
                                    this.deleteItem.bind(this)
                                 }></TodoItem>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange(e) {
        console.log(e.target.value)
       this.setState({
           inputValue: e.target.value
       })
    }

    // 增加列表
    addList() {
        this.setState({
                list: [...this.state.list, this.state.inputValue],
                inputValue: ''
            })
    }

    deleteItem(index) {
        // 一定要先定义局部变量在作删除
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default TodoList