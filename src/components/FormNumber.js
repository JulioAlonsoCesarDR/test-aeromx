import React, { Fragment, useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import InputDate from './InputDate';

const FormNumber = () => {
    const [isValidate, setIsValidate] = useState(true);

    return (
        <Fragment>
            <Col>
                <p style={{ marginBottom: '.5rem' }}>Numero de vuelo</p>
                <div className='input-group'>
                    <input className='form-control'
                        id='flight_id'
                        placeholder='Numero de vuelo'
                        onChange={() => setIsValidate(false)}
                    />
                </div>
            </Col>
            <Col>
                <InputDate />
            </Col>
            <Col>
                <Button
                    onClick={() => {}}
                    disabled={isValidate}
                >
                    Buscar
                </Button>
            </Col>
        </Fragment>
    )
}

export default FormNumber
