// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import { ThemeProvider } from './context/ThemeContext';
// import HomePage from './pages/HomePage';
// import './styles/global.css';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <ThemeProvider>
//         <HomePage />
//       </ThemeProvider>
//     </Provider>
//   );
// };

// export default App;
import React from 'react';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="App">
      <HomePage />
      
    </div>
  );
};

export default App;