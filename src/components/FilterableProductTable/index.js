import React from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import style from './style.css';

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    }
  }

  handleClick(e){
    console.log(this.props.products);
  }

  onHandleFilterTextChange(value) {
    this.setState({
      filterText: value
    })
  }

  onHandleInStockChange(value) {
    this.setState({
      inStockOnly: value
    })
  }  

  render() {
    return (
      <div className={style.main}>
        <SearchBar 
          onHandleFilterTextChange={this.onHandleFilterTextChange.bind(this)}
          onHandleInStockChange={this.onHandleInStockChange.bind(this)}
          />
        <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
        <button onClick={this.handleClick.bind(this)}>test</button>
      </div>
    );
  }
}