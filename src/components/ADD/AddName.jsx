import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { AiOutlineSave } from 'react-icons/ai';
import { useProductContext } from '../../context/NameContext';
import Container from 'react-bootstrap/Container';

function AddName() {
  const [name, setName] = useState('');
  const { addProduct } = useProductContext();

  const handleSubmit = () => {
    if (name.trim()) {
      addProduct(name);
      setName('');
    } else {
      alert('نام را وارد کنید !!');
    }
  };

  return (
    <Container>
      <div style={{ marginTop: '100px' }} className="box2">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name ? "
            style={{ padding: '5px', marginRight: '10px', borderRadius: '10px', width: '500px',fontSize:'x-large'}}
          />
          <Button
            variant="dark"
            onClick={handleSubmit}
            style={{ padding: '5px 10px', borderRadius: '50%', marginBottom: '8px',fontSize:'x-large'}}
          >
            <AiOutlineSave />
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default AddName;