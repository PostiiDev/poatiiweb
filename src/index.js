import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import ReactDom from 'react-dom/client'
import App from './App'

// import reportWebVitals from './reportWebVitals';
// const queryClient = new QueryClient();


// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDom.createRoot(document.getElementById('root')).render(
// root.render(
  <React.StrictMode>

  <App />

</React.StrictMode>,
)
