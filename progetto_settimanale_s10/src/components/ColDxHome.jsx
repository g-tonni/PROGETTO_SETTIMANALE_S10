import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RiqHome from './RiqHome'
import CurrentDayHours from './CurrentDayHours'
import DaysElHome from './DaysElHome'

const ColDxHome = function () {
  const [meteoCity, setMeteoCity] = useState(null)
  const [nuovoArr, setNuovoArr] = useState([])

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
      })
      .catch((err) => {
        console.log('ERRORE: ', err)
      })
  }

  useEffect(() => {
    getMeteo()
  }, [])

  return (
    <Col xs={12} md={8}>
      <Row>
        <Col xs={12} md={8}>
          {meteoCity && (
            <RiqHome
              citta={meteoCity.city.name}
              temp={meteoCity.list[0].main.temp}
              des={meteoCity.list[0].weather[0].description}
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
          {meteoCity &&
            meteoCity.list.slice(1, 4).map((element) => {
              return (
                <CurrentDayHours
                  key={element.dt}
                  orario={element.dt_txt}
                  icona={element.weather[0].icon}
                  temp={element.main.temp}
                />
              )
            })}
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          {meteoCity &&
            nuovoArr.slice(1, 6).map((element) => {
              return (
                <DaysElHome
                  key={element.dt}
                  giorno={element.dt_txt}
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
