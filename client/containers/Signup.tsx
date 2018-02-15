declare var System: any;

import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { asyncComponent } from '../utils/asyncComponent';

import * as AppActions from '../actions';
import { Dispatch } from 'redux';

const styles = require("./home.scss");

interface Props {
  actions: any;
}

interface State {
  view: boolean;
}

class Signup extends React.Component<any, State> {

  constructor(props: any) {
    super(props);
  }

  componentWillMount() {

  }

  _register = (evt:any) => {
    evt.preventDefault();
    alert("hello");
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/static/images/logo.png" height="150px" width="150px" />
        </div>
        <div className={styles.box}>
          <div className={styles.boxWrap}> 
            <form className={styles.form} onSubmit={this._register.bind(this)}>
              <input type="text" className={styles.inputtext} name="name" placeholder="Full Name" />
              <input type="text" className={styles.inputtext} name="username" placeholder="Username" />
              <input type="text" className={styles.inputtext} name="email" placeholder="Email" />
              <input type="password" className={styles.inputtext} name="password" placeholder="Password" />
              <button className={styles.redButton}>Register</button>
            </form>
          </div>
        </div>
        <Link to="/login" className={styles.forgotLink}>← Back to Login</Link>
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
)(Signup);
