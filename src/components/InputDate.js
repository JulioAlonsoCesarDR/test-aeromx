import React, { Fragment } from 'react'
import { Form } from 'react-bootstrap'

const now = Date.now()
const yesterday = new Date(now)
const nextDay = new Date(now)
const today = new Date(now)
yesterday.setDate(yesterday.getDate() - 1)
nextDay.setDate(nextDay.getDate() + 1)

const InputDate = ({ handleChange }) => {
    return (
        <Fragment>
            <Form.Group controlId='form.departureDate'>
                <Form.Label>Fecha de salida</Form.Label>
                <Form.Control as='select' onChange={handleChange}>
                    <option value={yesterday}>
                        {`${yesterday.getDate()} de ${yesterday.toLocaleString('Es-mx', { month: 'long' })}`}
                    </option>
                    <option value={today}>
                        {`${today.getDate()} de ${today.toLocaleString('Es-mx', { month: 'long' })}`}
                    </option>
                    <option value={nextDay}>
                        {`${nextDay.getDate()} de ${nextDay.toLocaleString('Es-mx', { month: 'long' })}`}
                    </option>
                </Form.Control>
            </Form.Group>
        </Fragment>
    )
}

export default InputDate
