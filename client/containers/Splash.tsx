declare var System: any;

import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';

import { asyncComponent } from '../utils/asyncComponent';

import AppActions from '../actions';
import { Dispatch } from 'redux';

interface Props {
  actions: any;
}

const styles = require("./splash.scss");

interface State {
  view: boolean;
}

class Splash extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);

    this.state = {
      view: true
    }
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className={styles.splash}>
        <img src="/static/images/logo.png" height="200px" width="200px"/>
      </div>
    )
  }
}

interface State {

}

const mapStateToProps = (state: State) => ({

});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions: bindActionCreators(AppActions, dispatch),
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
