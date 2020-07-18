import React, { Component } from 'react';
import './css/anim.css'

class Anim extends Component {
    state = { 
        isShow: true
     }
    render() { 
        return (  
            <div>
                <div className={this.state.isShow ? 'show' : 'hiden'}>boss任务</div>
                <div>
                    <button onClick={this.toToggole.bind(this)}>显示boss</button>
                </div>
            </div>
        );
    }

    toToggole(){
        this.setState({
            isShow: !this.state.isShow
        })
    }
}
 
export default Anim;