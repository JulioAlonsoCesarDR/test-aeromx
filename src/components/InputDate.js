import React, { Fragment } from 'react'


const InputDate = (props) => {
    const now = Date.now()
    const yesterday = new Date(now)
    const nextDay = new Date(now)
    const today = new Date(now)
    yesterday.setDate(yesterday.getDate() - 1)
    nextDay.setDate(nextDay.getDate() + 1)

    const {handleChange} = props
    return (
        <Fragment>
            <label htmlFor="date" className="fw-lighter text-white form-label">Fecha de Salida</label>
            <select className="form-select input-search" id='date' onChange={(e) => handleChange(e) } defaultValue={today}>
                <option value={yesterday}>
                {
                    `
                        ${yesterday.getDate()} de ${yesterday.toLocaleString('Es-mx', { month: 'long' })}
                    `
                }

                </option>
                <option selected value={today}>
                {
                    `
                        ${today.getDate()} de ${today.toLocaleString('Es-mx', { month: 'long' })}
                    `
                }
                </option>
                <option value={nextDay}>
                {
                    `
                        ${nextDay.getDate()} de ${nextDay.toLocaleString('Es-mx', { month: 'long' })}
                    `
                }
                </option>
            </select>
        </Fragment>
    )
}

export default InputDate
