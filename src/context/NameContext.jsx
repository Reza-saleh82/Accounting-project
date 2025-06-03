import { createContext, useContext, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [edite, setEdite] = useState('');
  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState(null);
  const [check, setCheck] = useState(0);
  const [newProducts, setNewProducts] = useState([]);

  const addProduct = (name) => {
    const newProduct = {
      id: Date.now(),
      name,
      date: new Date().toLocaleDateString('fa-IR'),
      change: false,
    };
    setProducts([...products, newProduct]);
  };

  const handleEdit = (id, newName) => {
    if (newName && id) {
      const updatedProducts = products.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      );
      setProducts(updatedProducts);
      setEditId(null);
      setEdite('');
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        setProducts,
        edite,
        setEdite,
        show,
        setShow,
        editId,
        setEditId,
        handleEdit,
        check,
        setCheck,
        newProducts,
        setNewProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProductContext = () => useContext(ProductContext);