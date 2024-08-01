import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import Header from './components/Header.js'

import './index.css';
import './index.js';



function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);