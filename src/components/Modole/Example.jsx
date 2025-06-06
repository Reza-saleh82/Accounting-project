import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useProductContext } from '../../context/NameContext';

function Example() {
  const { show, setShow, editId, edite, handleEdit } = useProductContext();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (show && edite) {
      setInputValue(edite);
    }
  }, [show, edite]);

  const handleClose = () => {
    setShow(false);
    setInputValue('');
  };

  const handleSave = () => {
    if (inputValue.trim()) {
      handleEdit(editId, inputValue);
      handleClose();
    } else {
      alert('نام متغیر وارد شود !!!');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edite</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ margin: '10px' }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="change name ? "
            style={{ padding: '5px', marginRight: '10px', borderRadius: '10px', width: '300px' }}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Example;