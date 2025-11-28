import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Home />
    </div>
  )
}

export default App

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=991e2d0cc5cdb198eddd10696974fba6&units=metric
// https://api.openweathermap.org/data/2.5/forecast?q=Milan,IT&appid=991e2d0cc5cdb198eddd10696974fba6&units=metric
// api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}
// https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid={API key}
// https://openweathermap.org/img/wn/03d@2x.png
