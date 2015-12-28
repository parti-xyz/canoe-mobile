/**
 * # app.js
 *  **Note** a lot of this is boilerplate which is also in Login &
 *  Profile
 *
 *  After setting up the Redux actions, props and dispatch, this
 * class ```renders``` either the ```Login``` or ```Tabbar```
 */
'use strict';

/*
 * ## Imports
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import { Map } from 'immutable';
import React, {
  Text
} from 'react-native';

/**
 * Project imports
 */
const Login = require('./Login').default;

/**
 * Project actions
 */
import * as authActions from '../reducers/auth/authActions';
import * as deviceActions from '../reducers/device/deviceActions';

/**
 * We only have one state to worry about
 */
const {
  LOGIN_STATE_LOGOUT
} = require('../lib/constants').default;

/**
 * ## App class
 */
let App = React.createClass({
  /**
   * The initial state will be logged out
   */
  getInitialState: function() {
    return {
      loggedIn: false
    };
  },
  componentWillReceiveProps: function(props) {
    this.setState ({
      loggedIn: false
    });
  },
  render: function() {
    return (this.state.loggedIn ? <Text>Login OK</Text> : <Login/>);
  }
});

/**
 * ## Redux boilerplate
 */
const actions = [
  deviceActions,
  authActions
];

/**
 *  Save that state
 */
function mapStateToProps(state) {
  return {
      ...state
  };
};

/*
 * Bind all the functions from the ```actions``` and bind them with
 * ```dispatch```

 */
function mapDispatchToProps(dispatch) {

  const creators = Map()
          .merge(...actions)
          .filter(value => typeof value === 'function')
          .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);