import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './Clock';
import Toggle from './Toggle';
import NameForm from './NameForm';
import Calculator from './Calculator';
import FilterableProductTable from './FilterableProductTable';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((number, index) => <li key={index}>{number}</li>);
    return (
      <div style={{marginLeft:"100px"}}>
        <Clock />
        <Clock />
        <Toggle/>
        <ul>{doubled}</ul>
        <br/>
        <NameForm/>
        <br/>
        <Calculator/>
        <FilterableProductTable/>
      </div>
    )
  }
}