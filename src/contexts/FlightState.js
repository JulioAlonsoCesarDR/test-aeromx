import React, { useReducer } from 'react'
import FlightContext from './context'
import reducer from './reducer'
import { SET_FLIGHT_COLLECTION } from './types'

const FlightState = props => {
    const initialState = {
        flightCollection: []
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    const setFlightCollectionFn = (payload) => {
        dispatch ({
            type: SET_FLIGHT_COLLECTION,
            payload: payload
        })
    }
    return (
       <FlightContext.Provider
        value={{
            flightCollection: state.flightCollection,
            setFlightCollectionFn,
        }}
       >
           {props.children}
       </FlightContext.Provider>
    )
}

export default FlightState
