declare var System: any;

import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { asyncComponent } from '../utils/asyncComponent';

import AppActions from '../actions';
import { Dispatch } from 'redux';

interface Props {
  actions: any;
}

const styles = require("./home.scss");

interface State {
  view: boolean;
}

class Login extends React.Component<any, State> {

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
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/static/images/logo.png" height="150px" width="150px" />
        </div>
        <div className={styles.box}>
          <div className={styles.boxWrap}>
            <input type="text" className={styles.inputtext} name="username" placeholder="Username" />
            <input type="password" className={styles.inputtext} name="password" placeholder="Password" />
            <button className={styles.blueButton}>Login</button>
          </div>
        </div>
        <Link to="/signup" className={styles.forgotLink}>← Sign up for an Account.</Link>
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
)(Login);