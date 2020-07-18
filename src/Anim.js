import React, { Component } from 'react';
import './css/anim.css'
import { CSSTransition } from 'react-transition-group';

class Anim extends Component {
    state = { 
        isShow: true
     }
    render() { 
        return (  
            <div>
                {/* unmountOnExit 表示隐藏后自动删除改元素 */}
                <CSSTransition
                 in={this.state.isShow}
                 timeout={2000}
                 classNames="boss-text"
                 unmountOnExit
                >
                    <div >boss任务</div>
                </CSSTransition>
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