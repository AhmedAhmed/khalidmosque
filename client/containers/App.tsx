declare var System: any;

import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Router,Route, Switch, Link } from 'react-router-dom';

import {asyncComponent} from '../utils/asyncComponent';

import * as AppActions from '../actions';
import Home from './Home';

import { Dispatch } from 'redux';

interface Props {
  actions: any;
}

const styles = require("../base.scss");

class App extends React.Component<any,any> {

  constructor( props: any ){
    super(props);
  }

  componentWillMount(){
    
  }

  render(){
    return (
      <span>
        <Home />
      </span>
    )
  }
}

interface State {
  
}

const mapStateToProps = (state: State) => ({
  
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions: bindActionCreators(AppActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
