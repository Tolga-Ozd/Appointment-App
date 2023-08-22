import Container from "react-bootstrap/Container"
import {doctorData} from "../helper/data"
import { Col, Row } from "react-bootstrap"
import AddModal from "./AddModal"
import { useState } from "react"

const Doctors = () => {

  const [show, setShow] = useState(false);

  const [drName , setDrName] = useState("")

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      
    <Row>
      {doctorData.map(({id , img , name , dep })=>(
          <Col key={id} xs={6} sm={4} md={3} >
          <img src={img} alt="image"  className="img-thumbnail"
           onClick={()=>
          { setDrName(name)
           setShow(true)} } />
          <h4>{name}</h4>
          <h5>{dep}</h5>
          </Col>
      ))}
    </Row>

    <AddModal show = {show} setShow={setShow} drName = {drName}  />

    </Container>
  )
}

export default Doctors
