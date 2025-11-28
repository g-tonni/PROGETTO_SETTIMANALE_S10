const CurrentDayHours = function ({ orario, icona, temp }) {
  return (
    <div className="d-flex justify-content-between align-items-center sfondo-blur rounded-4 flex-grow-1 mb-3 p-3">
      <div>
        <p className="m-0">{orario}</p>{' '}
        <img
          alt="icona-meteo"
          src={`https://openweathermap.org/img/wn/${icona}@2x.png`}
          className="m-0 w-25"
        />
      </div>
      <p className="m-0">{temp}°</p>
    </div>
  )
}

export default CurrentDayHours
