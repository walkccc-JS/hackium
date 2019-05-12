import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Navbar from './Navbar';
import Landing from './Landing';
import Dashboard from './Dashboard';
import PostNew from './posts/PostNew';

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/posts" component={Dashboard} />
          <Route path="/posts/new" component={PostNew} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
