declare var System: any;

import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Router, Route, Switch, NavLink } from 'react-router-dom';

import { asyncComponent } from '../utils/asyncComponent';

import AppActions from '../actions';
import { Dispatch } from 'redux';

import {Home, Insights, Notifications, Prayers, Settings, Users, Wordpress} from './tabs'

interface Props {
  actions: any;
  history: any;
  user: any;
}

const styles = require("./dash.scss");

interface State {
  
}

class Dashboard extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
  }

  componentDidMount(){
    //send people back to main page if not logged in.
    
  }

  _logout = (evt:any) => {
    evt.preventDefault();

    this.props.actions.logoutHandler();
  }

  render() {
    return (
      <BrowserRouter>
        <section className={styles.page}>
          <main className={styles.main}>
            <div className={styles.sidebar} role="navigation">
              <div className={styles.header}>{this.props.user.data.name}</div>
              <ul className={styles.nav_list}>
                <li className={styles.nav_item}>
                  <NavLink to="/" exact activeClassName={styles.selected}>
                    <span className={styles.NavIcon +" "+ styles.NavIconHome}></span>
                    <span className={styles.NavText}>Dashboard</span>
                  </NavLink>
                </li>
                <li className={styles.nav_item}>
                  <NavLink to="/notifications" activeClassName={styles.selected}>
                    <span className={styles.NavIcon + " " + styles.NavIconNotification}></span>
                    <span className={styles.NavText}>Notifications</span>
                  </NavLink>
                </li>
                <li className={styles.nav_item}>
                  <NavLink to="/prayer" activeClassName={styles.selected}>
                    <span className={styles.NavIcon + " " + styles.NavIconPrayer}></span>
                    <span className={styles.NavText}>Prayer</span>
                  </NavLink>
                </li>
                <li className={styles.nav_item}>
                  <NavLink to="/wordpress" activeClassName={styles.selected}>
                    <span className={styles.NavIcon + " " + styles.NavIconWP}></span>
                    <span className={styles.NavText}>WordPress</span>
                  </NavLink>
                </li>
                <li className={styles.nav_item}>
                  <NavLink to="/insights" activeClassName={styles.selected}>
                    <span className={styles.NavIcon + " " + styles.NavIconInsights}></span>
                    <span className={styles.NavText}>Insights</span>
                  </NavLink>
                </li>
                <li className={styles.nav_item}>
                  <NavLink to="/users" activeClassName={styles.selected}>
                    <span className={styles.NavIcon + " " + styles.NavIconUsers}></span>
                    <span className={styles.NavText}>Users</span>
                  </NavLink>
                </li>
                <li className={styles.nav_item}>
                  <NavLink to="/settings" activeClassName={styles.selected}>
                    <span className={styles.NavIcon + " " + styles.NavIconSettings}></span>
                    <span className={styles.NavText}>Settings</span>
                  </NavLink>
                </li>
                <li className={styles.nav_item}>
                  <NavLink onClick={this._logout.bind(this)} to="/logout" activeClassName={styles.selected}>
                    <span className={styles.NavIcon + " " + styles.NavIconLogout}></span>
                    <span className={styles.NavText}>Logout</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.content}>
              <Switch>
                <Route exact path="/" render={(props) => <Home {...this.props} {...props} />} />
                <Route exact path="/notifications" render={(props) => <Notifications {...this.props} {...props} />} />
                <Route exact path="/prayer" render={(props) => <Prayers {...this.props} {...props} />} />
                <Route exact path="/wordpress" render={(props) => <Wordpress {...this.props} {...props} />} />
                <Route exact path="/insights" render={(props) => <Insights {...this.props} {...props} />} />
                <Route exact path="/users" render={(props) => <Users {...this.props} {...props} />} />
                <Route exact path="/settings" render={(props) => <Settings {...this.props} {...props} />} />
              </Switch>
            </div>
          </main>
        </section>
      </BrowserRouter>
    );
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
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
