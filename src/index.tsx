import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Carousel from './carousel'

// need to use ReactDOM.createRoot method instead of ReactDOM.render due to React v18
let root = ReactDOM.createRoot(document.getElementById('app-root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Carousel />
  </React.StrictMode>,
);
