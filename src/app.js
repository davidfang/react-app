import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute ,browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './components/Main'; // Our custom react component


import User from './components/User';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import Body from './components/Body';
import Ucenter from './components/Ucenter';
import News from './components/News';
import Help from './components/Help';
import {hasLogin,requireAuth,noAuth} from './components/Auth';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
//ReactDOM.render(<Main />, document.getElementById('app'));
ReactDOM.render((
    <Router history={browserHistory}>
        <Route  path="/" component={Main}>
            <IndexRoute component={Body} />
            <Route path="ucenter" component={Ucenter} />
            <Route path="news" component={News} />
            <Route path="help" component={Help} />
        </Route>
        <Route  path="/user/" component={User} >
            <IndexRoute onEnter={noAuth} component={SignUp} />
            <Route onEnter={noAuth}  path="SignUp" component={SignUp} />
            <Route onEnter={noAuth} path="SignIn" component={SignIn} />
            <Route onEnter={requireAuth} path="SignOut" component={SignOut} />
        </Route>
    </Router>
), document.getElementById('app'))
