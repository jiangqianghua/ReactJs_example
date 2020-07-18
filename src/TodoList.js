import React, {Component, Fragment} from 'react'

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
                    <input value={this.state.inputValue}
                    onChange={this.inputChange.bind(this)}  /> 
                    <button onClick={this.addList.bind(this)}>增加服务器</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return this.renderListItem(item, index) 
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    renderListItem(item, index){
        return (
            <li key={index}>{item}<button onClick={this.delList.bind(this, index)}>删除</button></li>
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

    delList(index) {
        // 一定要先定义局部变量在作删除
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default TodoList