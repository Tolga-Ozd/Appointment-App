
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddModal({show , setShow }) {
  
  return (
    <>
     
      <Modal show={show} onHide={()=> setShow(false)} >
        <Modal.Header closeButton>
          <Modal.Title>Reservation for ...</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Patient Name</Form.Label>
        <Form.Control type="email" placeholder="Enter your name" />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date & Time</Form.Label>
        <Form.Control type="date" placeholder="date" />
      </Form.Group>
     
      <div className='text-center '>
      <Button variant="primary" type="submit" className='me-2'>
        Submit
      </Button>
      <Button variant="success" onClick={()=> setShow(false)}>
            Close
          </Button>
      </div>
    </Form></Modal.Body>
       
      </Modal>
    </>
  );
}

export default AddModal;