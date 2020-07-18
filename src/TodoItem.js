import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './css/anim.css'
class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    state = {  }
    render() { 
        return ( 
           
            <li onClick={this.handleClick}>{this.props.content}</li>

         );
    }
    handleClick(){
        // deleteItem 父类传过来的函数对象
        this.props.deleteItem(this.props.index)
    }
}

TodoItem.propTypes = {
    content: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    deleteItem: PropTypes.func
}

TodoItem.defaultProps={
    content: '默认值'
}
export default TodoItem;