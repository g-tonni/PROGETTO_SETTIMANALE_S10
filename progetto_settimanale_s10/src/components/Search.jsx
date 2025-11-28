import { Container, Row, Col, Form } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import SearchCard from './SearchCard'

const Search = function () {
  const [searchCity, setSearchCity] = useState('')
  const [meteoCity, setMeteoCity] = useState(null)

  const meteoURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    searchCity
  )}&appid=991e2d0cc5cdb198eddd10696974fba6&units=metric`

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
      })
      .catch((err) => {
        console.log('ERRORE: ', err)
      })
  }

  useEffect(() => {
    if (searchCity.length > 3) {
      getMeteo()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchCity])

  return (
    <Container className="my-5 min-vh-100">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form>
            <Form.Control
              type="text"
              placeholder="Search..."
              value={searchCity}
              onChange={(e) => {
                setSearchCity(e.target.value)
              }}
            />
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        {searchCity === '' && (
          <div className="text-center sfondo-blur p-5 text-light rounded-4 w-50">
            <p className="fs-4">Search your City!</p>
          </div>
        )}
        {!meteoCity && searchCity !== '' && (
          <div className="text-center sfondo-blur p-5 text-light rounded-4 w-50">
            <p className="fs-4">
              OOPS! <br /> There are no results for your search! <br /> Try
              again!
            </p>
          </div>
        )}
        {meteoCity && <SearchCard citta={meteoCity.name} />}
      </Row>
    </Container>
  )
}

export default Search
