import React from 'react';
import { BiX } from 'react-icons/bi';
import { AiFillSetting } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import { useProductContext } from '../../context/NameContext';
import './ShowName.css'
import { Col, Row } from 'react-bootstrap';

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
    <div style={{ margin: '10px 20px', display: 'flex', justifyContent: 'center' }}>
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
                    <Row>
                      <Col><span style={{ margin: '10px' }}>
                        <span style={{ color: 'blue', fontSize: 'large', margin: '3px' }}> ID: </span>
                        {item.id}
                      </span></Col>
                      <Col><span style={{ margin: '10px' }}>
                        <span style={{ color: 'blue', fontSize: 'large', margin: '3px' }}> name: </span>
                        {item.name}
                      </span></Col>
                      <Col><span style={{ margin: '10px' }}>
                        <span style={{ color: 'blue', fontSize: 'large', margin: '3px' }}> date: </span>
                        {item.date}
                      </span></Col>
                    </Row>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input
                          type="checkbox"
                          checked={item.change}
                          onChange={(e) => handleChange(e, item.id)}
                          style={{ width: '20px', height: '20px' }}
                        />
                        <h6 style={{ margin: 0 }}>اتمام موجودی</h6>
                      </div>
                      <div style={{ display: 'flex', gap: '10px' }}>
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
                      </div>
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