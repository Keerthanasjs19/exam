// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../redux/productsSlice';
// import ProductList from '../components/ProductList';
// import SortOptions from '../components/SortOptions';
// import ThemeToggle from '../components/ThemeToggle';
// import withNoProducts from '../hoc/withNoProducts';

// const ProductListWithHOC = withNoProducts(ProductList);

// const HomePage = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products.items);  // Fetch products from Redux state
//   const [sortedProducts, setSortedProducts] = useState(products);

//   useEffect(() => {
//     dispatch(fetchProducts());  // Dispatch fetchProducts action to get data
//   }, [dispatch]);

//   useEffect(() => {
//     setSortedProducts(products);  // Update sorted products whenever products change
//   }, [products]);

//   return (
//     <div>
//       <ThemeToggle />
//       <SortOptions products={products} setSortedProducts={setSortedProducts} />
//       <ProductListWithHOC products={sortedProducts} />
//     </div>
//   );
// };

// export default HomePage;
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../redux/productsSlice';
// import ProductList from '../components/ProductList';
// import SortOptions from '../components/SortOptions';
// import ThemeToggle from '../components/ThemeToggle';
// import ProductSearch from '../components/ProductSearch';  // Import ProductSearch component
// import withNoProducts from '../hoc/withNoProducts';

// const ProductListWithHOC = withNoProducts(ProductList);

// const HomePage = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products.items);  // Fetch products from Redux state
//   const [sortedProducts, setSortedProducts] = useState(products);

//   useEffect(() => {
//     dispatch(fetchProducts());  // Dispatch fetchProducts action to get data
//   }, [dispatch]);

//   useEffect(() => {
//     setSortedProducts(products);  // Update sorted products whenever products change
//   }, [products]);

//   return (
//     <div>
//       <ThemeToggle />
//       <ProductSearch products={products} setSortedProducts={setSortedProducts} /> {/* Add ProductSearch */}
//       <SortOptions products={sortedProducts} setSortedProducts={setSortedProducts} />
//       <ProductListWithHOC products={sortedProducts} />
//     </div>
//   );
// };

// export default HomePage;
import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';
import ProductList from '../components/ProductList';
import SortOptions from '../components/SortOptions';
import ThemeToggle from '../components/ThemeToggle';
import ProductSearch from '../components/ProductSearch';  
import withNoProducts from '../hoc/withNoProducts';
import { ThemeContext } from '../context/ThemeContext';  

const ProductListWithHOC = withNoProducts(ProductList);

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);  
  const [sortedProducts, setSortedProducts] = useState(products);

  
  const { theme, toggleTheme } = useContext(ThemeContext); 

  useEffect(() => {
    dispatch(fetchProducts());  
  }, [dispatch]);

  useEffect(() => {
    setSortedProducts(products);  
  }, [products]);

  return (
    <div className={theme}> 
      <button onClick={toggleTheme} className="theme-toggle">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      
      
      <ProductSearch products={products} setSortedProducts={setSortedProducts} /> 
      <SortOptions products={sortedProducts} setSortedProducts={setSortedProducts} />
      <ProductListWithHOC products={sortedProducts} />
    </div>
  );
};

export default HomePage;
