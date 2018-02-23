declare var System: any;

import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Router,Route, Switch, Link } from 'react-router-dom';

import {asyncComponent} from '../utils/asyncComponent';

import AppActions from '../actions';
import {Splash, Home, Dashboard} from './';

import { Dispatch } from 'redux';

interface Props {
  actions: any;
  user:any;
  getToken: Function;
}

const styles = require("../base.scss");

class App extends React.PureComponent<Props,any> {

  constructor( props: any ){
    super(props);
  }

  componentWillMount(){
    this.props.getToken();
  }

  _renderComponent = () : JSX.Element => {
    if(this.props.user.isFetching){
      return <Splash />
    } else {
      if (this.props.user.isLoggedIn || localStorage.getItem("token") != undefined ){
        return <Dashboard />
      } else {
        return <Home />
      }
    }
  }

  render(){
    return (
      <span>
        {this._renderComponent()} 
      </span>
    )
  }
}

interface State {
  user: object;
}

const mapStateToProps = (state: State) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions: bindActionCreators(AppActions, dispatch),
  getToken: () => {
    const token = localStorage.getItem("token");
    dispatch(AppActions.getPresence(token));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
