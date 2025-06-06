import React from 'react';
import { BiX } from 'react-icons/bi';
import { AiFillSetting } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import { useProductContext } from '../../context/NameContext';

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
    <div style={{ margin: '20px' }} className="box">
      <div>
        {displayProducts.length === 0 ? (
          <p>محصولی وجود ندارد</p>
        ) : (
          <div>
            <ul>
              {displayProducts.map((item) => (
                <li
                  key={item.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                    margin :'10',
                    fontSize:'x-large'
                  }}
                >
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
                  <Button
                    variant="outline-primary"
                    style={{ padding: '1px 4px', marginLeft: '5px' }}
                    onClick={() => setProducts(products.filter((select) => select.id !== item.id))}
                  >
                    <BiX />
                  </Button>
                  <Button
                    variant="outline-primary"
                    style={{ padding: '1px 4px', marginLeft: '5px' }}
                    onClick={() => handleShow(item.id, item.name)}
                  >
                    <AiFillSetting />
                  </Button>
                  <input
                    type="checkbox"
                    style={{ margin: '5px 2px 5px 15px' }}
                    checked={item.change}
                    onChange={(e) => handleChange(e, item.id)}
                  />
                  <h6>اتمام موجودی</h6>
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