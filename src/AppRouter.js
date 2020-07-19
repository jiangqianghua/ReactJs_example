import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Index() {
    return <h1>this is index</h1>
}

function List() {
    return <h2>this is list</h2>
}

function AppRouter() {
    return (
        <Router>
            <ul>
                <input />
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/list/'>列表</Link></li>
            </ul>
            {/* exact 表示精确匹配 */}
            <Route path="/" exact component={Index}></Route>
            <Route path="/list" exact component={List}></Route>
        </Router>
    )
}

export default AppRouter