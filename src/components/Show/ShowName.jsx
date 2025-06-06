import React from 'react';
import { BiX } from 'react-icons/bi';
import { AiFillSetting } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import { useProductContext } from '../../context/NameContext';
import './ShowName.css'

function ShowName() {
  const { products, newProducts, setProducts, setEdite, setShow, setEditId } = useProductContext();

  const handleShow = (id, name) => {
    setEditId(id);
    setEdite(name);
    setShow(true);
  };

  const handleChange = (e, id) => {
    const checkItem = products.map((item) =>
      item.id === id ? { ...item, change: e.target.checked } : item
    );
    setProducts(checkItem);
  };

  // تعیین لیست محصولات برای نمایش
  const displayProducts = newProducts.length > 0 ? newProducts : products;

  return (
    <div style={{ margin: '20px', display: 'flex', justifyContent: 'center' }}>
      <div className="box">
        {displayProducts.length === 0 ? (
          <p>محصولی وجود ندارد</p>
        ) : (
          <div>
            <ul>
              {displayProducts.map((item) => (
                <li
                  key={item.id}
                  className='ListBox'
                >
                  <div className='Border'>
                    <div>
                      <span style={{ margin: '10px' }}>
                        <span style={{ color: 'blue', fontSize: 'large', margin: '3px' }}> ID: </span>
                        {item.id}
                      </span>
                      <span style={{ margin: '10px' }}>
                        <span style={{ color: 'blue', fontSize: 'large', margin: '3px' }}> name: </span>
                        {item.name}
                      </span>
                      <span style={{ margin: '10px' }}>
                        <span style={{ color: 'blue', fontSize: 'large', margin: '3px' }}> date: </span>
                        {item.date}
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <Button
                        variant="outline-primary"
                        onClick={() => setProducts(products.filter((select) => select.id !== item.id))}
                        className='BtnE'
                      >
                        حذف
                      </Button>
                      <Button
                        variant="outline-primary"
                        onClick={() => handleShow(item.id, item.name)}
                        className='BtnE'
                      >
                        تغییرات
                      </Button>
                      <input
                        type="checkbox"
                        checked={item.change}
                        onChange={(e) => handleChange(e, item.id)}
                      />
                      <h6>اتمام موجودی</h6>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowName;