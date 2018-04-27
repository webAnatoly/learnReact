import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './Clock';
import Toggle from './Toggle';
import NameForm from './NameForm';
import Calculator from './Calculator';
import FilterableProductTable from './FilterableProductTable';
import style from './app.css'

import getJSON from '../getJSON';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((number, index) => <li key={index}>{number}</li>);
    return (
      <div className={style.position}>
        <FilterableProductTable products={this.state.products}/>
        <Clock />
        <Clock />
        <Toggle/>
        <ul>{doubled}</ul>
        <br/>
        <NameForm/>
        <br/>
        <Calculator/>
      </div>
    )
  }

  componentDidMount() {
    getJSON('https://gist.githubusercontent.com/webAnatoly/8c826fc11c3e13788cff6ccb0ebc2d5d/raw/f3c45ee451a06c1cabcc78a8ef1a3d6d472dbd1c/test.json')
      .then(value => {
        this.setState({
          products: value
        })
      })
  }
}