import * as React from 'react';

export const asyncComponent = (getComponent: Function) => class AsyncComponent extends React.Component {

  state : {
    Component : any
  }

  private Component : React.Component<any, any>;

  constructor(props:Object){
    super(props);

    this.Component = null;

    this.state = {
      Component : this.Component
    }
  }

  componentDidMount(){
    if(!this.state.Component){
      getComponent().then( ( Component: React.Component ) : void => {
        this.Component = Component
        this.setState({ Component });
      });
    }
  }

  componentWillUnmount(){
    this.setState({Component: {}});
  }

  render():JSX.Element {
    const {Component} = this.state;
    if(Component){
      return <Component {...this.props} />
    }
    return null;
  }
}
