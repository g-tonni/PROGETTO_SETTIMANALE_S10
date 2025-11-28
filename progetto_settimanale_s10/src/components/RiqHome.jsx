import { Link } from 'react-router-dom'

const RiqHome = function ({ cittaLink, giorno, citta, temp, des, max, min }) {
  return (
    <Link
      to={`/details/${cittaLink}`}
      className="text-light text-decoration-none"
    >
      <div className="text-center sfondo-blur p-5 rounded-5 mb-3">
        <h5>{giorno}</h5>
        <h1>{citta}</h1>
        <h1 style={{ fontSize: 80 }}>{temp}°</h1>
        <p>{des}</p>
        <p className="d-flex justify-content-center">
          <span className="me-3">MAX: {max}°</span>
          <span>MIN: {min}°</span>
        </p>
      </div>
    </Link>
  )
}

export default RiqHome
