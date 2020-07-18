import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import LiftSycle from './LifeCycle'

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
                    <LiftSycle></LiftSycle>
                    <label htmlFor="input_id">请输入文本</label>
                    <input id="input_id" value={this.state.inputValue}
                    onChange={this.inputChange.bind(this)}
                    ref={(input) => {this.input=input}}  /> 
                    <button onClick={this.addList.bind(this)}>增加服务器</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
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
           inputValue: this.input.value
       })
    }

    // 增加列表
    addList() {
        this.setState({
                list: [...this.state.list, this.state.inputValue],
                inputValue: ''
            }, () => {
                // 渲染完成后会执行该方法
                console.log(this.ul.querySelectorAll("li").length)
            })
    }

    deleteItem(index) {
        // 一定要先定义局部变量在作删除
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        },() => {
            // 渲染完成后会执行该方法
            console.log(this.ul.querySelectorAll("li").length)
        })
    }
}

export default TodoList