import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Add, Sub, Mul, Div, Whoops404 } from './components/pages';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/mul" element={<Mul />} />
        <Route path="/div" element={<Div />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}
