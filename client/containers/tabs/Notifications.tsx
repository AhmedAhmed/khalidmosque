declare var System: any;

import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';

import { asyncComponent } from '../../utils/asyncComponent';

import AppActions from '../../actions';
import Tile from '../../components/ui/tile'

import { Dispatch } from 'redux';

interface Props {
  actions: any;
}

const styles = require("./notifications.scss");

interface State {
  
}

class Notifications extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);

    this.state = {

    }
  }

  componentWillMount() {

  }

  _newNotification = (evt:any) => {
    evt.preventDefault();
    alert("Hello");
  }

  render() {
    return (
      <section className={styles.dashmain}>
        <header className={styles.header}>
          <h2>Notifications</h2>
        </header>
        <Tile flex="0 1" title="Completed" theme="dark" background="#27ae60">
          
        </Tile>
        <Tile flex="0 1" title="Notification Drafts" theme="light" background="#FFFFFF">
          <div className={styles.actionHeader}>
            <a href="/" className={styles.btn+" "+styles.btn_green} onClick={this._newNotification.bind(this)}>New Notification</a>
            <a href="/" className={styles.btn + " " + styles.btn_red} onClick={this._newNotification.bind(this)}>Remove</a>
          </div>
        </Tile>
      </section>
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
)(Notifications);
