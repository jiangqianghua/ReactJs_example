import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
const data = [
    '11222333',
    '33333333333',
    '4444444444'
]

class TodoList extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{margin: '10px'}}>
                <div>
                    <Input 
                    placeholder="write something" 
                    style={{width: '250px', marginRight: '10px'}} />

                    <Button type="primary" > 增加</Button>
                </div>

                <div style={{margin: '10px', width: '300px'}}>
                    <List
                        bordered
                        dataSource={data}
        renderItem={(item) => (<List.Item>{item}</List.Item>)}
                    ></List>
                </div>
            </div>
         );
    }
}
 
export default TodoList;