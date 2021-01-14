import React from 'react'

export default function Autocomplete ({
    label,
    onChange,
    data,
    getValue,
    parseLabel,
    listName,
    placeholder,
    ...others
}) {
    return <>
        <p style={{ marginBottom: '.5rem' }}>{label}</p>
        <div className='input-group'>
            <input className='form-control'
                list={listName}
                id={others.id}
                placeholder={placeholder}
                defaultValue=''
                onChange={onChange}
            />
            <datalist id={listName}>
                {data.map((item, index) =>
                    <option key={index} value={getValue(item)}>
                        {parseLabel ? parseLabel(item) : getValue(item)}
                    </option>
                )}
            </datalist>
        </div>
    </>
}
