import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MeteoNavbar = function () {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="sfondo-blur border-top-0 text-light"
    >
      <Container fluid>
        <Link to="/" className="text-light text-decoration-none m-0">
          <i className="bi bi-clouds-fill fs-3"></i>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link text-light me-3">
              Home
            </Link>
            <Link to="/search" className="nav-link text-light">
              <i className="bi bi-search"></i> Search
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MeteoNavbar
