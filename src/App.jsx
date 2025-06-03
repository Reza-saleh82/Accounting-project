import React from 'react';
import AddName from './components/AddName';
import ShowName from './components/ShowName';
import Example from './components/Example';
import './css/home.css';
import ProductProvider from './context/NameContext';
import Nav from './components/Navbar';

export default function App() {
  return (
    <div>
      <ProductProvider>
        <Nav />
        <AddName />
        <ShowName />
        <Example />
      </ProductProvider>
    </div>
  );
}