import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FlutterPage from './video/FlutterPage'
import ReactPage from './video/ReactPage'
import VuePage from './video/VuePage'

function Video(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/react/">React教程</Link></li>
                    <li><Link to="/video/flutter/">Flutter教程</Link></li>
                    <li><Link to="/video/vue/">Vue教程</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div>
                    <h3>视频教室</h3>
                    <Route path="/video/react/" component={ReactPage}></Route>
                    <Route path="/video/flutter/" component={FlutterPage}></Route>
                    <Route path="/video/vue/" component={VuePage}></Route>
                </div>
            </div>
        </div>
    )
}

export default Video