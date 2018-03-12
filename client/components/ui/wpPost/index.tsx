/**
 * Wordpress Post Layout.
 * @author Ahmed Ahmed
 */
import * as React from 'react'

const styles = require("./index.scss");

interface Props {
  post:any;
}

export default class WpPost extends React.Component<Props, any> {

  public static defaultProps: Partial<Props> = {
    post: null
  }

  constructor(props: any){
    super(props);
  }

  _nav = () => {
    window.location.href = this.props.post.link;
  }

  render():JSX.Element {
    return (
      <div className={styles.container} onClick={this._nav.bind(this)}>
        <div className={styles.imageHolder}>
          <img src={this.props.post.better_featured_image.source_url} width="350px"/>
        </div>
        <div className={styles.meta}>
          <div className={styles.title}>
            {this.props.post.title.rendered.replace(/(<([^>]+)>)/ig, "")}
          </div>
          <div className={styles.description}>
            {this.props.post.excerpt.rendered.replace(/(<([^>]+)>)/ig, "")}
          </div>
        </div>
      </div>
    );
  }

}