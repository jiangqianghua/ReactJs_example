import React, { Component } from 'react';

class LiftSycle extends Component {
    state = { 
        txt: 'init'
     }

    constructor(props) {
        super(props)
        this.log('constructor 数据初始化')
        this.btnClick = this.btnClick.bind(this)
    }
    btnClick() {
        this.log('开始改变state')
        this.setState({
            txt: this.state.txt + '1'
        }, () => {
            this.log('改变state后， 渲染完成触发')
        })
    }
    // 组件第一次存在于dom中，函数是不会被执行
    // 如果已经存在dom中，函数不会被执行
    componentWillReceiveProps() {
        this.log("componentWillReceiveProps 在接受父组件改变后的props需要重新渲染组件时用到的比较多")
    }

    componentWillMount() {
        this.log("componentWillMount 组件将要被挂在")
    }

    componentDidMount() {
        this.log("componentWillMount 组件挂在完成")
    }
    render() { 
        this.log("render 组件挂在中")
        return ( 
            <div>
                <div>{this.state.txt}</div>
                <button onClick={this.btnClick}>更新</button>
            </div>
         );
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 主要用于性能优化
        this.log("shouldComponentUpdate state改变或则props改变之后触发")
        // 如果return false，render 将不会被执行
        // if(nextProps.content  !== this.props.content) {
        //     return true
        // } else {
        //     return false
        // }
        return true

    }

    componentWillUpdate() {
        this.log("componentWillUpdate 在shouldComponentUpdate返回true后触发")
    }

    componentDidUpdate() {
        this.log("componentDidUpdate render组件更新完后触发")
    }

    componentWillUnmount() {
        this.log("componentWillUnmount 组件被删除前执行")
    }

    log(msg) {
        console.log(msg)
    }
}
 
export default LiftSycle;