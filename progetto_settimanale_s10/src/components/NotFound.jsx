import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = function () {
  const navigate = useNavigate()
  return (
    <Container className="text-light min-vh-100 d-flex flex-column justify-content-center">
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <div className="text-center p-5 sfondo-blur rounded-5">
            <h1>OOPS!</h1>
            <p className="fs-4">We didn't find what you were looking for</p>
            <button
              className="btn sfondo-blur border-light text-light py-2 px-4 fs-4"
              onClick={() => {
                navigate('/')
              }}
            >
              HOME
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
