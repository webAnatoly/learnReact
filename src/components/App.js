import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './Clock';
import Toggle from './Toggle';
import NameForm from './NameForm';
import Calculator from './Calculator';

let path = 'https://gist.githubusercontent.com/webAnatoly/8c826fc11c3e13788cff6ccb0ebc2d5d/raw/f3c45ee451a06c1cabcc78a8ef1a3d6d472dbd1c/test.json';
let result = '';
async function getJSON2() {
  // получить json с сервера
  let response = await fetch(path);
  if (response.ok) {
    let jsonAsObj = await response.json();
    console.log('test async: ', jsonAsObj);
    result = jsonAsObj;
  }
}
getJSON2();
console.log('test sync: ', result);

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
      </div>
    )
  }
}