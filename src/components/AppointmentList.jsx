import { Col, Row } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import {TiDelete} from "react-icons/ti"

const AppointmentList = ({apps}) => {

  console.log(
    apps
  )
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>

    {apps.map(({id , patient , doctor , day , consulted }) => (
    <div className={consulted ? "appointments consulted" : "appointments" } key={id}>
      <Row className="justify-content-center align-items-center">  
        <Col  sm={12} md={6}  > 
        <h3>{patient }</h3>
        <h4>doctorName</h4>
        </Col>
        <Col>
        <h3>{day}</h3>
        </Col>
        <Col className="text-end">
        <TiDelete className="text-danger fs-3 "/>
        </Col>
      </Row>
    </div>))}
    

    </Container>
  )
}

export default AppointmentList
