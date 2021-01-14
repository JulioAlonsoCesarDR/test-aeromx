import clsx from 'clsx';
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import FlightContext from '../contexts/context';
import InputDate from './InputDate';

const FormDestination = (props) => {
    /* State */
    const [isValidate, setIsValidate] = useState(true);
    const [data, setData] = useState({store:'mx',
                                    pos:'WEB',
                                    flight:4,
                                    date:new Date(Date.now()).toISOString().slice(0, 10),
                                    origin:'',
                                    destination:''});
    /* Context */
    const context = useContext(FlightContext)
    const { setFlightCollectionFn } = context

    const handleChange = (e) => {
        switch (e.target.id) {
            case 'date':
                setData({...data, ['date']:new Date(e.target.value).toISOString().slice(0, 10)})
                break;
            case 'origin':
                setData({...data, ['origin']: e.target.value})
                break
            case 'destination':
                setData({...data, ['destination']: e.target.value})
                break
            default:
                break;
        }
    }
     const {listAirport} = props
    const handleIsValidate = () => {
        if(data.date !== '' && data.destination !== '' & data.origin !=='') {
            setIsValidate(false)
        } else {
            setIsValidate(true)
        }

    }

    const onSubmit = (e)=> {
        e.preventDefault()
        fetch(`https://www.aeromexico.com/api/v1/checkin/flight-status?store=mx&pos=WEB&flight=&date=${data.date}&origin=${data.origin}&destination=${data.destination}`)
        .then(response => response.json())
        .then(data => {setFlightCollectionFn(data._collection)})
        .catch((error)=> {console.log('error', error)});
    }


    useEffect(() => {
        handleIsValidate()
    }, [data])

    return (
        <Fragment>
            <div className="col-md-10 col-xs-12">
                <form className='align-items-center row col-12'>
                    <div className="mb-3 col-xs-12 col-md-3">
                        <label htmlFor="origin" className="fw-lighter text-white form-label">Origen</label>
                        <input className="form-control input-search"
                            list="datalistOrigin"
                            id="origin"
                            placeholder="Origen"
                            defaultValue=''
                            onChange={(e)=>handleChange(e)}/>
                            <datalist id="datalistOrigin">
                                {listAirport.map((item, index) =>
                                    <option key={index} value={item.airport.cityCode}>
                                        {item.airport.city}
                                    </option>
                                )}
                            </datalist>
                    </div>
                    <button className='switch mt-3 d-none d-sm-flex col-md-1' disabled>
                        <h3 className='m-0'> <HiOutlineSwitchHorizontal className='m-1'/> </h3>
                    </button>
                    <div className="mb-3 col-xs-12 col-md-3">
                        <label htmlFor="destination" className="fw-lighter text-white form-label">Destino</label>
                        <input className="form-control input-search"
                            list="datalistDestination"
                            id="destination"
                            placeholder="Destino"
                            defaultValue=''
                            onChange={(e)=>handleChange(e)}/>
                            <datalist id="datalistDestination">
                                {listAirport.map((item, index) =>
                                    <option key={index} value={item.airport.cityCode}>
                                        {item.airport.city}
                                    </option>
                                )}
                            </datalist>
                    </div>
                    <div className="mb-3 col-xs-12 col-md-3">
                       <InputDate handleChange={handleChange}/>
                    </div>
                    <div className="col-md-2 col-xs-12 mt-3">
                        <button onClick={(e)=>{onSubmit(e)}} type="button" className={clsx('btn', isValidate && 'buttonSearchDisable', 'buttonSearch' )} disabled={isValidate}>Buscar</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default FormDestination