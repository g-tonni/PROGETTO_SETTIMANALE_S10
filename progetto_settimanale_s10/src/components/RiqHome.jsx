const RiqHome = function ({ citta, temp, des, max, min }) {
  return (
    <div className="text-center sfondo-blur p-5 rounded-5 mb-3">
      <h1>{citta}</h1>
      <h1 style={{ fontSize: 80 }}>{temp}°</h1>
      <p>{des}</p>
      <p className="d-flex justify-content-center">
        <span className="me-3">MAX: {max}°</span>
        <span>MIN: {min}°</span>
      </p>
    </div>
  )
}

export default RiqHome
