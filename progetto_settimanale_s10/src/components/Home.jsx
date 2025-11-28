import { Container, Row, Col } from 'react-bootstrap'
import ColDxHome from './ColDxHome'
import ColSxHome from './ColSxHome'

const Home = function () {
  return (
    <Container className="text-light min-vh-100 d-flex flex-column justify-content-center">
      <Row>
        <ColDxHome />

        {/* COLONNA SINISTRA */}
        <Col
          xs={12}
          md={4}
          className="d-flex flex-column justify-content-between"
        >
          <ColSxHome citta="Milan" margin="Si" />
          <ColSxHome citta="Naples" margin="Si" />
          <ColSxHome citta="Florence" margin="Si" />
          <ColSxHome citta="Venice" margin="Si" />
          <ColSxHome citta="Turin" margin="No" />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
