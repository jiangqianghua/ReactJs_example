import React, { Component } from 'react';
import axios from 'axios';

class TextAxios extends Component {
    state = { 
        list: []
     }
    render() { 
        return ( 
            <div></div>
         );
    }

    componentDidMount () {
        // 建议在这里写网络请求
        axios.get('https://www.baidu.com')
        .then((res) => {
            console.log('axios获取成功')
            console.log(res)
        }).catch((error) => {
            console.log('axios 请求失败 ' + error)
        })
    }
}
 
export default TextAxios;