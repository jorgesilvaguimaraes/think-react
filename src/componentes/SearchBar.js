import React, {Component} from 'react';


export default  class SearchBar extends Component {

  constructor(props)
  { 
    super(props);

    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
    this.hadleFilterTextChange   = this.hadleFilterTextChange.bind(this);
  }

  hadleFilterTextChange(event)
  {
    this.props.onFilterTextChange(event.target.value);
  }

  handleInStockOnlyChange(event)
  {
    this.props.onInStockChange(event.target.checked);
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.hadleFilterTextChange}/>
        <p>
          <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleInStockOnlyChange} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}