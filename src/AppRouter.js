import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Index from './pages/Index'
import Video from './pages/Video'
import WorkPlace from './pages/WorkPlace'
import routeConfig from './NavConfig'
import './index.css'
class AppRouter extends Component {
    state = {  }
    
    render() { 
        return ( 
            <Router>
                <div className="mainDiv">
                    <div className="leftNav">
                        <h3>一级导航</h3>
                        <ul>
                            {/* <li><Link to='/'>博客首页</Link></li>
                            <li><Link to='/video'>视频教程</Link></li>
                            <li><Link to='/workplace'>职场技能</Link></li> */}
                            {
                                routeConfig.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={item.path}>{item.title}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="rightMain">
                        {/* <Route path="/" exact component={Index}></Route>
                        <Route path="/video/" component={Video}></Route>
                        <Route path="/workplace/" component={WorkPlace}></Route> */}
                        {
                            routeConfig.map((item, index) => {
                                return (
                                    <Route key={index} path={item.path} exact={item.exact} component={item.component}></Route>
                                )
                            })
                        }
                    </div>
                </div>
            </Router>
         );
    }
}
 
export default AppRouter;