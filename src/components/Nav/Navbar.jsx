import { useReducer, useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useProductContext } from '../../context/NameContext';
import { FaSearch } from "react-icons/fa";

function BasicExample() {
  const { products, setNewProducts } = useProductContext();

  const initialState = { view: 'all' };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'btn1':
        return { view: 'all' };
      case 'btn2':
        return { view: 'cart' };
      case 'btn3':
        return { view: 'others' };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.view === 'cart') {
      setNewProducts(products.filter((item) => item.change));
    } else if (state.view === 'others') {
      setNewProducts(products.filter((item) => !item.change));
    } else {
      setNewProducts([]);
    }
  }, [state.view, products, setNewProducts]);

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Container>
        <Nav activeKey="/home">
          <Form inline className="my-2">
            <Row>
              <Col xs="auto" style={{margin:'0 -10px'}}>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto" style={{margin:'0 -10px'}}>
                <Button variant="outline-secondary" type="submit"><FaSearch /></Button>
              </Col>
            </Row>
          </Form>
          <Nav.Item style={{ margin: '10px 20px' }} className="ms-auto">
            <Nav.Link
              onClick={() => dispatch({ type: 'btn1' })}
              style={{ margin: '0', color: 'white' }}
            >
              محصولات
            </Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ margin: '0 20px', marginTop: '10px' }}>
            <Nav.Link
              onClick={() => dispatch({ type: 'btn2' })}
              style={{ margin: '0', color: 'white' }}
            >
              اتمام موجودی
            </Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ margin: '0 20px', marginTop: '10px' }}>
            <Nav.Link
              onClick={() => dispatch({ type: 'btn3' })}
              style={{ margin: '0', color: 'white' }}
            >
              محصولات موجود
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
}

export default BasicExample;