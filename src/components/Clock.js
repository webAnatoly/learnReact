import React from 'react';
import ReactDOM from 'react-dom';

import ShowTime from './ShowTime';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: { h: '00', m: '00', s: '00' },
      any: 'any string'
    }
  }

  tickForClock() {
    const curDate = new Date();
    const h = curDate.getHours();
    const m = curDate.getMinutes();
    const s = curDate.getSeconds();
    this.setState({
      time: {
        h: h < 10 ? `0${h}` : h,
        m: m < 10 ? `0${m}` : m,
        s: s < 10 ? `0${s}` : s
      }
    })
  }

  render() {    
    return (
      <div>
        <ShowTime tick={this.tickForClock.bind(this)} clockState={this.state} />
      </div>
    )
  }

  componentDidMount() {
    this.intervalID = setInterval(() => { this.tickForClock() }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

}