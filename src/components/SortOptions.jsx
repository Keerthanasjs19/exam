// // // import React, { useReducer } from 'react';
// // // import { sortReducer } from '../reducers/sortReducer';

// // // const SortOptions = ({ products, setSortedProducts }) => {
// // //   const [state, dispatch] = useReducer(sortReducer, products);

// // //   const handleSort = (type) => {
// // //     const sorted = sortReducer(products, { type });
// // //     setSortedProducts(sorted);
// // //     dispatch({ type });
// // //   };

// // //   return (
// // //     <div className="sort-options">
// // //       <button onClick={() => handleSort('SORT_BY_PRICE_LOW_TO_HIGH')}>Price: Low to High</button>
// // //       <button onClick={() => handleSort('SORT_BY_PRICE_HIGH_TO_LOW')}>Price: High to Low</button>
// // //       <button onClick={() => handleSort('SORT_BY_NAME_A_Z')}>Name: A-Z</button>
// // //       <button onClick={() => handleSort('SORT_BY_NAME_Z_A')}>Name: Z-A</button>
// // //     </div>
// // //   );
// // // };

// // // export default SortOptions;
// // import React from 'react';

// // const SortOptions = ({ products, setSortedProducts }) => {
// //   const handleSort = (type) => {
// //     let sorted;
// //     switch (type) {
// //       case 'SORT_BY_PRICE_LOW_TO_HIGH':
// //         sorted = [...products].sort((a, b) => a.price - b.price);
// //         break;
// //       case 'SORT_BY_PRICE_HIGH_TO_LOW':
// //         sorted = [...products].sort((a, b) => b.price - a.price);
// //         break;
// //       case 'SORT_BY_NAME_A_Z':
// //         sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));
// //         break;
// //       case 'SORT_BY_NAME_Z_A':
// //         sorted = [...products].sort((a, b) => b.name.localeCompare(a.name));
// //         break;
// //       default:
// //         sorted = products;
// //     }
// //     setSortedProducts(sorted);
// //   };

// //   return (
// //     <div className="sort-options">
// //       <button onClick={() => handleSort('SORT_BY_PRICE_LOW_TO_HIGH')}>Price: Low to High</button>
// //       <button onClick={() => handleSort('SORT_BY_PRICE_HIGH_TO_LOW')}>Price: High to Low</button>
// //       <button onClick={() => handleSort('SORT_BY_NAME_A_Z')}>Name: A-Z</button>
// //       <button onClick={() => handleSort('SORT_BY_NAME_Z_A')}>Name: Z-A</button>
// //     </div>
// //   );
// // };

// // export default SortOptions;
// import React, { useReducer } from 'react';

// const sortingReducer = (state, action) => {
//   switch (action.type) {
//     case 'PRICE_LOW_TO_HIGH':
//       return [...state].sort((a, b) => a.price - b.price);
//     case 'PRICE_HIGH_TO_LOW':
//       return [...state].sort((a, b) => b.price - a.price);
//     case 'NAME_A_Z':
//       return [...state].sort((a, b) => a.name.localeCompare(b.name));
//     case 'NAME_Z_A':
//       return [...state].sort((a, b) => b.name.localeCompare(a.name));
//     default:
//       return state;
//   }
// };

// const SortOptions = ({ products, setSortedProducts }) => {
//   const [sortedProducts, dispatch] = useReducer(sortingReducer, products);

//   const handleSort = (type) => {
//     dispatch({ type });
//     setSortedProducts([...sortedProducts]);
//   };

//   return (
//     <div className="sort-options">
//       <button onClick={() => handleSort('PRICE_LOW_TO_HIGH')}>Price: Low to High</button>
//       <button onClick={() => handleSort('PRICE_HIGH_TO_LOW')}>Price: High to Low</button>
//       <button onClick={() => handleSort('NAME_A_Z')}>Name: A-Z</button>
//       <button onClick={() => handleSort('NAME_Z_A')}>Name: Z-A</button>
//     </div>
//   );
// };

// export default SortOptions;

import React from 'react';

const SortOptions = ({ products, setSortedProducts }) => {
  const handleSort = (type) => {
    let sorted;
    switch (type) {
      case 'PRICE_LOW_TO_HIGH':
        sorted = [...products].sort((a, b) => a.price - b.price);  // Sort by price: low to high
        break;
      case 'PRICE_HIGH_TO_LOW':
        sorted = [...products].sort((a, b) => b.price - a.price);  // Sort by price: high to low
        break;
      case 'NAME_A_Z':
        sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));  // Sort by name A-Z
        break;
      case 'NAME_Z_A':
        sorted = [...products].sort((a, b) => b.name.localeCompare(a.name));  // Sort by name Z-A
        break;
      default:
        sorted = products;  // Default (unsorted)
    }
    setSortedProducts(sorted);  // Update the state with sorted products
  };

  return (
    <div className="sort-options">
      <button onClick={() => handleSort('PRICE_LOW_TO_HIGH')}>Price: Low to High</button>
      <button onClick={() => handleSort('PRICE_HIGH_TO_LOW')}>Price: High to Low</button>
      <button onClick={() => handleSort('NAME_A_Z')}>Name: A-Z</button>
      <button onClick={() => handleSort('NAME_Z_A')}>Name: Z-A</button>
    </div>
  );
};

export default SortOptions;
