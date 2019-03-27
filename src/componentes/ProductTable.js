import React, {Component} from 'react';

import ProductCategoryRow from './ProductCategoryRow.js';
import ProductRow from './ProductRow.js';


export default class ProductTable extends Component {
    render() {

      const inStockOnly = this.props.inStockOnly;
      const filterText  = this.props.filterText;

      const rows = [];
      let lastCategory = null;
      
      this.props.products.forEach((product) => {
        
        let {name: nome, price} = product;
        if( ! [nome, price].some(campo => campo.toString().toUpperCase().indexOf(filterText.toUpperCase()) !== -1)  )
        {
          return ;
        }

        if( inStockOnly && !product.stocked ){
          return ;
        }
        
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name} />
        );
        lastCategory = product.category;
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
}
  