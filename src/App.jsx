import './css/home.css';
import ProductProvider from './context/NameContext';
import AddName from './components/ADD/AddName';
import ShowName from './components/Show/ShowName';
import Example from './components/Modole/Example';
import Nav from './components/Nav/Navbar.jsx'

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