import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SearchCard = function ({ citta }) {
  return (
    <Col xs={12} md={6}>
      <Link
        to={`/details/${citta}`}
        className="text-decoration-none text-light"
      >
        <div className="sfondo-blur text-light rounded-4 text-center p-5">
          <p className="fs-1 fw-bold">{citta}</p>
        </div>
      </Link>
    </Col>
  )
}

export default SearchCard
