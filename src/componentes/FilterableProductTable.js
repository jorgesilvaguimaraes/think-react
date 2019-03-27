import React, {Component} from 'react';

import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';


export default class FilterableProductTable extends Component {
  
  
  constructor(props)
  {
    super(props);
    this.state = {
      filterText :'',
      inStockOnly :false
    }

    this.hadleFilterTextChange = this.hadleFilterTextChange.bind(this);
    this.hadleInStockChange    = this.hadleInStockChange.bind(this);
  }

  
  hadleFilterTextChange(filterText)
  {
    this.setState({filterText : filterText});
  }

  hadleInStockChange(inStockOnly)
  {
    this.setState({inStockOnly : inStockOnly});
  }

    
  render() {
    return (
      <div>
        <SearchBar inStockOnly={this.state.inStockOnly} filterText={this.state.filterText} onFilterTextChange={this.hadleFilterTextChange} onInStockChange={this.hadleInStockChange}/>
        <ProductTable products={this.props.products} inStockOnly={this.state.inStockOnly} filterText={this.state.filterText}   />
      </div>
    );
  }
}