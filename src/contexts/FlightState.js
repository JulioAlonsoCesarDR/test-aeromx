import React, { useReducer } from 'react'
import FlightContext from './context'
import reducer from './reducer'
import { SET_FLIGHT_COLLECTION, SET_LOADING } from './types'

const FlightState = props => {
    const initialState = {
        flightCollection: [],
        isLoading: false
    }
    const [{ flightCollection, isLoading }, dispatch] = useReducer(reducer, initialState)

    const setFlightCollectionFn = payload => {
        dispatch({
            type: SET_FLIGHT_COLLECTION,
            payload
        })
    }

    const setLoadingFn = payload => {
        dispatch({
            type: SET_LOADING,
            payload
        })
    }

    return (
       <FlightContext.Provider
        value={{
            flightCollection,
            isLoading,
            setFlightCollectionFn,
            setLoadingFn
        }}
       >
           {props.children}
       </FlightContext.Provider>
    )
}

export default FlightState
