import React, { Component } from 'react';

class Example extends Component {
    state = {  
        count: 0
    }
    render() { 
        return ( 
            <div>
                <p>you click {this.state.count} times</p>
                <button onClick={this.addCount.bind(this)}>按钮</button>
            </div>
         );
    }
    addCount() {
        this.setState({
            count: this.state.count + 1
        });
    }
}
 
export default Example;