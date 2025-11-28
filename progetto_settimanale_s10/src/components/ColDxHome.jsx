import { useEffect, useState } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import RiqHome from './RiqHome'
import CurrentDayHours from './CurrentDayHours'
import DaysElHome from './DaysElHome'

const ColDxHome = function () {
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

  const [meteoCity, setMeteoCity] = useState(null)
  const [nuovoArr, setNuovoArr] = useState([])
  const [loading, setLoading] = useState(true)

  const meteoURL =
    'https://api.openweathermap.org/data/2.5/forecast?q=Rome,IT&appid=991e2d0cc5cdb198eddd10696974fba6&units=metric'

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
        const nuovoArr2 = data.list
          ? data.list.filter((el, index, array) => {
              const data = el.dt_txt.slice(0, 10)
              return (
                index === array.findIndex((e) => e.dt_txt.slice(0, 10) === data)
              )
            })
          : []

        setNuovoArr(nuovoArr2)
        setLoading(false)
      })
      .catch((err) => {
        console.log('ERRORE: ', err)
        setLoading(false)
      })
  }

  useEffect(() => {
    getMeteo()
  }, [])

  return (
    <Col xs={12} md={8}>
      <Row>
        <Col xs={12} md={8}>
          {loading && (
            <div className="text-center">
              <Spinner variant="info" animation="border" />
            </div>
          )}

          {meteoCity && (
            <RiqHome
              giorno={dataEOra(meteoCity.list[0].dt_txt).dataForm}
              cittaLink={`${meteoCity.city.name},IT`}
              citta={meteoCity.city.name}
              temp={meteoCity.list[0].main.temp}
              des={meteoCity.list[0].weather[0].main}
              max={meteoCity.list[0].main.temp_max}
              min={meteoCity.list[0].main.temp_min}
            />
          )}
        </Col>
        <Col
          xs={12}
          md={4}
          className="d-flex flex-column justify-content-between "
        >
          {loading && (
            <div className="text-center">
              <Spinner variant="info" animation="border" />
            </div>
          )}
          {meteoCity &&
            meteoCity.list.slice(1, 4).map((element) => {
              return (
                <CurrentDayHours
                  key={element.dt}
                  orario={dataEOra(element.dt_txt).oraForm}
                  icona={element.weather[0].icon}
                  temp={element.main.temp}
                />
              )
            })}
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          {loading && (
            <div className="text-center">
              <Spinner variant="info" animation="border" />
            </div>
          )}
          {meteoCity &&
            nuovoArr.slice(1, 6).map((element) => {
              return (
                <DaysElHome
                  key={element.dt}
                  giorno={dataEOra(element.dt_txt).dataForm}
                  temp={element.main.temp}
                  icona={element.weather[0].icon}
                />
              )
            })}
        </Col>
      </Row>
    </Col>
  )
}

export default ColDxHome
