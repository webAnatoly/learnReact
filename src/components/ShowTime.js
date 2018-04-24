import React from 'react';
import ReactDOM from 'react-dom';

export default class ShowTime extends React.Component {
  render() {
    const { h, m, s } = this.props.globalState.time;
    return (
      <div><div>{h}:{m}:{s}</div> <button onClick={this.props.tick}>Click me</button></div>
    )
  }
}