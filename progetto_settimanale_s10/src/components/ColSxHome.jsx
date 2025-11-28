import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ColSxHome = function ({ citta, margin }) {
  const [meteoCities, setMeteoCities] = useState(null)

  const meteoURL = `https://api.openweathermap.org/data/2.5/weather?q=${citta},IT&appid=991e2d0cc5cdb198eddd10696974fba6&units=metric`

  const getMeteo = function () {
    fetch(meteoURL)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('ERRORE NELLA RESPONSE: ', res.status)
        }
      })
      .then((data) => {
        // console.log(data)
        setMeteoCities(data)
      })
      .catch((err) => {
        console.log('ERRORE: ', err)
      })
  }

  useEffect(() => {
    getMeteo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meteoCities])

  return (
    <>
      {meteoCities && (
        <Link
          to={`/details/${meteoCities.name},IT`}
          className={
            'd-flex justify-content-between align-items-center sfondo-blur rounded-4 p-3 flex-grow-1 text-decoration-none text-light' +
            (margin === 'Si' ? ' mb-3' : ' m-0')
          }
        >
          <p className="m-0 fs-4 fw-bold">{meteoCities.name}</p>
          <div className="d-flex align-items-center justify-content-end">
            <p className="m-0 me-3 fs-5">{meteoCities.main.temp}°</p>{' '}
            <img
              alt="icona-meteo"
              src={`https://openweathermap.org/img/wn/${meteoCities.weather[0].icon}@2x.png`}
              className="m-0 w-25"
            />
          </div>
        </Link>
      )}
    </>
  )
}

export default ColSxHome
