
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function AddModal({show , setShow ,drName }) {
  const  [name , setName] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0,10))

  const handleSubmit = (e)=>{
    e.preventDefault()

    setShow(false)
    setName("")
  }
  
  return (
    <>
     
      <Modal show={show} onHide={()=> setShow(false)} >
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'>Reservation for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Patient Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name"  
                onChange={(e)=>setName(e.target.value)}
                value={name}
                />
          <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date & Time</Form.Label>
        <Form.Control type="date" placeholder="date"
        onChange={(e)=>setDate(e.target.value)}
        value={date}
        />
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