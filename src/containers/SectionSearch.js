import React, { Fragment, useEffect, useState } from 'react'
import { IoAlarmOutline } from "react-icons/io5";
import FormDestination from '../components/FormDestination';
import FormNumber from '../components/FormNumber';


const SectionSearch = () => {
    const [optionType, setOptionType] = useState('option1')
    const handleChangeOption= (e)=> {
        setOptionType(e.target.value)
    }
    const [listAirport, setListAirport] = useState([])
    const getListAirports = ()=> {
        fetch('https://www.aeromexico.com/cms/api/v1/airports?language=es&status=1')
        .then(response => response.json())
        .then(data => setListAirport(data.airports));
    }
    useEffect(() => {
        getListAirports()
    }, [])
    return (
        <Fragment>
            <div className="section_search d-flex w-100 h-100 justify-content-center align-items-start">
                <div className='container'>
                    <div className="row px-1 pb-5">
                        <div className="column col-xs-12 text-white mt-5">
                            <h1 className='d-flex align-items-center'> <IoAlarmOutline /> <span className='ms-3'>Rastrea tu vuelo</span></h1>
                        </div>
                        <div className="row col-md-2 col-xs-12 text-white">
                            <div className="form-check d-flex align-items-center  col-md-12 col-6">
                                <input className="form-check-input radio-input "
                                    type="radio"
                                    name="optionType"
                                    id="optionDestination"
                                    value='option1'
                                    checked={ optionType === 'option1'}
                                    onChange={(e)=>{handleChangeOption(e)}} />
                                <label className="form-check-label mt-1 " htmlFor="optionDestination">
                                    Destino
                                </label>
                            </div>
                            <div className="form-check d-flex align-items-center col-md-12 col-6">
                                <input className="form-check-input radio-input"
                                    type="radio"
                                    name="optionType"
                                    id="optionNumber"
                                    value='option2'
                                    checked={ optionType === 'option2'}
                                    onChange={(e)=>{handleChangeOption(e)}}
                                    />
                                <label className="form-check-label mt-1" htmlFor="optionNumber">
                                    Número de vuelo
                                </label>
                            </div>
                        </div>
                        {
                            optionType === 'option1' ? <FormDestination listAirport={listAirport}/> : <FormNumber/>
                        }
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default SectionSearch
