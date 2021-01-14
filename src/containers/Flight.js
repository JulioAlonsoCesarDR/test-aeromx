import React, { useContext } from 'react'
import { Spinner } from 'react-bootstrap'
import ListFlight from '../components/ListFlight'
import FlightContext from '../contexts/context'

const Flight = () => {
    const { flightCollection } = useContext(FlightContext)
    const { isLoading } = useContext(FlightContext)

    if (isLoading) return <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
    </Spinner>

    return (
        <>
            {flightCollection.length !== 0 ?
                <div className="container">
                    <div className="d-none d-sm-block">
                        <div className="row my-5">
                            <div className="col-md-2 col-xs-12 py-5">
                                Número de Vuelo
                            </div>
                            <div className="col-md-1 col-xs-12 py-5">
                                Estado
                            </div>
                            <div className="col-md-1 col-xs-12 py-5">
                                Origen
                            </div>
                            <div className="col-md-2 col-xs-12 py-5">
                                Hora de salida
                            </div>
                            <div className="col-md-2 col-xs-12"/>
                            <div className="col-md-2 col-xs-12 py-5">
                                Hora de llegada
                            </div>
                            <div className="col-md-1 col-xs-12 py-5">
                                Destino
                            </div>
                            <div className="dropdown-divider"></div>
                        </div>
                    </div>
                    <ListFlight/>
                </div>
            : null}
        </>
    )
}

export default Flight
