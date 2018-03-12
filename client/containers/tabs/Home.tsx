declare var System: any;

import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';

import { asyncComponent } from '../../utils/asyncComponent';

import AppActions from '../../actions';
import Tile from '../../components/ui/tile';
import WpPost from '../../components/ui/wpPost';
import { Dispatch } from 'redux';

interface Props {
  actions: any;
  user: object|any;
  wp_posts: any;
}

const styles = require("./tabs.scss");

interface State {
  
}

class Home extends React.Component<Props, State> {

  public static defaultProps:Partial<any> = {
    wp_posts: {
      data: []
    }
  }

  constructor(props: any) {
    super(props);
  }

  _wp_renderer = (): JSX.Element[] => this.props.wp_posts.data.map( (item:any, index:number) => <WpPost {...this.props} key={item.id} post={item}/> );

  componentDidMount() : void {
    //fetch posts.
    this.props.actions.getWpPosts();
  }

  render() :JSX.Element {
    return (
      <section className={styles.dashmain}>
        <header className={styles.header}>
          <h2>Overview</h2>
        </header>
        <Tile flex="1" background="#27ae60" title="Masjid Prayer Times" theme="dark">
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
        </Tile>
        <Tile flex="0 1" background="#FFFFFF" title="Insights" theme="light">
          <div className={styles.wp_list}>
            {this._wp_renderer()}
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
)(Home);
