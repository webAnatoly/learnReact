import React from 'react';
import ReactDOM from 'react-dom';

export default class ShowTime extends React.Component {
  state = {a: 'test'}
  render() {
    const { h, m, s } = this.props.clockState.time;
    return (
      <div><div>{h}:{m}:{s}</div> <button onClick={this.props.tick}>Click me</button></div>
    )
  }
}