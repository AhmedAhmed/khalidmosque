declare var System: any;

import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';

import { asyncComponent } from '../utils/asyncComponent';

import * as AppActions from '../actions';
import { Dispatch } from 'redux';

import {Login, Signup} from "./";

interface Props {
  actions: any;
}

const styles = require("./home.scss");

interface State {
  view: boolean;
}

class Home extends React.Component<Props, State> {

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
      <BrowserRouter>
        <section className={styles.page}>
          <main className={styles.main}>
            <section className={styles.section}>
              <Switch>
                <Route exact path="/" render={(props) => <Login {...this.props} {...props} />} />
                <Route path="/login" render={(props) => <Login {...this.props} {...props} />} />
                <Route path="/signup" render={(props) => <Signup {...this.props} {...props} />} />
              </Switch>
            </section>
          </main>
        </section>
      </BrowserRouter>
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
)(Home);
