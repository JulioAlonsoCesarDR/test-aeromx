import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import { HiOutlineSwitchHorizontal } from "react-icons/hi"
import FlightContext from '../contexts/context'
import InputDate from './InputDate'
import Autocomplete from './Autocomplete'

const FormDestination = ({ listAirport }) => {
    const [isValidate, setIsValidate] = useState(true)
    const [data, setData] = useState({
        store:'mx',
        pos: 'WEB',
        flight: 4,
        date: new Date(Date.now()).toISOString().slice(0, 10),
        origin: '',
        destination: ''
    })

    const { setFlightCollectionFn, setLoadingFn } = useContext(FlightContext)

    const handleChange = e => {
        switch (e.target.id) {
            case 'date':
                setData({ ...data, date: new Date(e.target.value).toISOString().slice(0, 10)})
                break
            case 'origin':
                setData({ ...data, origin: e.target.value})
                break
            case 'destination':
                setData({ ...data, destination: e.target.value})
                break
            default:
                break
        }
    }

    const onSubmit = e => {
        e.preventDefault()

        setLoadingFn(true)

        fetch(`https://www.aeromexico.com/api/v1/checkin/flight-status?store=mx&pos=WEB&flight=&date=${data.date}&origin=${data.origin}&destination=${data.destination}`)
            .then(response => response.json())
            .then(data => {
                setFlightCollectionFn(data._collection)
                setTimeout(() => setLoadingFn(false), 1000)
            })
            .catch(error => alert('error', error))
    }

    useEffect(() => {
        if (data.date !== '' && data.destination !== '' & data.origin !=='') {
            setIsValidate(false)
        } else {
            setIsValidate(true)
        }
    }, [data])

    return (
        <Fragment>
            <Col sm='12' md='2' lg='2'>
                <Autocomplete
                    label='Origen'
                    onChange={handleChange}
                    data={listAirport}
                    getValue={item => item.airport.cityCode}
                    parseLabel={item => item.airport.city}
                    listName='datalistOrigin'
                    placeholder='Origen'
                    id='origin'
                />
            </Col>
            <Col xs='1' sm='1' md='1' lg='1'>
                <HiOutlineSwitchHorizontal onClick={() => {}} />
            </Col>
            <Col sm='12' md='2' lg='2'>
                <Autocomplete
                    label='Destino'
                    onChange={handleChange}
                    data={listAirport}
                    getValue={item => item.airport.cityCode}
                    parseLabel={item => item.airport.city}
                    listName='datalistDestination'
                    placeholder='Destino'
                    id='destination'
                />
            </Col>
            <Col xs='12' md='3' lg='3'>
                <InputDate handleChange={handleChange}/>
            </Col>
            <Col xs='12' md='2' lg='2' style={{ textAlign: 'end' }}>
                <Button
                    onClick={onSubmit}
                    disabled={isValidate}
                >
                    Buscar
                </Button>
            </Col>
        </Fragment>
    )
}

export default FormDestination
