import React from 'react';
import ReactDOM from 'react-dom';

import ShowTime from './ShowTime';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ShowTime tick={this.props.tick.bind(this)} globalState={this.props.globalState} />
        <div>this is any property from state: {this.props.globalState.any}</div>
      </div>
    )
  }

  componentDidMount() {
    // this.props.tick();
    // const intervalID = setInterval(() => { this.props.tick() }, 1000);
    // this.tick();
  }

}