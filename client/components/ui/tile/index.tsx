import * as React from 'react'

const styles = require("./index.scss");

interface State {

}

interface Props {
  theme?: string;
  title: string;
  background?: string;
  flex?: string;
}

export default class Tile extends React.Component<Props, State> {

  public static defaultProps: Partial<Props> = {
    theme:"dark",
    background:"#FFFFFF",
    flex: "1"
  }

  constructor(props:any){
    super(props);
  }

  renderStyles = (): string => this.props.theme == "dark" ? styles.tile + " " + styles.tileDark: styles.tile + " " + styles.tileLight;

  render():JSX.Element {
    return (
      <section style={{ "background": this.props.background}} className={this.renderStyles()}>
        <div className={styles.tileHeader}>
          <span className={styles.tileTitle}>{this.props.title}</span>
        </div>
        <div style={{ "flex": this.props.flex }} className={styles.tileContent}>
          {this.props.children}
        </div>
      </section>
    );
  }
}