declare var System: any;

import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';

import { asyncComponent } from '../../utils/asyncComponent';

import AppActions from '../../actions';
import Paper from '../../components/ui/paper';
import { Dispatch } from 'redux';

interface Props {
  actions: any;
  user: object|any;
}

const styles = require("./tabs.scss");

interface State {
  view: boolean;
}

class Home extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
  }

  componentWillMount() : void {
    
  }

  render() :JSX.Element {
    return (
      <section className={styles.dashmain}>
        <header className={styles.header}>
          <h2>Dashboard</h2>
        </header>
        <Paper flex="1" background="#27ae60" title="Masjid Prayer Times" theme="dark">
          <div className={styles.prayerSection}>
            <h2>Fajr</h2>
            <span>6:00 AM</span>
          </div>
          <div className={styles.prayerSection}>
            <h2>Dhuhr</h2>
            <span>1:00 PM</span>
          </div>
          <div className={styles.prayerSection}>
            <h2>Asr</h2>
            <span>4:00 PM</span>
          </div>
          <div className={styles.prayerSection}>
            <h2>Maghrib</h2>
            <span>6:06 PM</span>
          </div>
          <div className={styles.prayerSection}>
            <h2>Isha</h2>
            <span>7:45 PM</span>
          </div>
        </Paper>
        <Paper flex="0 1" background="#FFFFFF" title="Overview" theme="light">
          
        </Paper>
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
)(Home);
