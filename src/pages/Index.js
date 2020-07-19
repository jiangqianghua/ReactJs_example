import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Index extends Component {
    state = { 
        list: [
            { cid: 123,title: '我的博客1'},
            { cid: 444,title: '我的博客2'},
            { cid: 555,title: '我的博客3'},

        ]
     }

     constructor(props){
         super(props)
         this.props.history.push('/home/')
     } 
    render() { 
        return ( 
            <div>
                <h1>index</h1>
                <ul>
                    {
                        this.state.list.map((item) => {
                            return (
                                <li key={item.cid}>
                                    <Link to={'/list/' + item.cid}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
 
export default Index;