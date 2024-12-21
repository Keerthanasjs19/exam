import React from 'react';

const withNoProducts = (Component) => {
  return ({ products=[], ...props }) => {
    if (products.length === 0) {
      return <h3>No Products Available</h3>;
    }
    return <Component products={products} {...props} />;
  };
};

export default withNoProducts;