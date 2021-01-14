import './App.scss'

import React from 'react'
import Flight from './containers/Flight'
import Header from './components/Header'
import SectionSearch from './containers/SectionSearch'
import FlightState from './contexts/FlightState'

function App() {
  return (
    <>
      <Header />
      <FlightState>
        <SectionSearch />
        <Flight />
      </FlightState>
    </>
  )
}

export default App
