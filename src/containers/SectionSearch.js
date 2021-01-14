import React, { useEffect, useState } from 'react'
import {
    Container,
    Row,
    Col,
    Form
} from 'react-bootstrap';
import { IoAlarmOutline } from 'react-icons/io5'
import FormDestination from '../components/FormDestination'
import FormNumber from '../components/FormNumber'

const SectionSearch = () => {
    const [optionType, setOptionType] = useState(1)

    const handleChangeOption= val =>
        setOptionType(val)

    const [listAirport, setListAirport] = useState([])

    const getListAirports = () => {
        fetch('https://www.aeromexico.com/cms/api/v1/airports?language=es&status=1')
            .then(response => response.json())
            .then(data => setListAirport(data.airports))
    }

    useEffect(() => {
        getListAirports()
    }, [])

    return (
        <Container fluid>
            <Row>
                <Col>
                    <IoAlarmOutline />
                    <span className='ms-3'>Rastrea tu vuelo</span>
                </Col>
            </Row>
            <Row>
                <Col sm='12' md='2' lg='2'>
                    <Form>
                        <Form.Check
                            label='Destino'
                            type='radio'
                            checked={optionType === 1}
                            onChange={() => handleChangeOption(1)}
                        />
                        <Form.Check
                            label='Numero de vuelo'
                            type='radio'
                            checked={optionType === 2}
                            onChange={() => handleChangeOption(2)}
                        />
                    </Form>
                </Col>
                {optionType === 1 ? <FormDestination listAirport={listAirport}/> : <FormNumber />}
            </Row>
        </Container>
    )
}

export default SectionSearch
