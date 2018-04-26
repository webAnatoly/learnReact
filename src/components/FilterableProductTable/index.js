import React from 'react';
import getJSON from '../../getJSON';
import style from './style.css';

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.data = "here should be fetched data from server"
  }

  handleClick(e){
    console.log(this.data);
  }

  componentDidMount() {
    getJSON('https://gist.githubusercontent.com/webAnatoly/8c826fc11c3e13788cff6ccb0ebc2d5d/raw/f3c45ee451a06c1cabcc78a8ef1a3d6d472dbd1c/test.json')
    .then(value => {
      this.data = value;
    });
  }


  render() {
    return(
      <div className={style.mainTable}>
        For future table 
        <button onClick={this.handleClick.bind(this)}>test</button>
      </div>
    )
  }
}