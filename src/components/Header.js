import React from 'react'

const Header = () => {
    return (
        <div className='header text-white '>
            <nav className="navbar navbar-expand-lg navbar-light header">
                <div className="container-fluid">
                    <span className="navbar-brand text-white">
                        LOGO
                    </span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <span className="nav-link active text-white " aria-current="page">Reserva</span>
                        </li>
                        <li className="nav-item">
                        <span className="nav-link text-white ">Tu Viaje</span>
                        </li>
                        <li className="nav-item">
                        <span className="nav-link text-white ">Check-in</span>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
