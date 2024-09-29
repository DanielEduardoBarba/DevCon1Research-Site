import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App routeScene={0} />} />
        <Route path="/home" element={<App routeScene={0} />} />
        <Route path="/services" element={<App routeScene={1} />} />
        <Route path="/demo" element={<App routeScene={2} />} />
        <Route path="/contact" element={<App routeScene={3} />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
