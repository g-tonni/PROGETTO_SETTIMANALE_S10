import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DetailsHours from './DetailsHours'

const DetailsCity = function () {
  const dataEOra = function (data) {
    const dt = data

    let dataOra = {
      dataForm: '',
      oraForm: '',
    }

    const dateObj = new Date(dt)

    const mesi = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const giorno = dateObj.getDate()
    const mese = mesi[dateObj.getMonth()]
    const anno = dateObj.getFullYear()

    const ore = String(dateObj.getHours()).padStart(2, '0')
    const minuti = String(dateObj.getMinutes()).padStart(2, '0')

    // eslint-disable-next-line no-unused-vars
    return (dataOra = {
      dataForm: `${giorno} ${mese} ${anno}`,
      oraForm: `${ore}:${minuti}`,
    })
  }

  const params = useParams()

  const [meteoCity, setMeteoCity] = useState(null)
  const [loading, setLoading] = useState(true)

  const meteoURL = `https://api.openweathermap.org/data/2.5/forecast?q=${params.citta}&appid=991e2d0cc5cdb198eddd10696974fba6&units=metric`

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
        console.log(data)
        setMeteoCity(data)
        setLoading(false)
      })
      .catch((err) => {
        console.log('ERRORE: ', err)
        setLoading(false)
      })
  }

  useEffect(() => {
    getMeteo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className="text-light">
      {loading && (
        <div className="text-center">
          <Spinner variant="info" animation="border" />
        </div>
      )}
      {meteoCity && (
        <Row className="justify-content-center my-5">
          <Col xs={12} md={8}>
            <h1 className="text-center">
              {dataEOra(meteoCity.list[0].dt_txt).dataForm}
            </h1>
          </Col>
          <Col
            xs={12}
            md={8}
            className="d-flex justify-content-between sfondo-blur rounded-4 p-5"
          >
            <div className="align-items-center flex-grow-1 d-flex flex-column justify-content-center">
              <h2>
                {meteoCity.city.name} | {meteoCity.city.country}
              </h2>
              <h1 style={{ fontSize: 60 }}>{meteoCity.list[0].main.temp}°</h1>
              <img
                alt="icona-meteo"
                src={`https://openweathermap.org/img/wn/${meteoCity.list[0].weather[0].icon}@2x.png`}
                className="m-0 w-25"
              />
              <p>
                {meteoCity.list[0].weather[0].main}:{' '}
                {meteoCity.list[0].weather[0].description}
              </p>
            </div>
            <div className="flex-grow-2 d-flex flex-column justify-content-center">
              <p className="fw-bold mb-2 fs-5">Lat and Lon:</p>
              <p className="">
                {meteoCity.city.coord.lat} | {meteoCity.city.coord.lon}
              </p>
              <p className="fw-bold mb-2 fs-5">Min and Max</p>
              <p className="">
                {meteoCity.list[0].main.temp_min}° |{' '}
                {meteoCity.list[0].main.temp_max}°
              </p>
              <p>
                <span className="fw-bold fs-5">Clouds:</span>{' '}
                {meteoCity.list[0].clouds.all}%
              </p>
              <p className="fw-bold mb-2 fs-5">Wind:</p>
              <p className="m-0">Speed: {meteoCity.list[0].wind.speed}</p>
              <p className="m-0">Direction: {meteoCity.list[0].wind.deg}°</p>
              <p className="m-0">
                Maximum gusts: {meteoCity.list[0].wind.gust} m/s
              </p>
            </div>
          </Col>
          <Col xs={12} md={8} className="p-0">
            {loading && (
              <div className="text-center">
                <Spinner variant="info" animation="border" />
              </div>
            )}
            {meteoCity &&
              meteoCity.list.slice(1, meteoCity.list.length).map((element) => {
                return (
                  <DetailsHours
                    key={element.dt}
                    icona={element.weather[0].icon}
                    data={dataEOra(element.dt_txt).dataForm}
                    ora={dataEOra(element.dt_txt).oraForm}
                    temp={element.main.temp}
                    min={element.main.temp_min}
                    max={element.main.temp_max}
                    wMain={element.weather[0].main}
                    description={element.weather[0].description}
                    all={element.clouds.all}
                    speed={element.wind.speed}
                    deg={element.wind.deg}
                    gust={element.wind.gust}
                  />
                )
              })}
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default DetailsCity
