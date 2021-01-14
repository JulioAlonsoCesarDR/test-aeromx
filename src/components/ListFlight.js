import React, { Fragment, useContext } from 'react'
import FlightContext from '../contexts/context'

const ListFlight = () => {
    /* context */
    const context = useContext(FlightContext)
    const { flightCollection } = context

    return (
        <Fragment>
            {flightCollection.map((item) =>{
                const arrivalTime= new Date(item._collection[0].estimatedArrivalTime)
               return (
                    <div className="row align-items-center my-5">
                        <div className="col-md-3 col-4 row align-items-center">
                            <div className="col-md-6 col-sm-1 ">
                                <h5>{item._collection[0].segment.aircraftType}</h5>
                                <small>Aeromexico Connect</small>
                            </div>
                            <div className="col-md-6 col-sm-1">
                                <h5>{item._collection[0].segment.flightStatus}</h5>
                            </div>
                        </div>
                        <div className=" col-md-3 col-4 row align-items-center">
                            <div className="col-md-6 col-sm-1">
                                <h5>{item._collection[0].segment.departureAirport}</h5>
                                <small>Terminal {item._collection[0].boardingTerminal}</small>
                            </div>
                            <div className="col-md-6 col-sm-1">
                                <h5>{item._collection[0].boardingTime}</h5>
                            </div>
                        </div>
                        <div className="col-md-3 col-3">
                            <div className="dropdown-divider col-12"></div>
                        </div>
                        <div className="col-md-3 col-3 row align-items-center">
                            <div className="col-md-6 col-sm-1">
                                <h5>{arrivalTime.getHours()}:{arrivalTime.getMinutes()}</h5>
                            </div>
                            <div className="col-md-6 col-sm-1">
                            <h5>{item._collection[0].segment.arrivalAirport}</h5>
                            </div>
                        </div>
                        <div className="dropdown-divider"></div>
                    </div>
                )
            }
            )}
        </Fragment>
    )
}

export default ListFlight
