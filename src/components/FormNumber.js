import clsx from 'clsx'
import React, { Fragment, useState } from 'react'
import InputDate from './InputDate';

const FormNumber = () => {
    const [isValidate, setIsValidate] = useState(true);

    return (
        <Fragment>
            <div className="col-md-10 col-xs-12">
                <form className='align-items-center row col-12'>
                    <div className="mb-3 col-xs-12 col-md-4">
                        <label htmlFor="origin" className="fw-lighter text-white form-label">Número de vuelo</label>
                        <input className="form-control input-search" type='number' id="origin" placeholder="Númer de vuelo"
                            onChange={()=>{setIsValidate(false)}}
                        />
                    </div>
                    <div className="mb-3 col-xs-12 col-md-3">
                       <InputDate/>
                    </div>
                    <div className="col-md-2 col-xs-12 mt-3">
                    <button type="button" className={clsx('btn', isValidate && 'buttonSearchDisable', 'buttonSearch' )} disabled={isValidate}>Buscar</button>

                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default FormNumber
