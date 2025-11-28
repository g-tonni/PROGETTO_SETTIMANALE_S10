const DetailsHours = function ({
  icona,
  data,
  ora,
  temp,
  min,
  max,
  wMain,
  description,
  all,
}) {
  return (
    <div className="sfondo-blur rounded-4 d-flex justify-content-between p-4 mt-3">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img
          alt="icona-meteo"
          src={`https://openweathermap.org/img/wn/${icona}@2x.png`}
          className="m-0 w-50"
        />
        <div>
          {data} | {ora}
        </div>
      </div>
      <div className="flex-grow-1 ms-4 text-end">
        <p className="fs-4 fw-bold">{temp}°</p>
        <p className="fw-bold mb-2 fs-5">Min and Max</p>
        <p className="">
          {min}° | {max}°
        </p>
        <p>
          <span className="fw-bold fs-5">{wMain}:</span> {description}
        </p>
        <p>
          <span className="fw-bold fs-5">Clouds:</span> {all}%
        </p>
      </div>
    </div>
  )
}

export default DetailsHours
