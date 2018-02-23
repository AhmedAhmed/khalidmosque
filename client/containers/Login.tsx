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
  username: string;
  password: string;
}

class Login extends React.Component<any, State> {

  constructor(props: any) {
    super(props);

    this.state = {
      username:"",
      password:""
    }
  }

  componentWillMount() {

  }

  _login = (evt:any) => {
    evt.preventDefault();
    this.props.actions.loginUser(this.state.username, this.state.password)
                      .then((response:any) => {
                        if(response.payload.status == 200){
                          localStorage.setItem("token", response.payload.token);
                        }
                      });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/static/images/logo.png" height="150px" width="150px" />
        </div>
        <div className={styles.box}>
          <div className={styles.boxWrap}>
            <form onSubmit={this._login.bind(this)}>
            <input type="text" className={styles.inputtext} name="username" onKeyUp={(evt:any) => this.setState({username: evt.target.value})} placeholder="Username" />
            <input type="password" className={styles.inputtext} name="password" onKeyUp={(evt:any) => this.setState({password: evt.target.value})} placeholder="Password" />
            <button onClick={this._login.bind(this)} className={styles.blueButton}>Login</button>
            </form>
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
