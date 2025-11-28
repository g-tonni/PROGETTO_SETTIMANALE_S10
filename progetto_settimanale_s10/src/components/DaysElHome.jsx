const DaysElHome = function ({ giorno, temp, icona }) {
  return (
    <div className="d-flex justify-content-between align-items-center sfondo-blur rounded-4 flex-grow-1 p-3 mt-3">
      <p className="m-0">{giorno}</p>
      <div className="d-flex align-items-center justify-content-end">
        <p className="m-0 me-3">{temp}°</p>{' '}
        <img
          alt="icona-meteo"
          src={`https://openweathermap.org/img/wn/${icona}@2x.png`}
          className="m-0 w-25"
        />
      </div>
    </div>
  )
}

export default DaysElHome
