import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ClockHeading from './components/ClochHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'


function App() {

  return (
    <center>
     <ClockHeading></ClockHeading>
     <ClockSlogan></ClockSlogan>
     <CurrentTime></CurrentTime>
    </center>
  )
}

export default App
