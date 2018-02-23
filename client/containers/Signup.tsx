declare var System: any;

import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { asyncComponent } from '../utils/asyncComponent';

import AppActions from '../actions';
import { Dispatch } from 'redux';

const styles = require("./home.scss");

interface Props {
  actions: any;
  history: any;
}

interface State {
  name: string;
  email: string;
  username: string;
  password: string;
}

class Signup extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);

    this.state = {
      name: "",
      email: "",
      username: "",
      password: ""
    }
  }

  _register = (evt:any) => {
    evt.preventDefault();

    this.props.actions.registerUser( this.state.name, this.state.email, 
        this.state.username, this.state.password, "user" ).then((response:any) => {
          this.props.history.push("/");
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
            <form className={styles.form} onSubmit={this._register.bind(this)}>
              <input type="text" className={styles.inputtext} name="name" placeholder="Full Name" onKeyUp={(evt:any) => this.setState({name:evt.target.value})} />
              <input type="text" className={styles.inputtext} name="username" placeholder="Username" onKeyUp={(evt: any) => this.setState({ username: evt.target.value })} />
              <input type="text" className={styles.inputtext} name="email" placeholder="Email" onKeyUp={(evt: any) => this.setState({ email: evt.target.value })} />
              <input type="password" className={styles.inputtext} name="password" placeholder="Password" onKeyUp={(evt: any) => this.setState({ password: evt.target.value })} />
              <button className={styles.blueButton}>Register</button>
            </form>
          </div>
        </div>
        <Link to="/" className={styles.forgotLink}>← Have an account? Sign In.</Link>
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
