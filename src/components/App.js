import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './Clock';
import Toggle from './Toggle';
import NameForm from './NameForm';

export default class App extends React.Component {

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
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((number, index) => <li key={index}>{number}</li>);
    return (
      <div style={{marginLeft:"100px"}}>
        <div><Clock globalState={this.state} tick={this.tickForClock.bind(this)} /></div>
        <div><Clock globalState={this.state} tick={this.tickForClock.bind(this)} /></div>
        <Toggle/>
        <ul>{doubled}</ul>
        <br/>
        <NameForm/>
        <br/>
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