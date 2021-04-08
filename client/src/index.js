import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomeContainer } from './containers/HomeContainer';
import { CreateContainer } from './containers/CreateContainer';
import { TrackingContainer } from './containers/TrackingContainer';
import { LoginContainer } from './containers/LoginContainer';

ReactDOM.render(
    <Router>
        <Header />
        <Switch>
            <Route path='/' component={HomeContainer} exact />
            <Route path='/create/' component={CreateContainer} exact />
            <Route path='/track/' component={TrackingContainer} exact />
            <Route path='/track/:slug' component={TrackingContainer} exact />
            <Route path='/login/' component={LoginContainer} exact />
        </Switch>
    </Router>,
    document.getElementById('root')
);