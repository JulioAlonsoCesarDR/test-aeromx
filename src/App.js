import { Fragment } from 'react';
import './App.scss';
import Flight from './containers/Flight';
import Header from './components/Header';
import SectionSearch from './containers/SectionSearch';
import FlightState from './contexts/FlightState'
function App() {
  return (
    <Fragment>
        <Header/>
      <FlightState >
        <SectionSearch/>
        <Flight/>
      </FlightState>
    </Fragment>

  );
}

export default App;
