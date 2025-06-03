import { useReducer, useEffect } from 'react'; // اضافه کردن useEffect
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useProductContext } from '../context/NameContext';

function BasicExample() {
  const { products, setNewProducts } = useProductContext();

  // مقدار اولیه state برای تعیین نوع نمایش
  const initialState = { view: 'all' }; // 'all', 'cart', 'others'

  const reducer = (state, action) => {
    switch (action.type) {
      case 'btn1': // محصولات
        return { view: 'all' };
      case 'btn2': // سبد خرید
        return { view: 'cart' };
      case 'btn3': // بقیه محصولات
        return { view: 'others' };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // استفاده از useEffect برای به‌روزرسانی newProducts بعد از تغییر state.view
  useEffect(() => {
    if (state.view === 'cart') {
      setNewProducts(products.filter((item) => item.change)); // محصولات چک‌شده
    } else if (state.view === 'others') {
      setNewProducts(products.filter((item) => !item.change)); // محصولات چک‌نشده
    } else {
      setNewProducts([]); // برای 'all'، نیازی به newProducts نداریم
    }
  }, [state.view, products, setNewProducts]); // وابستگی‌ها

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Container>
        <Nav activeKey="/home" style={{ flexDirection: 'row-reverse' }}>
          <Nav.Item style={{ margin: '10px 20px' }}>
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