import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import Splash from './components/Splash'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import UserStore from './stores/UserStore'
import LoginSuccess from './components/UserProfile/LoginSuccess'
import EditProfile from './components/UserProfile/EditProfile'
import Logout from './components/Logout'


render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Splash} />
      <Route path='/register' component={RegisterPage}/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/loginSuccess' component={LoginSuccess}/>
      <Route path='/editProfile' component={EditProfile}/>
      <Route path='/logout' component={Logout}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
