import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onHandleFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    console.dir(e.target.checked);
    this.props.onHandleInStockChange(e.target.checked);
  }

  render() {
    return (
      <form onSubmit={ e => e.preventDefault() }>
        <input type="text" placeholder="Search..." onChange={this.handleFilterTextChange}/>
        <p>
          <input type="checkbox" onChange={this.handleInStockChange}/>
          {' '} Only show products in stock
        </p>
      </form>
    );
  }
}